
import { expect, Locator, Page, } from '@playwright/test';

export class loginDentalink {
  //atributos.locators
  readonly page: Page;
  readonly user: Locator;
  readonly pass: Locator
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;
  readonly loginBoton: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.user = page.getByPlaceholder('Escriba su usuario...');
    this.pass = page.getByPlaceholder('Escriba su clave...');
    this.loginBoton = page.locator("//input[@id='ingresar']");
  }
 
   async loginUser(user, pass) {
    await this.user.fill(user)
    await this.pass.fill(pass)
    await this.loginBoton.click()
  }
  async GoTo(){
    await this.page.goto('https://productowner-95.qa.dentalink.cl/sessions/login');
  }

}