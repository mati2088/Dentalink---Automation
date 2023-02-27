import { expect, Locator, Page, } from '@playwright/test';

export class EvolucionarPacientes {
    
    readonly page: Page
    readonly locator : Locator
    readonly btnPacientes 
    readonly paciente
    readonly tratPaciente
    readonly tratSucursal
    readonly btnPrestacion
    readonly btnPlantillas
    readonly btnMisPlantillas
    readonly btnLista
    readonly btnAgregarPlantilla
    readonly cerrarModal
    readonly btnSolicitar1
    readonly btnSolicitar2
    readonly btnSolicitar3
    readonly btnAceptar
    readonly btnCancelar
    readonly btnCaGeneral
    readonly btnJuliDental
    readonly btnCargarJuli
    readonly btnSolicitar4
    readonly btnMPrestaciones
    readonly btnEvolucionar
    readonly btnRealizar
    readonly btnEvo100
    readonly btnFinalizar
    readonly closedPGeneral
    readonly btnRecibirPago
    readonly btnCheckPoint
    readonly btnPagar
    readonly btnAllPrestaciones
    readonly btnIngresarDinero
    readonly btnContinuar
    readonly btnPLanesTratamientos
    readonly btnBoleta
    readonly btnDesc
    readonly btnMpago



constructor (page : Page) {
    this.page = page
    //seleccion de paciente
    this.btnPacientes= page.getByRole('link', { name: ' Pacientes' });
    this.paciente=page.getByText('1042');
    this.tratPaciente=page.locator("div[class='td tratamientos detail-column'] a[target='_blank']");

    //Go to tratamientos
    this.tratSucursal=page.getByRole('button', { name: ' Nuevo plan de tratamiento' });
    this.btnPrestacion = page.getByRole('button', { name: ' Prestación' });
    this.btnPlantillas = page.getByText('Plantillas', { exact: true });
    this.btnMisPlantillas = page.locator('#agregar-prestaciones-container').getByText('Mis Plantillas');
    this.btnLista= page.getByText('Test1');
    this.btnAgregarPlantilla=page.locator('//*[@id="agregar-prestaciones-container"]/div[1]/div/footer/div[2]/button');
    this.cerrarModal=page.locator('#agregar-prestaciones-container i');
    
    //solicitamos a juli en caracter general    
    this.btnCaGeneral=page.getByText('T419 - ACCIONES DE CARÁCTER GENERAL');
    this.btnJuliDental=page.getByText('Juli dental');
    this.btnCargarJuli=page.getByRole('button', { name: ' Cargar' });
    this.closedPGeneral=page.getByRole('banner').filter({ hasText: 'Productos de T419 - ACCIONES DE CARÁCTER GENERAL' })
    this.btnSolicitar4=page.locator('div:nth-child(4) > .sc-jvEmr > .sc-chAAoq > div > div > div > div');
    this.btnMPrestaciones=page.getByText('Seleccionar múltiples prestaciones');
    this.btnEvolucionar=page.getByRole('button', { name: 'Evolucionar prestaciones (1) ' });
    this.btnRealizar=page.getByText('Realizar (100%)');
    this.btnEvo100=page.getByRole('button', { name: 'Evolucionar (100%)' });
    this.btnFinalizar=page.getByRole('button', { name: 'Finalizar' });

    
    //solicitar trabajo en laboratorio
    this.btnSolicitar1= page.locator('.sc-chAAoq > div > div > div > div');
    this.btnSolicitar2=page.locator('div:nth-child(2) > .sc-jvEmr > .sc-chAAoq > div > div > div > div');
    this.btnSolicitar3=page.locator('div:nth-child(3) > .sc-jvEmr > .sc-chAAoq > div > div > div > div');
    this.btnAceptar=page.getByRole('button', { name: 'Solicitar' });
    this.btnCancelar=page.getByRole('button', { name: 'Cancelar' });


    //hacer el pago de las prestaciones.
     
    this.btnCheckPoint=page.getByRole('cell', { name: '' });
    this.btnPagar=page.getByRole('link', { name: 'Pagar tratamiento(s) ' });
    this.btnAllPrestaciones=page.getByRole('row', { name: 'Prestación Precio Abonado Estado Por abonar' });
    this.btnIngresarDinero=page.getByRole('button', { name: 'Ingresar transacciones' });
    this.btnContinuar=page.getByRole('button', { name: 'Continuar' });

    this.btnBoleta=page.locator('#numboleta');
    this.btnDesc=page.locator('#descuento');
    this.btnMpago=page.locator('select[name="medio"]');
  
 
 
 
  

    //planes

   
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
    return new EvolucionarPacientes (newPage);
}

async newTab (){
    await this.tratSucursal.click();
}

async agregarPlantilla(){
    await this.btnPrestacion.click();
    await this.btnPlantillas.click();
    await this.btnMisPlantillas.click();
    await this.btnLista.click();
    await this.btnAgregarPlantilla.click();
    await this.cerrarModal.nth(1).click();
}

async evolucionarPdt (){
    await this.btnSolicitar1.first().click();
    await this.btnAceptar.click();
    await this.btnSolicitar2.first().click();
    await this.btnAceptar.click();
    await this.btnSolicitar3.first().click();
    await this.btnAceptar.click();
    await this.btnCancelar.click();

}

async evolucionarJuli(){
    await this.btnPrestacion.click();
    await this.btnCaGeneral.click();
    await this.btnJuliDental.click();
    await this.btnCargarJuli.click();
    await this.closedPGeneral.locator('i').nth(1).click();
    await this.btnSolicitar4.first().click();
    await this.btnMPrestaciones.click();
    await this.btnEvolucionar.click();
    await this.btnRealizar.click();
    await this.btnEvo100.click();
    await this.btnFinalizar.click();
}
async realizarPago(){
    await this.page.getByRole('link', { name: ' Recibir pago' }).click();
    await this.btnCheckPoint.locator('i').first().click();
    await this.btnPagar.click();
    await this.btnAllPrestaciones.getByRole('checkbox').check();
    await this.btnBoleta.click()
    await this.btnBoleta.fill('369');
    await this.btnDesc.selectOption('0.00_0_4');
    await this.btnMpago.selectOption('0');
    await this.btnIngresarDinero.click();
    await this.btnContinuar.click();

  




}

}




