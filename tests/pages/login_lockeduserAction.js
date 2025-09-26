import { expect } from "@playwright/test";
import LoginLockedUser from "..//pageObjects/login_lockeduser";

export default class LoginLockedUserAction{
    constructor(page){
        this.page=page;
        this.locate=new LoginLockedUser(page);
    }

  async clickUsername(){
await this.locate.userField.click();
}

async typeUsername(text){
await this.locate.userField.fill(text);
}

async clickPassword(){
  await this.locate.passwordField.click();
}

async typePassword(pass){
await this.locate.passwordField.fill(pass);
await this.locate.loginButton.click();
}

async loginError(){
    const result= await this.locate.afterLoginMessage.innerText();
    return result;

}

async buttonResetApp(){

  
 await this.locate.topLeftButton.click();
 await this.locate.resetAppButton.click();

}


  async addProduct(index){
  await this.page.locator(`(//div[@class='inventory_item']/div[@class='inventory_item_description']/div[@class='pricebar']/button[contains(@class,'btn_inventory')])[${index}]`).waitFor({ state: 'visible', timeout: 10000 });
  await this.page.waitForTimeout(3000);
  return await this.locate.addCartButton(index).click();



}
async verifyCart(){
  const stringNumber= await this.locate.addCartVerify.innerText();
  const numberinCart= parseFloat(stringNumber);
  return numberinCart;

}

async getproductName(index){
const name1= await this.locate.productName(index).innerText();
return name1;
 
}

 async getProductPrice(index){
      const price= await this.locate.productPrice(index).innerText();
      return price;
    }


async finalAddToCartButton(){
  await this.locate.finalCartButton.click();
}

async getproductNameinCart(){
const nameinCart= await this.locate.productNameinCart.allInnerTexts();
return nameinCart;
}

async clickcheckoutButton(){
await this.locate.checkoutButton.click();
await this.page.waitForTimeout(3000);
}

async input(){
await this.locate.inputFirstName.fill('Naheed');
await this.locate.inputLastName.fill('Tuli');
await this.locate.inputPostalCode.fill((11111).toString());
}

async clickContinueButton(){
  await this.locate.clickContinue.click();
}

async totalPriceVerify(){
  const item1= await this.locate.itemTotal.innerText();
  const item2= await this.locate.itemTax.innerText();
  const getOnlyitem1= item1.replace("Item total: $", "");
  const getitem1inNumber= parseFloat(getOnlyitem1);
  const getOnlyitem2= item2.replace("Tax: $", "");
  const getitem2inNumber= parseFloat(getOnlyitem2);
  const totalvalue= getitem1inNumber + getitem2inNumber;
  const totalamount= `Total: $${totalvalue.toFixed(2)}`;
  return totalamount;

}

async priceinPage(){
return await this.locate.totalPrice.innerText();
}

async finalFinishButton(){
  await this.locate.finishButton.click();
  await this.page.waitForTimeout(3000);
}

async readFinalMessage(){
return await this.locate.finalMessage.innerText();
}

async logoutButton(){
await this.locate.crossbutton.click();
await this.locate.topLeftButton.click();
await this.locate.logout.click();
  }

async selectZToA(){
await this.locate.ztoaContainer.selectOption('za');
await this.page.waitForTimeout(3000);
}

  async clickfirstproduct(number){
  await this.locate.addCartButtonFirstProduct(number).click();
  await this.page.waitForTimeout(3000);

  }

  async readFirstProductname(number){
    return await this.locate.firstProductName(number).innerText();
  }

  async readFirstProductprice(number){
        return await this.locate.firstProductPrice(number).innerText();

  }

  async readnameinCart(){
        return  await this.locate.firstproductname.innerText();

  }
  
  async readpriceinCart(){
   return await this.locate.firstproductprice.innerText();

  
  }

  }
