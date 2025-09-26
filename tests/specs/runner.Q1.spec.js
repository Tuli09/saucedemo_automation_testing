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

   test("Verify locked user login shows locked out",async()=>{


       await type.clickUsername();
        await type.typeUsername(testData.text);
        await type.clickPassword();
        await type.typePassword(testData.pass);
        const actualresult= await type.loginError();

        test.expect(actualresult).toContain(expectedResult);
    });
});