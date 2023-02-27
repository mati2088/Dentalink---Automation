import { test, Locator, expect } from '@playwright/test';
import { loginDentalink} from '../pages/login-page';
import { crearCita } from '../pages/agendar-page';

test('test', async ({ page }) => {
  const login = new loginDentalink(page);
  const agendarCita = new crearCita (page);
  await login.GoTo();

  await login.loginUser("AlvaroPrecios","1234");  
  await agendarCita.DarCita();
  await agendarCita.selecDoctor('Dr(a). QaPrecios, Alvaro');
  await agendarCita.selecHorario('08:00');
  await agendarCita.selecPaciente('1042 Alvaro Prueba');
  await agendarCita.GoToAgendaSemanal('Dr(a). QaPrecios, Alvaro');
}); 

