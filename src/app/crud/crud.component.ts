import { Component, OnInit } from '@angular/core';
import { NotifierService } from "angular-notifier";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: 'crud',
	templateUrl: './crud.component.html',
	styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

	modal="";
	lstNotas = [
	{"titulo":"titulo lorem","contenido":"contenido 1"},
	{"titulo":"titulo 2","contenido":"contenido 1"},
	{"titulo":"titulo 3","contenido":"contenido 1"},
	{"titulo":"titulo 4","contenido":"contenido 1"},
	{"titulo":"titulo 4","contenido":"contenido 1"},
	];

	titulo = "";
	contenido = "";

	porcentaje=0;
	escala=100;

	private readonly notifier: NotifierService;

	constructor(notifierService: NotifierService, private spinner: NgxSpinnerService) {
		this.notifier = notifierService;
	}

	ngOnInit(): void {
	}

	agregarNota(){
		let nota = {"titulo":this.titulo,"contenido":this.contenido};
		this.lstNotas.push(nota);
		console.log("titulo: "+this.titulo);
		console.log("contenido: "+this.contenido);
		this.cerrarModal();
	}

	abrirModal(){
		this.modal = "is-active";
	}

	cerrarModal(){
		this.modal = "";
	}

	mas(){
		if (this.porcentaje>=100) {
			console.log("Error el valor no puede ser mayor a 100.");
			this.notifier.notify("error", "Error el valor no puede ser mayor a 100.");
		} else {
			this.porcentaje = this.porcentaje + 1;
		}
	}

	menos(){
		if (this.porcentaje<1) {
			console.log("Error el valor no puede ser menor a 1.");
			this.notifier.notify("error", "Error el valor no puede ser menor a 1.");
		} else {
			this.porcentaje = this.porcentaje - 1;
		}
		
	}

	mostrarSpinner(){
		this.spinner.show();
	    setTimeout(() => {
	      this.spinner.hide();
	    }, 5000);
	}

}
