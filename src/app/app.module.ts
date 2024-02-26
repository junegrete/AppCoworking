import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OficinasComponent } from './oficinas/oficinas.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { CarritoDePagoComponent } from './carrito-de-pago/carrito-de-pago.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdministracionComponent } from './administracion/administracion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OficinasComponent,
    ReservacionComponent,
    CarritoDePagoComponent,
    ContactoComponent,
    RegistroComponent,
    LoginComponent,
    AdministracionComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
