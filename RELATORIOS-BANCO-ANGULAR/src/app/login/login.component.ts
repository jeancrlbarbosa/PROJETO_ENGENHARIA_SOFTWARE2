import { HomeServiceService } from './../services/home-service/home-service.service';

import { Component, OnInit, ChangeDetectorRef, OnDestroy, Input, ViewChild, AfterContentInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { NgbDatepickerConfig, NgbDateStruct, NgbDatepicker, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as moment from 'moment/moment';
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

  public model: NgbDateStruct;
  public models: NgbDateStruct;
  public cad: FormGroup;
  public cads = {login: null, senha: null};
  constructor(
	private toaster: ToastrService,
	private homeservice: HomeServiceService,
  private router: Router
    ) {

  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
	this.Formcad();
  }

  async getServers() {

	// const dados = await this.homeservice.getServers();
	// if (dados) {

	// 	const lista = JSON.parse(JSON.stringify(dados));
	// 	lista.forEach(element => {
	// 		element.classeU = 'classWaiting';
	// 		element.classeF = 'classWaiting';
	// 		element.classeR = 'classWaiting';
	// 	});
	// 	this.serverList2 = lista;
	// 	this.serverList2.forEach(element => {

	// 		element && element.name ? this.serverList.push(element.name) : '';
	// 		element && element.altname ? this.serverList3.push(element.altname) : '';
	// 	})
	// }
  }

  async cadastrar() {
 
	if (this.cad.controls.nomebusca.value && this.cad.controls.nomelternativo.value) {

		const retorno = await this.homeservice.insertEscopo({name: this.cad.controls.nomebusca.value, altname: this.cad.controls.nomelternativo.value});
		if (retorno && (retorno['rowCount'] > 0)) {

			this.toaster.success( 'Backup cadastrado com sucesso!', '');
			setTimeout(() => {
				this.cad.patchValue({nomebusca: null, nomelternativo: null});
				this.getServers();
			}, 100);
		} else {

			this.toaster.error( 'Erro ao cadastrar!', '');
		}
	} else {

		this.toaster.info( 'Preencha os campos de Nome de Busca e Alternativo para poder cadastrar!', '');
	}
  }


 Formcad() {
   this.cad = new FormGroup({
   login: new FormControl({value: this.cads.login, disabled: false}),
	 senha: new FormControl({value: this.cads.senha, disabled: false})
   });
 }

 login(){
  if((this.cad.controls.login.value==="admin") && (this.cad.controls.senha.value==="admin"))
  {
	  localStorage.setItem("login", JSON.stringify({login:this.cad.controls.login.value, senha:this.cad.controls.senha.value}))
	  this.router.navigate(['cadastro']);
  }
  else {
	this.toaster.error( 'Usuario ou Senha Invalidos', 'MENSAGEM');
  }
 };




}
