// playwright-dev-page.ts
import { expect, Locator, Page, } from '@playwright/test';

export class crearCita {
  readonly page: Page;
  readonly botonDiaria: Locator;
  readonly darCita : Locator;

  constructor(page: Page) {
    this.page = page;
    this.botonDiaria = page.getByRole('link', { name: ' Diaria' });
    this.darCita = page.getByRole('button', { name: 'Dar cita' });
  }

  async DarCita() {
    await this.botonDiaria.click()
    await this.darCita.click();
  }

  async selecDoctor(nameDoctor:string){
    this.page.getByRole('combobox', { name: 'Seleccionar doctor' }).locator('b').click();
    this.page.getByRole('treeitem', { name: nameDoctor }).click(); //'Dr(a). QaPrecios, Alvaro'
    this.page.locator('#motivos-atencion-cita-modal').getByText('Omitir').click();
  }

  async selecHorario(horario:string){
    await this.page.getByRole('link', { name: horario }).first().click();//'08:00'
  }

  async selecPaciente(namePaciente:string) {
    await this.page.getByPlaceholder('Nombre, apellidos, y/o rut...').click();
    await this.page.getByPlaceholder('Nombre, apellidos, y/o rut...').fill('1042 ');
    await this.page.getByPlaceholder('Nombre, apellidos, y/o rut...').press('CapsLock');
    await this.page.getByPlaceholder('Nombre, apellidos, y/o rut...').fill(namePaciente); //'1042 Alvaro Prueba'
    await this.page.getByRole('link', { name: namePaciente }).click();
    await this.page.getByRole('button', { name: 'Continuar' }).click();
    await this.page.getByRole('button', { name: 'Cerrar' }).click();    
  }
  async GoToAgendaSemanal(nameDoctor:string){
    await this.page.getByRole('link', { name: ' Semanal ' }).click();
    await this.page.getByRole('link', { name: nameDoctor }).click(); //'Dr(a). QaPrecios, Alvaro'
    await this.page.locator('a').filter({ hasText: 'Alvaro Prueba' }).click(); //'Alvaro Prueba'
    await this.page.getByRole('link', { name: 'Ir a plan de tratamiento' }).click();
  }
}