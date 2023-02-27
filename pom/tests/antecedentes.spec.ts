import { test, expect } from '@playwright/test';
import { loginDentalink } from '../pages/login-page';
import { AntecedentesMedicos } from '../pages/antecedentes-medicos-page';


test.only('Seleccionar Antecedentes', async ({ browser }) => {
  const context  = await browser.newContext();
  const page =  await context.newPage();
  const LoginDentalink = new loginDentalink (page);
  const Antecedentes = new AntecedentesMedicos(page);   

  await LoginDentalink.GoTo();
  await LoginDentalink.loginUser("AlvaroPrecios","1234");  
  await Antecedentes.selecPaciente();

  await test.step ("new tab", async () => {
  const tabAntecedentes = new AntecedentesMedicos (page);
  const newTab = await tabAntecedentes.tabTratamientos();
  await newTab.newTab();
  await console.log(await page.title());
  await newTab.selecAntecedentes();
  await newTab.descmarcarAntecedentes();
  
  })
  
 
  await console.log(await page.title());

  await expect(page.locator("a[href='/agendas/semanal']"),"La agenda no se ve ").toBeVisible();

   

})

 