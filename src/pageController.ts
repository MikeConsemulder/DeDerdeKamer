import { pageScraper } from './pageScraper';

const pageController = {
	async scrapeAll(browserInstance) {
		let browser;
		try {
			browser = await browserInstance;
			await pageScraper.scraper(browser);

		}
		catch (err) {
			console.log("Could not resolve the browser instance => ", err);
		}
	}
}

export { pageController };