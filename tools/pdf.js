const puppeteer = require('puppeteer');
const {Logger, LogLevel} = require('plop-logger');
const {colorEmojiConfig} = require('plop-logger/lib/extra/colorEmojiConfig');
const handler = require('serve-handler');
const http = require('http');
const pdfmerge = require('easy-pdf-merge');

Logger.config = colorEmojiConfig;
Logger.config.defaultLevel = LogLevel.Debug;
const logger = Logger.getLogger('pdf');

// Configuration
const output1 = 'static/schedule/schedule1.pdf';
const output2 = 'static/schedule/schedule2.pdf';
const output = 'static/schedule/schedule.pdf';
const serverConf = {
  port: 8765,
  options: {
    "public": "./public"
  }
};
const browserConf = {
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  defaultViewport: {width: 1280, height: 1700},
  margin: {
    top: "0cm",
    right: "0cm",
    bottom: "0cm",
    left: "0cm"
  },
  devtools: false
};

async function startServer({port, options}) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((request, response) =>
      handler(request, response, options));

    server.listen(port, err => {
      if (err) {
        logger.error('Fail to start server', err);
        reject(err);
      } else {
        logger.info('Server started', () => `http://localhost:${port}`);
        resolve(server);
      }
    });
  });
}

async function stopServer(server) {
  return new Promise((resolve, reject) => {
    logger.info('Stopping server...');
    server.close(err => {
      if (err) {
        logger.error('Fail to stop server', err);
        reject(err);
      } else {
        logger.info('Server stopped');
        resolve();
      }
    });
  });
}

async function cleanupBeforePrint(page) {
  const toHide = [
    'body > header',
    'body > footer',
    'main .hero',
    'main .hero-desc',
  ];

  await page.$$eval(toHide.join(','), elts =>
    elts.forEach(elt =>
      elt.parentNode.removeChild(elt)));

  await page.addStyleTag({
    content: '@page { size: auto; }',
  });
}

(async () => {
  const server = await startServer(serverConf);

  logger.info("launch puppeteer browser");
  const browser = await puppeteer.launch(browserConf);
  try {
    const pages = ["#day_2019-10-21", "#day_2019-10-22"];
    for (var i = 0; i < pages.length; i++) {
        logger.info("open new page");
        const page = await browser.newPage();
        logger.debug("opened new page");

        const url = `http://localhost:${serverConf.port}/fr/schedule/${pages[i]}`;
        logger.info("go to", url);
        const pageResponse = await page.goto(url, {waitUntil: 'networkidle2'});
        logger.debug("done", pageResponse.statusText());

        await cleanupBeforePrint(page);
        logger.info('export pdf', 'static/schedule/schedule' + (i+1) + '.pdf');
        const format = 'A3';
        const scale = .38;
        const printBackground = true;
        await page.pdf({path:'static/schedule/schedule' + (i+1) + '.pdf', format, scale, printBackground});
        logger.debug("pdf done");
    }

    pdfmerge([output1,output2],output,function(err){
        if(err)
        logger.debug("error during merge");
        
        logger.info('merge pdf done', output);
    });

  } catch (e) {
    console.error(e);
    logger.error('Oops!', e);
  } finally {
    logger.info('close puppeteer browser');
    await browser.close();
    await stopServer(server);
  }
})();