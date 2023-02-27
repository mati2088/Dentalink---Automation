import { test, expect } from '@playwright/test';
import { loginDentalink } from '../pages/login-page';
import { EvolucionarPacientes } from '../pages/evolucionar-page';
 

test.only('Evolucionar Prestacion', async ({ browser }) => {
  const context  = await browser.newContext();
  const page =  await context.newPage();
  const LoginDentalink = new loginDentalink (page);
  const Evolucionar = new EvolucionarPacientes(page);   
 
  await LoginDentalink.GoTo();
  await LoginDentalink.loginUser("AlvaroPrecios","1234");  
  await Evolucionar.selecPaciente();

  await test.step ("new tab", async () => {
  const tabEvolucionar = new EvolucionarPacientes (page);
  const newTab = await tabEvolucionar.tabTratamientos();
  await newTab.newTab();
  await console.log(await page.title());
  await newTab.agregarPlantilla();
  
  await newTab.evolucionarPdt();
  await newTab.evolucionarJuli();
  await newTab.realizarPago();
   
     
   
  })
  
 
  await console.log(await page.title());

  await expect(page.locator("a[href='/agendas/semanal']"),"La agenda no se ve ").toBeVisible();

   

})

 

  
 






