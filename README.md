# SupremeBotApp [Desktop]
#### *Fast and simple Supreme autocheckout bot, helps you cop any limited release.*

A web application that runs on a local http  node js server, uses selenium web-driver and chrome web driver to automate browser interactions to help me checkout and purchase limited Supreme products on release day. Programmed with: HTML, CSS, JavaScript, Node Js, Express 
 
<img src="supremebotapp.gif">

# Requirements
* Google Chrome Browser for desktop

# Features
* **Auto Checkout** - Product will automatically be selected and added to cart and checked out at checkout page. 
* **AutoFill** - Your information (name, address, cc) will automatically be enter into repective fields.  
* **Size choice** - for every applicable category of product. 
* **Simple configuration** 

# Configuration
Requirements:
* node.js 7+
* Download the latest version of chromedriver from https://chromedriver.storage.googleapis.com/index.html?path=83.0.4103.39/ and replace the chromedriver in the folder

Use command line prompts to locate the app folder

```
cd SupremeBotApp/
```

Run *npm install* to install all the necessary dependecies

```
npm install
```
	
Then run *node server.js* to start local server

```
node server.js
```

Navigate to http://localhost:3000 in chrome browser.

		 
<img src="Screen Shot .png">

# Set up Product

* **Category** - Select the category that the item you wish to purchase falls under.
* **Size** - Select the size of the item, if not applicable select n/a.
* **keyword** - Enter a keyword to differentiate this product from other products in the same category.
* **Color** - Enter the colorway of the product.

##### If you are unsure of product details click the droplist or the keyword links at the bottom to navigate to a product catalog guide. 
