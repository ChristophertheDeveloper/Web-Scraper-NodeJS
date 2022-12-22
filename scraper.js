const puppeteer = require('puppeteer');
async function scrapeProduct1(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const [rawpnTxt] = await page.$x('//*[@id="productTitle"]')
	const productNametxt = await rawpnTxt.getProperty('textContent')
	const productName = await productNametxt.jsonValue();
	const [rawdTxt] = await page.$x('//*[@id="prodDesc"]/div[2]/div/div[1]/p[1]')
	const descriptiontxt = await rawdTxt.getProperty('textContent')
	const description = await descriptiontxt.jsonValue();
	const [rawpdTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[2]')
	const productDimensiontxt = await rawpdTxt.getProperty('textContent')
	const productDimension = await productDimensiontxt.jsonValue();
	const [rawlpTxt] = await page.$x('//*[@id="regular-price"]/span')
	const listPricetxt = await rawlpTxt.getProperty('textContent')
	const listPrice = await listPricetxt.jsonValue();
	const [srcImg] = await page.$x('//*[@id="productImg"]')
	const src = await srcImg.getProperty('src');
	const imgUrl = await src.jsonValue()
	const [rawpuTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[4]')
	const productUpctxt = await rawpuTxt.getProperty('textContent')
	const productUpc = await productUpctxt.jsonValue();
	const [rawscurl] = await page.$x('//*[@id="bdCrumbDesktopUrls_2"]')
	const rsrcTxt = await rawscurl.getProperty('textContent')
	const sourceURL = 'https://www.walgreens.com/store/c/angel-soft-mega-roll-2-ply-bathroom-tissue/ID=300429082-product'
	fs = require('fs')
	const productInfo = [productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL]
	const saveData1 = (productInfo) => {
		const finished = (error) => {
			if(error) {
				console.error(error)
				return;
			}
		}
		const jsonData1 = JSON.stringify(productName, )
		const jsonData2 = JSON.stringify(imgUrl)
		const jsonData3 = JSON.stringify(productDimension)
		const jsonData4 = JSON.stringify(listPrice)
		const jsonData5 = JSON.stringify(description)
		const jsonData6 = JSON.stringify(productUpc)
		const jsonData7 = JSON.stringify(sourceURL)
		fs.writeFile('firstproduct.json', jsonData1, finished)
		fs.appendFileSync('firstproduct.json', jsonData2)
		fs.appendFileSync('firstproduct.json', jsonData3)
		fs.appendFileSync('firstproduct.json', jsonData4)
		fs.appendFileSync('firstproduct.json', jsonData5)
		fs.appendFileSync('firstproduct.json', jsonData6)
		fs.appendFileSync('firstproduct.json', jsonData7)
	}
	console.log({
		productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL
	});
	saveData1(productInfo)
	browser.close();
}
scrapeProduct1('https://www.walgreens.com/store/c/angel-soft-mega-roll-2-ply-bathroom-tissue/ID=300429082-product')
async function scrapeProduct2(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const [rawpnTxt] = await page.$x('//*[@id="productTitle"]')
	const productNametxt = await rawpnTxt.getProperty('textContent')
	const productName = await productNametxt.jsonValue();
	const [rawdTxt] = await page.$x('//*[@id="prodDesc"]/div[2]/div/div[1]/p[1]')
	const descriptiontxt = await rawdTxt.getProperty('textContent')
	const description = await descriptiontxt.jsonValue();
	const [rawpdTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[2]')
	const productDimensiontxt = await rawpdTxt.getProperty('textContent')
	const productDimension = await productDimensiontxt.jsonValue();
	const [rawlpTxt] = await page.$x('//*[@id="sales-price"]/span')
	const listPricetxt = await rawlpTxt.getProperty('textContent')
	const listPrice = await listPricetxt.jsonValue();
	const [srcImg] = await page.$x('//*[@id="productImg"]')
	const src = await srcImg.getProperty('src');
	const imgUrl = await src.jsonValue()
	const [rawpuTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[4]')
	const productUpctxt = await rawpuTxt.getProperty('textContent')
	const productUpc = await productUpctxt.jsonValue();
	const [rawscurl] = await page.$x('//*[@id="bdCrumbDesktopUrls_2"]')
	const rsrcTxt = await rawscurl.getProperty('textContent')
	const sourceURL = 'https://www.walgreens.com/store/c/bounty-select-a-size-paper-towels/ID=300411423-product'
	fs = require('fs')
	const productInfo = [productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL]
	const saveData2 = (productInfo) => {
		const finished = (error) => {
			if(error) {
				console.error(error)
				return;
			}
		}
		const jsonData1 = JSON.stringify(productName, )
		const jsonData2 = JSON.stringify(imgUrl)
		const jsonData3 = JSON.stringify(productDimension)
		const jsonData4 = JSON.stringify(listPrice)
		const jsonData5 = JSON.stringify(description)
		const jsonData6 = JSON.stringify(productUpc)
		const jsonData7 = JSON.stringify(sourceURL)
		fs.writeFile('secondproduct.json', jsonData1, finished)
		fs.appendFileSync('secondproduct.json', jsonData2)
		fs.appendFileSync('secondproduct.json', jsonData3)
		fs.appendFileSync('secondproduct.json', jsonData4)
		fs.appendFileSync('secondproduct.json', jsonData5)
		fs.appendFileSync('secondproduct.json', jsonData6)
		fs.appendFileSync('secondproduct.json', jsonData7)
	}
	console.log({
		productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL
	});
	saveData2(productInfo)
	browser.close();
}
scrapeProduct2('https://www.walgreens.com/store/c/bounty-select-a-size-paper-towels/ID=300411423-product')
async function scrapeProduct3(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const [rawpnTxt] = await page.$x('//*[@id="productTitle"]')
	const productNametxt = await rawpnTxt.getProperty('textContent')
	const productName = await productNametxt.jsonValue();
	const [rawdTxt] = await page.$x('//*[@id="prodDesc"]')
	const descriptiontxt = await rawdTxt.getProperty('textContent')
	const description = await descriptiontxt.jsonValue();
	const [rawpdTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[2]')
	const productDimensiontxt = await rawpdTxt.getProperty('textContent')
	const productDimension = await productDimensiontxt.jsonValue();
	const [rawlpTxt] = await page.$x('//*[@id="regular-price"]/span')
	const listPricetxt = await rawlpTxt.getProperty('textContent')
	const listPrice = await listPricetxt.jsonValue();
	const [srcImg] = await page.$x('//*[@id="productImg"]')
	const src = await srcImg.getProperty('src');
	const imgUrl = await src.jsonValue()
	const [rawpuTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[4]')
	const productUpctxt = await rawpuTxt.getProperty('textContent')
	const productUpc = await productUpctxt.jsonValue();
	const [rawscurl] = await page.$x('//*[@id="bdCrumbDesktopUrls_2"]')
	const rsrcTxt = await rawscurl.getProperty('textContent')
	const sourceURL = 'https://www.walgreens.com/store/c/kleenex-trusted-care-facial-tissues,-1-flat-box,-200-tissues-per-box,-2-ply/ID=300426367-product'
	fs = require('fs')
	const productInfo = [productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL]
	const saveData3 = (productInfo) => {
		const finished = (error) => {
			if(error) {
				console.error(error)
				return;
			}
		}
		const jsonData1 = JSON.stringify(productName, )
		const jsonData2 = JSON.stringify(imgUrl)
		const jsonData3 = JSON.stringify(productDimension)
		const jsonData4 = JSON.stringify(listPrice)
		const jsonData5 = JSON.stringify(description)
		const jsonData6 = JSON.stringify(productUpc)
		const jsonData7 = JSON.stringify(sourceURL)
		fs.writeFile('thirdproduct.json', jsonData1, finished)
		fs.appendFileSync('thirdproduct.json', jsonData2)
		fs.appendFileSync('thirdproduct.json', jsonData3)
		fs.appendFileSync('thirdproduct.json', jsonData4)
		fs.appendFileSync('thirdproduct.json', jsonData5)
		fs.appendFileSync('thirdproduct.json', jsonData6)
		fs.appendFileSync('thirdproduct.json', jsonData7)
	}
	console.log({
		productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL
	});
	saveData3(productInfo)
	browser.close();
}
scrapeProduct3('https://www.walgreens.com/store/c/kleenex-trusted-care-facial-tissues,-1-flat-box,-200-tissues-per-box,-2-ply/ID=300426367-product')
async function scrapeProduct4(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const [rawpnTxt] = await page.$x('//*[@id="productTitle"]')
	const productNametxt = await rawpnTxt.getProperty('textContent')
	const productName = await productNametxt.jsonValue();
	const [rawdTxt] = await page.$x('//*[@id="prodDesc"]')
	const descriptiontxt = await rawdTxt.getProperty('textContent')
	const description = await descriptiontxt.jsonValue();
	const [rawpdTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[2]')
	const productDimensiontxt = await rawpdTxt.getProperty('textContent')
	const productDimension = await productDimensiontxt.jsonValue();
	const [rawlpTxt] = await page.$x('//*[@id="regular-price"]/span')
	const listPricetxt = await rawlpTxt.getProperty('textContent')
	const listPrice = await listPricetxt.jsonValue();
	const [srcImg] = await page.$x('//*[@id="productImg"]')
	const src = await srcImg.getProperty('src');
	const imgUrl = await src.jsonValue()
	const [rawpuTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[4]')
	const productUpctxt = await rawpuTxt.getProperty('textContent')
	const productUpc = await productUpctxt.jsonValue();
	const [rawscurl] = await page.$x('//*[@id="bdCrumbDesktopUrls_2"]')
	const rsrcTxt = await rawscurl.getProperty('textContent')
	const sourceURL = 'https://www.walgreens.com/store/c/kleenex-trusted-care-facial-tissues,-1-flat-box,-200-tissues-per-box,-2-ply/ID=300426367-product'
	fs = require('fs')
	const productInfo = [productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL]
	const saveData4 = (productInfo) => {
		const finished = (error) => {
			if(error) {
				console.error(error)
				return;
			}
		}
		const jsonData1 = JSON.stringify(productName, )
		const jsonData2 = JSON.stringify(imgUrl)
		const jsonData3 = JSON.stringify(productDimension)
		const jsonData4 = JSON.stringify(listPrice)
		const jsonData5 = JSON.stringify(description)
		const jsonData6 = JSON.stringify(productUpc)
		const jsonData7 = JSON.stringify(sourceURL)
		fs.writeFile('fourthproduct.json', jsonData1, finished)
		fs.appendFileSync('fourthproduct.json', jsonData2)
		fs.appendFileSync('fourthproduct.json', jsonData3)
		fs.appendFileSync('fourthproduct.json', jsonData4)
		fs.appendFileSync('fourthproduct.json', jsonData5)
		fs.appendFileSync('fourthproduct.json', jsonData6)
		fs.appendFileSync('fourthproduct.json', jsonData7)
	}
	console.log({
		productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL
	});
	saveData4(productInfo)
	browser.close();
}
scrapeProduct4('https://www.walgreens.com/store/c/suavitel-fabric-softener-field-flowers/ID=300411068-product')
async function scrapeProduct5(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const [rawpnTxt] = await page.$x('//*[@id="productTitle"]')
	const productNametxt = await rawpnTxt.getProperty('textContent')
	const productName = await productNametxt.jsonValue();
	const [rawdTxt] = await page.$x('//*[@id="prodDesc"]')
	const descriptiontxt = await rawdTxt.getProperty('textContent')
	const description = await descriptiontxt.jsonValue();
	const [rawpdTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[2]')
	const productDimensiontxt = await rawpdTxt.getProperty('textContent')
	const productDimension = await productDimensiontxt.jsonValue();
	const [rawlpTxt] = await page.$x('//*[@id="regular-price"]/span')
	const listPricetxt = await rawlpTxt.getProperty('textContent')
	const listPrice = await listPricetxt.jsonValue();
	const [srcImg] = await page.$x('//*[@id="productImg"]')
	const src = await srcImg.getProperty('src');
	const imgUrl = await src.jsonValue()
	const [rawpuTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[4]')
	const productUpctxt = await rawpuTxt.getProperty('textContent')
	const productUpc = await productUpctxt.jsonValue();
	const [rawscurl] = await page.$x('//*[@id="bdCrumbDesktopUrls_2"]')
	const rsrcTxt = await rawscurl.getProperty('textContent')
	const sourceURL = 'https://www.walgreens.com/store/c/kleenex-trusted-care-facial-tissues,-1-flat-box,-200-tissues-per-box,-2-ply/ID=300426367-product'
	fs = require('fs')
	const productInfo = [productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL]
	const saveData5 = (productInfo) => {
		const finished = (error) => {
			if(error) {
				console.error(error)
				return;
			}
		}
		const jsonData1 = JSON.stringify(productName, )
		const jsonData2 = JSON.stringify(imgUrl)
		const jsonData3 = JSON.stringify(productDimension)
		const jsonData4 = JSON.stringify(listPrice)
		const jsonData5 = JSON.stringify(description)
		const jsonData6 = JSON.stringify(productUpc)
		const jsonData7 = JSON.stringify(sourceURL)
		fs.writeFile('fifthproduct.json', jsonData1, finished)
		fs.appendFileSync('fifthproduct.json', jsonData2)
		fs.appendFileSync('fifthproduct.json', jsonData3)
		fs.appendFileSync('fifthproduct.json', jsonData4)
		fs.appendFileSync('fifthproduct.json', jsonData5)
		fs.appendFileSync('fifthproduct.json', jsonData6)
		fs.appendFileSync('fifthproduct.json', jsonData7)
	}
	console.log({
		productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL
	});
	saveData5(productInfo)
	browser.close();
}
scrapeProduct5('https://www.walgreens.com/store/c/palmolive-ultra-strength-dishwashing-liquid-dish-soap,-oxy-power-degreaser/ID=300411066-product?criteria=Top%20Sellers&product=156095&position=1')
async function scrapeProduct6(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const [rawpnTxt] = await page.$x('//*[@id="productTitle"]')
	const productNametxt = await rawpnTxt.getProperty('textContent')
	const productName = await productNametxt.jsonValue();
	const [rawdTxt] = await page.$x('//*[@id="prodDesc"]')
	const descriptiontxt = await rawdTxt.getProperty('textContent')
	const description = await descriptiontxt.jsonValue();
	const [rawpdTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[2]');
	const productDimensiontxt = await rawpdTxt.getProperty('textContent')
	const productDimension = await productDimensiontxt.jsonValue();
	const [rawlpTxt] = await page.$x('//*[@id="regular-price"]/span')
	const listPricetxt = await rawlpTxt.getProperty('textContent')
	const listPrice = await listPricetxt.jsonValue();
	const [srcImg] = await page.$x('//*[@id="productImg"]')
	const src = await srcImg.getProperty('src');
	const imgUrl = await src.jsonValue()
	const [rawpuTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[4]')
	const productUpctxt = await rawpuTxt.getProperty('textContent')
	const productUpc = await productUpctxt.jsonValue();
	const [rawscurl] = await page.$x('//*[@id="bdCrumbDesktopUrls_2"]')
	const rsrcTxt = await rawscurl.getProperty('textContent')
	const sourceURL = 'https://www.walgreens.com/store/c/lysol-disinfectant-spray-crisp-linen/ID=prod2560790-product?criteria=Top%20Sellers&product=585916&position=1'
	fs = require('fs')
	const productInfo = [productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL]
	const saveData6 = (productInfo) => {
		const finished = (error) => {
			if(error) {
				console.error(error)
				return;
			}
		}
		const jsonData1 = JSON.stringify(productName, )
		const jsonData2 = JSON.stringify(imgUrl)
		const jsonData3 = JSON.stringify(productDimension)
		const jsonData4 = JSON.stringify(listPrice)
		const jsonData5 = JSON.stringify(description)
		const jsonData6 = JSON.stringify(productUpc)
		const jsonData7 = JSON.stringify(sourceURL)
		fs.writeFile('sixthproduct.json', jsonData1, finished)
		fs.appendFileSync('sixthproduct.json', jsonData2)
		fs.appendFileSync('sixthproduct.json', jsonData3)
		fs.appendFileSync('sixthproduct.json', jsonData4)
		fs.appendFileSync('sixthproduct.json', jsonData5)
		fs.appendFileSync('sixthproduct.json', jsonData6)
		fs.appendFileSync('sixthproduct.json', jsonData7)
	}
	console.log({
		productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL
	});
	saveData6(productInfo)
	browser.close();
}
scrapeProduct6('https://www.walgreens.com/store/c/lysol-disinfectant-spray-crisp-linen/ID=prod2560790-product?criteria=Top%20Sellers&product=585916&position=1')
async function scrapeProduct7(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const [rawpnTxt] = await page.$x('//*[@id="productTitle"]')
	const productNametxt = await rawpnTxt.getProperty('textContent')
	const productName = await productNametxt.jsonValue();
	const [rawdTxt] = await page.$x('//*[@id="prodDesc"]')
	const descriptiontxt = await rawdTxt.getProperty('textContent')
	const description = await descriptiontxt.jsonValue();
	const [rawpdTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[2]');
	const productDimensiontxt = await rawpdTxt.getProperty('textContent')
	const productDimension = await productDimensiontxt.jsonValue();
	const [rawlpTxt] = await page.$x('//*[@id="regular-price"]/span')
	const listPricetxt = await rawlpTxt.getProperty('textContent')
	const listPrice = await listPricetxt.jsonValue();
	const [srcImg] = await page.$x('//*[@id="productImg"]')
	const src = await srcImg.getProperty('src');
	const imgUrl = await src.jsonValue()
	const [rawpuTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[4]')
	const productUpctxt = await rawpuTxt.getProperty('textContent')
	const productUpc = await productUpctxt.jsonValue();
	const [rawscurl] = await page.$x('//*[@id="bdCrumbDesktopUrls_2"]')
	const rsrcTxt = await rawscurl.getProperty('textContent')
	const sourceURL = 'https://www.walgreens.com/store/c/vanity-fair-extra-absorbent-napkins/ID=300397778-product?criteria=Top%20Sellers&product=492203&position=1'
	fs = require('fs')
	const productInfo = [productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL]
	const saveData7 = (productInfo) => {
		const finished = (error) => {
			if(error) {
				console.error(error)
				return;
			}
		}
		const jsonData1 = JSON.stringify(productName, )
		const jsonData2 = JSON.stringify(imgUrl)
		const jsonData3 = JSON.stringify(productDimension)
		const jsonData4 = JSON.stringify(listPrice)
		const jsonData5 = JSON.stringify(description)
		const jsonData6 = JSON.stringify(productUpc)
		const jsonData7 = JSON.stringify(sourceURL)
		fs.writeFile('seventhproduct.json', jsonData1, finished)
		fs.appendFileSync('seventhproduct.json', jsonData2)
		fs.appendFileSync('seventhproduct.json', jsonData3)
		fs.appendFileSync('seventhproduct.json', jsonData4)
		fs.appendFileSync('seventhproduct.json', jsonData5)
		fs.appendFileSync('seventhproduct.json', jsonData6)
		fs.appendFileSync('seventhproduct.json', jsonData7)
	}
	console.log({
		productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL
	});
	saveData7(productInfo)
	browser.close();
}
scrapeProduct7('https://www.walgreens.com/store/c/vanity-fair-extra-absorbent-napkins/ID=300397778-product?criteria=Top%20Sellers&product=492203&position=1')
async function scrapeProduct8(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const [rawpnTxt] = await page.$x('//*[@id="productTitle"]')
	const productNametxt = await rawpnTxt.getProperty('textContent')
	const productName = await productNametxt.jsonValue();
	const [rawdTxt] = await page.$x('//*[@id="prodDesc"]')
	const descriptiontxt = await rawdTxt.getProperty('textContent')
	const description = await descriptiontxt.jsonValue();
	const [rawpdTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[2]');
	const productDimensiontxt = await rawpdTxt.getProperty('textContent')
	const productDimension = await productDimensiontxt.jsonValue();
	const [rawlpTxt] = await page.$x('//*[@id="regular-price"]/span')
	const listPricetxt = await rawlpTxt.getProperty('textContent')
	const listPrice = await listPricetxt.jsonValue();
	const [srcImg] = await page.$x('//*[@id="productImg"]')
	const src = await srcImg.getProperty('src');
	const imgUrl = await src.jsonValue()
	const [rawpuTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[4]')
	const productUpctxt = await rawpuTxt.getProperty('textContent')
	const productUpc = await productUpctxt.jsonValue();
	const [rawscurl] = await page.$x('//*[@id="bdCrumbDesktopUrls_2"]')
	const rsrcTxt = await rawscurl.getProperty('textContent')
	const sourceURL = 'https://www.walgreens.com/store/c/lysol-disinfectant-spray-crisp-linen/ID=prod2560790-product?criteria=Top%20Sellers&product=585916&position=1'
	fs = require('fs')
	const productInfo = [productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL]
	const saveData8 = (productInfo) => {
		const finished = (error) => {
			if(error) {
				console.error(error)
				return;
			}
		}
		const jsonData1 = JSON.stringify(productName, )
		const jsonData2 = JSON.stringify(imgUrl)
		const jsonData3 = JSON.stringify(productDimension)
		const jsonData4 = JSON.stringify(listPrice)
		const jsonData5 = JSON.stringify(description)
		const jsonData6 = JSON.stringify(productUpc)
		const jsonData7 = JSON.stringify(sourceURL)
		fs.writeFile('eighthproduct.json', jsonData1, finished)
		fs.appendFileSync('eighthproduct.json', jsonData2)
		fs.appendFileSync('eighthproduct.json', jsonData3)
		fs.appendFileSync('eighthproduct.json', jsonData4)
		fs.appendFileSync('eighthproduct.json', jsonData5)
		fs.appendFileSync('eighthproduct.json', jsonData6)
		fs.appendFileSync('eighthproduct.json', jsonData7)
	}
	console.log({
		productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL
	});
	saveData8(productInfo)
	browser.close();
}
scrapeProduct8('https://www.walgreens.com/store/c/febreze-unstopables-fresh-air-freshener-fresh/ID=prod6349818-product?criteria=Top%20Sellers&product=980689&position=1')
async function scrapeProduct9(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const [rawpnTxt] = await page.$x('//*[@id="productTitle"]')
	const productNametxt = await rawpnTxt.getProperty('textContent')
	const productName = await productNametxt.jsonValue();
	const [rawdTxt] = await page.$x('//*[@id="prodDesc"]')
	const descriptiontxt = await rawdTxt.getProperty('textContent')
	const description = await descriptiontxt.jsonValue();
	const [rawpdTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[2]');
	const productDimensiontxt = await rawpdTxt.getProperty('textContent')
	const productDimension = await productDimensiontxt.jsonValue();
	const [rawlpTxt] = await page.$x('//*[@id="regular-price"]/span')
	const listPricetxt = await rawlpTxt.getProperty('textContent')
	const listPrice = await listPricetxt.jsonValue();
	const [srcImg] = await page.$x('//*[@id="productImg"]')
	const src = await srcImg.getProperty('src');
	const imgUrl = await src.jsonValue()
	const [rawpuTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[4]')
	const productUpctxt = await rawpuTxt.getProperty('textContent')
	const productUpc = await productUpctxt.jsonValue();
	const [rawscurl] = await page.$x('//*[@id="bdCrumbDesktopUrls_2"]')
	const rsrcTxt = await rawscurl.getProperty('textContent')
	const sourceURL = 'https://www.walgreens.com/store/c/lysol-disinfectant-spray-crisp-linen/ID=prod2560790-product?criteria=Top%20Sellers&product=585916&position=1'
	fs = require('fs')
	const productInfo = [productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL]
	const saveData9 = (productInfo) => {
		const finished = (error) => {
			if(error) {
				console.error(error)
				return;
			}
		}
		const jsonData1 = JSON.stringify(productName, )
		const jsonData2 = JSON.stringify(imgUrl)
		const jsonData3 = JSON.stringify(productDimension)
		const jsonData4 = JSON.stringify(listPrice)
		const jsonData5 = JSON.stringify(description)
		const jsonData6 = JSON.stringify(productUpc)
		const jsonData7 = JSON.stringify(sourceURL)
		fs.writeFile('ninthproduct.json', jsonData1, finished)
		fs.appendFileSync('ninthproduct.json', jsonData2)
		fs.appendFileSync('ninthproduct.json', jsonData3)
		fs.appendFileSync('ninthproduct.json', jsonData4)
		fs.appendFileSync('ninthproduct.json', jsonData5)
		fs.appendFileSync('ninthproduct.json', jsonData6)
		fs.appendFileSync('ninthproduct.json', jsonData7)
	}
	console.log({
		productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL
	});
	saveData9(productInfo)
	browser.close();
}
scrapeProduct9('https://www.walgreens.com/store/c/complete-home-drawstring-trash-bags-flex-shield/ID=300424328-product?criteria=Highest%20Rated&product=434957&position=2')
async function scrapeProduct10(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
	const [rawpnTxt] = await page.$x('//*[@id="productTitle"]')
	const productNametxt = await rawpnTxt.getProperty('textContent')
	const productName = await productNametxt.jsonValue();
	const [rawdTxt] = await page.$x('//*[@id="prodDesc"]')
	const descriptiontxt = await rawdTxt.getProperty('textContent')
	const description = await descriptiontxt.jsonValue();
	const [rawpdTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[2]');
	const productDimensiontxt = await rawpdTxt.getProperty('textContent')
	const productDimension = await productDimensiontxt.jsonValue();
	const [rawlpTxt] = await page.$x('//*[@id="regular-price"]/span')
	const listPricetxt = await rawlpTxt.getProperty('textContent')
	const listPrice = await listPricetxt.jsonValue();
	const [srcImg] = await page.$x('//*[@id="productImg"]')
	const src = await srcImg.getProperty('src');
	const imgUrl = await src.jsonValue()
	const [rawpuTxt] = await page.$x('//*[@id="Shipping Specifications"]/div[2]/div/div/div[2]/p[4]')
	const productUpctxt = await rawpuTxt.getProperty('textContent')
	const productUpc = await productUpctxt.jsonValue();
	const [rawscurl] = await page.$x('//*[@id="bdCrumbDesktopUrls_2"]')
	const rsrcTxt = await rawscurl.getProperty('textContent')
	const sourceURL = 'https://www.walgreens.com/store/c/complete-home-zipper-freezer-bags-gallon/ID=prod6394122-product?criteria=Top%20Sellers&product=807494&position=1'
	fs = require('fs')
	const productInfo = [productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL]
	const saveData10 = (productInfo) => {
		const finished = (error) => {
			if(error) {
				console.error(error)
				return;
			}
		}
		const jsonData1 = JSON.stringify(productName, )
		const jsonData2 = JSON.stringify(imgUrl)
		const jsonData3 = JSON.stringify(productDimension)
		const jsonData4 = JSON.stringify(listPrice)
		const jsonData5 = JSON.stringify(description)
		const jsonData6 = JSON.stringify(productUpc)
		const jsonData7 = JSON.stringify(sourceURL)
		fs.writeFile('tenthproduct.json', jsonData1, finished)
		fs.appendFileSync('tenthproduct.json', jsonData2)
		fs.appendFileSync('tenthproduct.json', jsonData3)
		fs.appendFileSync('tenthproduct.json', jsonData4)
		fs.appendFileSync('tenthproduct.json', jsonData5)
		fs.appendFileSync('tenthproduct.json', jsonData6)
		fs.appendFileSync('tenthproduct.json', jsonData7)
	}
	console.log({
		productName, description, productDimension, listPrice, imgUrl, productUpc, sourceURL
	});
	saveData10(productInfo)
	browser.close();
}
scrapeProduct10('https://www.walgreens.com/store/c/complete-home-zipper-freezer-bags-gallon/ID=prod6394122-product?criteria=Top%20Sellers&product=807494&position=1')