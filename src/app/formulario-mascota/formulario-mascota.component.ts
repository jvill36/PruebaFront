import { Component, OnInit } from "@angular/core";
import { Mascota } from "../mascota";

@Component({
  selector: "app-formulario-mascota",
  templateUrl: "./formulario-mascota.component.html",
  styleUrls: ["./formulario-mascota.component.css"]
})
export class FormularioMascotaComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  formularioEnviado(){

    console.log("El formulario fue enviado y la mascota es: ", this.mascotaModel)
    alert("Enviado");
  }
}
