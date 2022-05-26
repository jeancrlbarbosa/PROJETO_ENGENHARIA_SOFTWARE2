import { HomeServiceService } from './../services/home-service/home-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
	selector: 'app-cadastro-usuario',
	templateUrl: './cadastro-usuario.component.html',
	styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

	public cad: FormGroup;
	public admin = false;
	public cads = { login: null, senha: null, tipusu: null };
	constructor(
		private toaster: ToastrService,
		private homeservice: HomeServiceService,
		private router: Router
	) {

	}

	ngOnInit() {
		let login = localStorage.getItem("login");
		!login ? this.router.navigate(['login']) : '';
		login = JSON.parse(login);
		login && login['tipusu'] === 'A' ? this.admin = true : this.admin = false;
		this.Formcad();
	}


	Formcad() {
		this.cad = new FormGroup({
			login: new FormControl({ value: this.cads.login, disabled: false }),
			senha: new FormControl({ value: this.cads.senha, disabled: false }),
			tipusu: new FormControl({ value: this.cads.tipusu, disabled: false })
		});
	}

	async salvar() {

		if (this.cad.controls.login.value && this.cad.controls.senha.value && this.cad.controls.tipusu.value) {


			if ((this.cad.controls.tipusu.value === 'A') || (this.cad.controls.tipusu.value === 'U')) {

				let dados = await this.homeservice.usuario({ login: this.cad.controls.login.value });
				dados = dados || { login: null };
				if (!dados['login']) {

					const retorno = await this.homeservice.insertUser({ login: this.cad.controls.login.value, senha: this.cad.controls.senha.value, tipusu: this.cad.controls.tipusu.value });
					if (retorno && (retorno['rowCount'] > 0)) {

						this.toaster.success('Usuário cadastrado com sucesso!', 'MENSAGEM');
						this.router.navigate(['cadastro']);
					} else {

						this.toaster.error('Erro ao cadastrar usuário!', 'MENSAGEM');
					}
				} else {

					this.toaster.info('Usuário já vinculado!', 'MENSAGEM');
				}
			} else {

				this.toaster.info('Tipo de usuário deve ser A = admin ou U = usuário!', 'MENSAGEM');
			}
		} else {

			this.toaster.info('Campos em branco!', 'MENSAGEM');
		}
	}




}
