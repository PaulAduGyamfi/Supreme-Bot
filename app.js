const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./public'));

// app.get('/', (req, res, next) => {
//     res.send('gotchhhaaa biihh');
// });
// app.get('/users', (req, res, next) => {
//     var info = {
//         category: "hats",
//         keyWord: "Ascension",
//         color: "Red"
//     }
//     res.json(info);
// });

app.post('/user_info', (req, res) => {
    
     var botdata = {
        category: req.body.category,
        keyWord: req.body.keyWord,
        color: req.body.color,
        size: req.body.size,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        addressL1: req.body.addressL1,
        addressL2: req.body.addressL2,
        zip: req.body.zip,
        city: req.body.city,
        cc: req.body.cc,
        expMonth: req.body.expMonth,
        expYear: req.body.expYear,
        cvv: req.body.cvv
    }
    
    res.json(botdata);
    // console.log(req.body)
    
    
    const fs = require('fs');

    let data = JSON.stringify(botdata, null, 2);

    fs.writeFile('botdata.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');






//---------------------------------------------------------------------------------------------------------------------------------------------------------------//
    








const fs = require('fs');

let rawdata = fs.readFileSync('botdata.json');
let key = JSON.parse(rawdata);
console.log(key);

 var category = key.category;
var keyWord = key.keyWord;
var color = key.color;
var size = key.size;

var name = key.name;
var email = key.email;
var phone = key.phone;
var addressL1 = key.addressL1;
var addressL2 = key.addressL2;
var zip = key.zip;
var city = key.city;
var cc = key.cc;
var expMonth = key.expMonth;
var expYear = key.expYear;
var cvv = key.cvv;



    //setup and build selenium river object
var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;
//opens uo new chrom browser

var driver = new webdriver.Builder().forBrowser('chrome').build();
 driver.get(`https://www.supremenewyork.com/shop/all/${category.toLowerCase()}`);

//looking for item
 driver.findElements(By.css('.inner-article')).then((articleItems)=>{
    articleItems.map((artItem)=>{
        artItem.getText().then((a)=>{
        
            //checks for specific item matching color and product name
            if(a.toLowerCase().includes(keyWord.toLowerCase()) && a.toLowerCase().includes(color.toLowerCase())){
                  console.log(a);
                    artItem.click();
                    console.log("Adding item to cart...");
                }
                
        });
    });
}).then(()=>{
    driver.wait(until.elementLocated(By.id('details')), 5000).then(function(){
       
    if(driver.findElement(By.xpath(`//*[@id="s"]`)).isDisplayed()){
        driver.findElement(By.xpath(`//*[@id="s"]/option[${size}]`)).click().then(()=>console.log("Item size was selected")).catch(error => console.log("Item size n/a"));
        
    }
       
        driver.findElement(By.xpath('//*[@id="add-remove-buttons"]/input')).then(function(button){
            button.click();
            console.log("Item added to cart");
            
         });
     });
}).then(()=>{
    driver.sleep(2000).then(()=>{
        driver.wait(until.elementLocated(By.xpath('//*[@id="cart"]/a[2]')), 1000).then(()=>{
            driver.findElement(By.xpath('//*[@id="cart"]/a[2]')).then(function(button2){
                        button2.click();
                        console.log("Checking out...");
                });  
            });
        });
    }).then(()=>{
        driver.sleep(3000).then(()=>{
            driver.findElement(By.xpath('//*[@id="order_billing_name"]')).sendKeys(name);
            driver.findElement(By.xpath('//*[@id="order_email"]')).sendKeys(email);
            driver.findElement(By.xpath('//*[@id="order_tel"]')).sendKeys(phone);
            driver.findElement(By.xpath('//*[@id="bo"]')).sendKeys(addressL1);
            driver.findElement(By.xpath('//*[@id="oba3"]')).sendKeys(addressL2);
            driver.findElement(By.xpath('//*[@id="order_billing_zip"]')).sendKeys(zip);
            driver.findElement(By.xpath('//*[@id="order_billing_city"]')).sendKeys(city);
            driver.findElement(By.xpath('//*[@id="rnsnckrn"]')).sendKeys(cc);
            driver.findElement(By.xpath(`//*[@id="credit_card_month"]/option[${expMonth}]`)).click();
            driver.findElement(By.xpath(`//*[@id="credit_card_year"]/option[${expYear}]`)).click();
            driver.findElement(By.xpath('//*[@id="orcer"]')).sendKeys(cvv);
            driver.findElement(By.xpath('//*[@id="cart-cc"]/fieldset/p[2]/label/div/ins')).click();
            console.log("Entering Billing info...");
        }).then(()=>{
            driver.sleep(2000).then(()=>{
                // driver.findElement(By.xpath('//*[@id="pay"]/input')).click();
                console.log("Checkout Succesful!!");
            });
        });
    });
     


});

    res.end();
});



module.exports = app;