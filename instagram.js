const puppeteer = require('puppeteer');

const BASE_URL = "https://instagram.com/";

const instagram = {
	broswer: null,
	page: null,

	initialize: async () => {
		instagram.browser = await puppeteer.launch({
			headless: false
		});
		instagram.page = await instagram.browser.newPage();	
	},

	login: async (username,password) => {
		await instagram.page.goto(BASE_URL, {waitUntil: 'networkidle2'});
		//going to the login page
		let loginButton = await instagram.page.$x("//a[contains(text(),'Log in')]");
		await loginButton[0].click();

		await instagram.page.waitForNavigation({waitUntil: 'networkidle2'});
		//username and password

		await instagram.page.type("input[name='username']", username, {delay:500});

	}




}

module.exports = instagram;