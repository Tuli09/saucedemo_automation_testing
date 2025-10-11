import {test, expect} from "@playwright/test";
import LoginLockedUserAction from "../pages/login_lockeduserAction";
import testData from "../../resource/testData.json" assert {type:"json"};
import Utilities from "../Utils/utilities";
const expectedResult= "locked out";


test.describe.serial("Check login with different user and verfity add to cart", ()=>{
let type, utilities;
test.beforeEach(async({page})=>{
        type=new LoginLockedUserAction(page);
        utilities= new Utilities(page);

await page.goto("https://www.saucedemo.com/");
await page.waitForTimeout(3000);

   });

   test("Verify locked user login shows locked out",async()=>{


       await type.clickUsername();
        await type.typeUsername(testData.text);
        await type.clickPassword();
        await type.typePassword(testData.pass);
        const actualresult= await type.loginError();

        test.expect(actualresult).toContain(expectedResult);
    });

    test("Verify the journey of second part", async()=>{
      //Login with standard user
       await type.clickUsername();
       await type.typeUsername(testData.text2);
       await type.clickPassword();
       await type.typePassword(testData.pass);

       //Reset app state
       await type.buttonResetApp();
let selectedProducts=[];
let selectedPrice=[];
let productCartPageDisplay=[];

//randomly choose 3 product in cart
       for (let i=1; i<=3; i++){
         test.slow();
    const index= await utilities.getRandomNumber(1,6);
   await type.addProduct(index);

  const product=  await type.getproductName(index);
  const priceofproduct= await type.getProductPrice(index);

  console.log(`Product: ${product}`);
    selectedProducts.push(product); 
      console.log(`Price: ${priceofproduct}`);

    selectedPrice.push(priceofproduct);
       };

    
    console.log("All 3 selected products:", selectedProducts);
    console.log("All 3 selected products price:", selectedPrice);
    
       //Navigate to the final checkout page
await type.finalAddToCartButton();
    
  const productinCartPage=await type.getproductNameinCart();
  console.log(`Productname: ${productinCartPage}`);   
    console.log("3 cart products:", productinCartPage);
    
    //Verify product price and name
    
    test.expect(selectedProducts).toEqual(productinCartPage);
    await type.clickcheckoutButton();
    await type.input();
    await type.clickContinueButton();

const total= await type.totalPriceVerify();
console.log("Total price", total);
const priceshowninpage=await type.priceinPage();
console.log(priceshowninpage);

test.expect(total).toEqual(priceshowninpage);
await type.finalFinishButton();
const printfinalmessage= await type.readFinalMessage();
console.log(printfinalmessage);

//Verify successfull order message

test.expect(printfinalmessage).toEqual("Thank you for your order!");

//reset app state and logout

await type.buttonResetApp();
await type.logoutButton();
    });



test("Login with performance_glich_user and complete full journey of 3rd step", async()=>{
test.slow();

//login with performance glich user and reset app state

   await type.clickUsername();
       await type.typeUsername(testData.text3);
       await type.clickPassword();
       await type.typePassword(testData.pass);
       await type.buttonResetApp();

       //filter Z to A and select first product

       await type.selectZToA();
       const number=1;
       await type.clickfirstproduct(number);
       const readname= await type.readFirstProductname(number);
       console.log(readname);
       const readprice= await type.readFirstProductprice(number);
       console.log(readprice);
       await type.finalAddToCartButton();

       //Verify product name and price

const cartname= await type.readnameinCart();
console.log(cartname);
const cartprice=await type.readpriceinCart();
console.log(cartprice);
await type.clickcheckoutButton();
await type.input();
await type.clickContinueButton();
test.expect(cartprice).toEqual(readprice);
test.expect(cartname).toEqual(readname);
await type.finalFinishButton();


//Verify successful order message

const printfinalmessage= await type.readFinalMessage();
console.log(printfinalmessage);
test.expect(printfinalmessage).toEqual("Thank you for your order!");

//Reset app and logout
await type.buttonResetApp();
await type.logoutButton();

        });

    });