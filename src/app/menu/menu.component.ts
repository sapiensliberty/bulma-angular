import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	menuHamburguesa = '';

	constructor() { }

	ngOnInit(): void {
	}

	abrirMenuHamburguesa(){
		if (this.menuHamburguesa=='') {
			this.menuHamburguesa = 'is-active';
		} else {
			this.menuHamburguesa = '';
		}
	}

}
