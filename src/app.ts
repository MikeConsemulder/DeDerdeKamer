import { browser } from './browser';
import { pageController } from './pageController';

//Start the browser and create a browser instance
let browserInstance = browser.start();

// Pass the browser instance to the scraper controller
pageController.scrapeAll(browserInstance);

