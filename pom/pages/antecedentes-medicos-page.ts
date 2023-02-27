import { expect, Locator, Page, } from '@playwright/test';

export class AntecedentesMedicos {
    
    readonly page: Page
    readonly locator : Locator
    readonly btnPacientes 
    readonly paciente
    readonly tratPaciente
    readonly selecTratamiento
    readonly btnAntecedentes
    readonly  btnAlergiaLatex
    readonly btnDiabetes
    readonly btnAspirina
    readonly btnADsugar
    readonly btnGuardar
    readonly btnGoAntecedentes
    readonly btnDesAlergia
    readonly BtnDesDiabetes
    readonly btnDesAspirinas
    readonly btnDesSugar
    readonly btnGuardarD
 
    

constructor (page : Page) {
    this.page = page
    //seleccion de paciente
    this.btnPacientes= page.getByRole('link', { name: ' Pacientes' });
    this.paciente=page.getByText('1042');
    this.tratPaciente=page.locator("div[class='td tratamientos detail-column'] a[target='_blank']");

    //Go to tratamientos
    this.selecTratamiento=page.locator('//*[@id="app"]/div/div/div/div[2]/div');

    //selec antecedentes
    this.btnAntecedentes=page.locator('//*[@id="widget-reference"]/a[5]/img');
    this.btnAlergiaLatex=page.getByText('Alergia latex');
    this.btnDiabetes=page.getByText('Diabetes');
    this.btnAspirina=page.getByText('Aspirina');
    this.btnADsugar=page.getByText('Adicto al sugar');
    this.btnGuardar=page.getByRole('button', { name: 'Guardar datos' });

    

    //desmarcarAntecedentes
    this.btnGoAntecedentes=page.locator('//*[@id="app"]/main/div[1]/div/div[2]/div/a[1]');
    this.btnDesAlergia=page.locator('//*[@id="app"]/div/div/div/main/div[2]/div/div/main/div[1]/div[1]/div/div[2]/i');
    this.BtnDesDiabetes=page.locator('//*[@id="app"]/div/div/div/main/div[2]/div/div/main/div[2]/div[1]/div/div[2]/i');
    this.btnDesAspirinas=page.locator('//*[@id="app"]/div/div/div/main/div[2]/div/div/main/div[2]/div[2]/div/div[2]/i');
    this.btnDesSugar=page.locator('//*[@id="app"]/div/div/div/main/div[2]/div/div/main/div[1]/div[2]/div/div[2]/i');
    this.btnGuardarD=page.getByRole('button', { name: ' Guardar' })



}
     

    

   



async selecPaciente () {
    await this.btnPacientes.click();
    await this.paciente.click();
    await this.tratPaciente.click();
}

async tabTratamientos() {
    const [newPage] = await Promise.all([

        this.page.waitForEvent("popup"),
    ])
    return new AntecedentesMedicos (newPage);
}

async newTab (){
    await this.selecTratamiento.click();
}

async selecAntecedentes(){
    await this.btnAntecedentes.click();

  await this.btnAlergiaLatex.click();
  
  await this.btnDiabetes.click();
 
  await this.btnAspirina.click();
  
  await this.btnADsugar.click();
 
  await this.btnGuardar.click();
}
async descmarcarAntecedentes(){
    await this.btnGoAntecedentes.click();
    await this.btnDesAlergia.click();
    await this.BtnDesDiabetes.click();
    await this.btnDesAspirinas.click();
    await this.btnDesSugar.click();
    await this.btnGuardarD.click();
}
}
