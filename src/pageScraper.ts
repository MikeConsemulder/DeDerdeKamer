const pageScraper = {

	url: 'https://www.tweedekamer.nl/kamerstukken?qry=%2A&fld_tk_categorie=Kamerstukken&srt=date%3Aasc%3Adate&fromdate=01%2F01%2F2021&todate=31%2F01%2F2021&clusterName=Tweedekamer.nl&sta=1&fld_prl_kamerstuk=Stemmingsuitslagen',

	async scraper(browser) {

		let page = await browser.newPage();
		console.log(`Navigating to ${this.url}...`);

		// Navigate to the selected page
		await page.goto(this.url);

		// Wait for the required DOM to be rendered
		await page.waitForSelector('.content-search');

		// Get the link to all the required books
		let urls = await page.$$eval('.content-search .card', votingResultCards => {

			// Make sure the book to be scraped is in stock
			votingResultCards = votingResultCards.filter(votingCard =>  {

				const cardTitle = votingCard.querySelector('.card__title');
				if(cardTitle === null) return false;
				return cardTitle.textContent !== "Stemmingsuitslagen"
			})
			
			// Extract the links from the data
			votingResultCards = votingResultCards.map(el => el.querySelector('h3 > a').href)
			return votingResultCards;
		});

		console.log(urls);

	}
}
export { pageScraper };