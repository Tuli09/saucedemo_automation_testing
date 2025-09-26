export default class LoginLockedUser{
  constructor(page) {

    this.page = page;
    
    this.userField = page.locator("//input[@data-test='username']");
    this.passwordField = page.locator("//input[@data-test='password']");
    this.loginButton = page.locator("//input[@data-test='login-button']");
    this.afterLoginMessage = page.locator("//h3[@data-test='error']");
    this.topLeftButton=page.locator("//button[@id='react-burger-menu-btn']");
    this.resetAppButton= page.locator("//a[@id='reset_sidebar_link']");
    this.addCartVerify=page.locator("//span[contains(., '3')]")

   this.productNameinCart=page.locator("//div[@class='inventory_item_name']");
      this.finalCartButton= this.page.locator("//a[@class='shopping_cart_link']");
      this.checkoutButton= this.page.locator("//button[@id='checkout']");
      this.inputFirstName= this.page.locator("//input[@id='first-name']");
      this.inputLastName= this.page.locator("//input[@id='last-name']");
      this.inputPostalCode=this.page.locator("//input[@id='postal-code']");
      
      
      this.clickContinue=this.page.locator("//input[@id='continue']");
      this.itemTotal=this.page.locator("//div[@class='summary_subtotal_label']");
      this.itemTax=this.page.locator("//div[@class='summary_tax_label']");
      this.totalPrice=this.page.locator("//div[@class='summary_total_label']");
      this.finishButton=this.page.locator("//button[@id='finish']");
      this.finalMessage= this.page.locator("//div[@id='checkout_complete_container']/h2[@class='complete-header']");

      this.logout=this.page.locator("//div[@class='bm-menu']/nav/a[@id='logout_sidebar_link']");
      this.ztoaContainer=this.page.locator("//select[@class='product_sort_container']");
      this.ztoaSelecter=this.page.locator("//select[@class='product_sort_container']/option[@value='za']");
      this.firstproductname= this.page.locator("//div[@class='inventory_item_name']");
      this.firstproductprice= this.page.locator("//div[@class='inventory_item_price']");
      this.crossbutton=this.page.locator("//button[@id='react-burger-cross-btn']");


    
}



      productBlock(index){
            return this.page.locator("//div[@class='inventory_item_description']");

      }


addCartButton(index) {
return this.page.locator(`(//div[@class='inventory_item']/div[@class='inventory_item_description']//div[@class='pricebar']/button[contains(@class,'btn_inventory')])[${index}]`);
  
  } 


productName(index){
return this.page.locator(`(//div[@class='inventory_item_description']/div/a/div[contains(@class,'inventory_item_name')])[${index}]`);
}


productPrice(index){
  return this.page.locator(`(//div[@class='inventory_list']/div/div/div/div[@class='inventory_item_price'])[${index}]`);
}

addCartButtonFirstProduct(number){
  return this.page.locator(`(//div[@class='inventory_item']/div[@class='inventory_item_description']/div[@class='pricebar']/button[contains(@class,'btn_inventory')])[${number}]`);

}

firstProductName(number){
return this.page.locator(`(//div[@class='inventory_item_description']/div/a/div[contains(@class,'inventory_item_name')])[${number}]`);
}

firstProductPrice(number){
    return this.page.locator(`(//div[@class='inventory_list']/div/div/div/div[@class='inventory_item_price'])[${number}]`);

}
}
    