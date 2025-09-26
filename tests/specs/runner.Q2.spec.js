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
    
    test("Login successfully with standard_user and Reset the app state", async()=>{
       //const index= await utilities.getRandomNumber(1,6);
       await type.clickUsername();
       await type.typeUsername(testData.text2);
       await type.clickPassword();
       await type.typePassword(testData.pass);
       await type.buttonResetApp();
let selectedProducts=[];
let selectedPrice=[];
let productCartPageDisplay=[];
       for (let i=1; i<=3; i++){
         test.slow();
    const index= await utilities.getRandomNumber(0,5);
   await type.addProduct(index);

  const product=  await type.getproductName(index);
  const priceofproduct= await type.getProductPrice(index);

  console.log(`Product: ${product}`);
    selectedProducts.push(product); 
      console.log(`Price: ${priceofproduct}`);

    selectedPrice.push(priceofproduct);

      //const actualCart= await type.verifyCart();
    //test.expect(actualCart).toEqual(expectCartItem);
       };


//const actualCart= await type.verifyCart();
    //test.expect(actualCart).toEqual(expectCartItem);
   
//}
    
    console.log("All 3 selected products:", selectedProducts);
    console.log("All 3 selected products price:", selectedPrice);
    await type.finalAddToCartButton();
  const productinCartPage=await type.getproductNameinCart();
  console.log(`Productname: ${productinCartPage}`);

          //productCartPageDisplay.push(productinCartPage); 
             // console.log("3 cart products:", productCartPageDisplay);
            
    console.log("3 cart products:", productinCartPage);
  //test.expect(selectedProducts).toEqual(productCartPageDisplay);
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
test.expect(printfinalmessage).toEqual("Thank you for your order!");
              await type.buttonResetApp();
              await type.logoutButton();
    });
 });