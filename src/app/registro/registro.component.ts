import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
nombre: string="";
apellido: string="";
telefono: string="";
direccion: string="";
nombre_usuario: string="";
correo_electronico: string="";
contrasenia: string="" ;

registrarUsuario(){
  fetch("http://localhost:8080/app/1/registro", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    nombre: this.nombre ,
    contrasenia: this.contrasenia
  })
})
.then( (response) => { 
   //do something awesome that makes the world a better place
})
.catch((reason)=>{

});

}
}
