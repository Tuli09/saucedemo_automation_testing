import {test, expect} from "@playwright/test";
import LoginLockedUserAction from "../pages/login_lockeduserAction";
import testData from "../../resource/testData.json" assert {type:"json"};
import Utilities from "../Utils/utilities";
const expectedResult= "locked out";
//const expectCartItem=3;


test.describe.serial("Check login with different user and verfity add to cart", ()=>{
let type, utilities;
test.beforeEach(async({page})=>{
        type=new LoginLockedUserAction(page);
        utilities= new Utilities(page);

await page.goto("https://www.saucedemo.com/");
await page.waitForTimeout(3000);

   });
       test("Login with performance_glich_user and complete full journey of 3rd step", async()=>{
test.slow();
   await type.clickUsername();
       await type.typeUsername(testData.text3);
       await type.clickPassword();
       await type.typePassword(testData.pass);
       await type.buttonResetApp();
       await type.selectZToA();
       const number=1;
       await type.clickfirstproduct(number);
       const readname= await type.readFirstProductname(number);
       console.log(readname);
       const readprice= await type.readFirstProductprice(number);
       console.log(readprice);
       await type.finalAddToCartButton();

       const cartname= await type.readnameinCart();
      console.log(cartname);
      const cartprice=await type.readpriceinCart();
      console.log(cartprice);
      await type.clickcheckoutButton();
    await type.input();
    await type.clickContinueButton();

   //const total= await type.totalPriceVerify();
//console.log("Total price", total);
//const priceshowninpage=await type.priceinPage();
//console.log(priceshowninpage);

test.expect(cartprice).toEqual(readprice);
test.expect(cartname).toEqual(readname);
await type.finalFinishButton();
const printfinalmessage= await type.readFinalMessage();
console.log(printfinalmessage);
test.expect(printfinalmessage).toEqual("Thank you for your order!");
await type.buttonResetApp();
await type.logoutButton();

        });
    });