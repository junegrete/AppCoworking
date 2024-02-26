import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { CarritoDePagoComponent } from './carrito-de-pago/carrito-de-pago.component';
import { OficinasComponent } from './oficinas/oficinas.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { AdministracionComponent } from './administracion/administracion.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "oficinas", component: OficinasComponent},
  { path: "carrito-de-pago", component: CarritoDePagoComponent},
  { path: "reservacion", component: ReservacionComponent},
  { path: "contacto", component: ContactoComponent},
  { path: "registro", component: RegistroComponent},
  {path: "**", redirectTo: "home", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path:"administracion",component: AdministracionComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
