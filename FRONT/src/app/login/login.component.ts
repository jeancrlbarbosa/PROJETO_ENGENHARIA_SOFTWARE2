import { HomeServiceService } from './../services/home-service/home-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import { ToastrService } from 'ngx-toastr';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { Router } from '@angular/router';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public cad: FormGroup;
	public cads = { login: null, senha: null };
	constructor(
		private toaster: ToastrService,
		private homeservice: HomeServiceService,
		private router: Router
	) {

	}

	ngOnInit() {

		let login = localStorage.getItem("login");
		login ? this.router.navigate(['cadastro']) : '';
		this.Formcad();
	}


	Formcad() {
		this.cad = new FormGroup({
			login: new FormControl({ value: this.cads.login, disabled: false }),
			senha: new FormControl({ value: this.cads.senha, disabled: false })
		});
	}

	async login() {

		let dados = await this.homeservice.login({ login: this.cad.controls.login.value, senha: this.cad.controls.senha.value });
		dados = dados || { login: null, senha: null };
		if ((this.cad.controls.login.value === dados['login']) && (this.cad.controls.senha.value === dados['senha'])) {

			localStorage.setItem("login", JSON.stringify(dados))
			this.toaster.success('Bem Vindo ao Youread!', 'MENSAGEM');
			this.router.navigate(['cadastro']);
		}
		else {
			this.toaster.error('Usuario ou Senha Invalidos', 'MENSAGEM');
		}
	}




}
