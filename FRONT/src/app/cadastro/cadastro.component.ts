import { HomeServiceService } from './../services/home-service/home-service.service';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import { ToastrService } from 'ngx-toastr';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { Router } from '@angular/router';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

	public cad: FormGroup;
	public cads = { files: null, livro: null };
	public login = true;
	public livro;
	public file = { name: null, base64: null };
	public admin = false;
	constructor(
		private toaster: ToastrService,
		private homeservice: HomeServiceService,
		private router: Router
	) {

	}

	// tslint:disable-next-line: typedef
	ngOnInit() {
		console.log('aui');
		let login = localStorage.getItem("login");
		!login ? this.router.navigate(['login']) : '';
		login = JSON.parse(login);
		login && login['tipusu'] === 'A' ? this.admin = true : this.admin = false;
		this.Formcad();
	}


	Formcad() {
		this.cad = new FormGroup({
			files: new FormControl({ value: this.cads.files, disabled: false }),
			livro: new FormControl({ value: this.cads.livro, disabled: false })
		});
	}


	upload(e, files) {

		console.log('aqui');
		let file;
		let nameanx = files[0].name.split(/\./);


		if (files.length === 1) {
			if (files[0]) {
				if (nameanx[nameanx.length - 1] === 'pdf') {
					file = files[0];
					this.getBase64(file).then(
						data => {


							this.file.name = nameanx[0];
							this.file.base64 = data;
							console.log(this.file);
							this.toaster.success('O arquivo Vinculado com Sucesso', 'MENSAGEM')
						}
					);
				} else {

					this.file = { name: null, base64: null };
					this.cad.patchValue({ files: null });
					this.toaster.warning('O arquivo não é do Formato Aceito! Somente Arquivos PDF', 'MENSAGEM')
					return;
				}
			}
		} else {

			this.file = { name: null, base64: null };
			this.cad.patchValue({ files: null });
			files.length > 2 ? this.toaster.warning('Não é Possível Selecionar mais de 1 Arquivo!', 'MENSAGEM') : '';
		}
	}


	getBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				let encoded = reader.result.toString().replace(/^.*,/, '');
				resolve(encoded);
			};
			reader.onerror = error => reject(error);
		});

	}

	async inserir() {


		let dados = await this.homeservice.get({ name: this.file.name });
		if (!dados) {

			const retorno = await this.homeservice.insert(this.file);
			if (retorno && (retorno['rowCount'] > 0)) {

				this.file = { name: null, base64: null };
				this.cad.patchValue({ files: null });
				this.toaster.success('PDF cadastrado com sucesso!', 'MENSAGEM');
			} else {

				this.toaster.error('Erro ao cadastrar!', 'MENSAGEM');
			}
		} else {

			this.livro = null
			this.toaster.info('PDF já existente com esse nome!', 'MENSAGEM');
		}
	}

	async excluir() {

		if (this.livro) {

			const retorno = await this.homeservice.delete(this.livro.codigo);
			if (retorno && (retorno['rowCount'] > 0)) {

				this.livro = null;
				this.cad.patchValue({ livro: null });
				this.toaster.success('PDF excluído com sucesso!', 'MENSAGEM');
			} else {

				this.toaster.error('Erro ao excluir PDF!', 'MENSAGEM');
			}
		} else {

			this.toaster.info('Nenhum PDF Selecionado!', 'MENSAGEM');
		}
	}

	remover() {

		this.file = { name: null, base64: null };
		this.cad.patchValue({ files: null });
		this.toaster.success('O arquivo Removido com Sucesso', 'MENSAGEM')


	}

	abrir() {

		if (this.livro && this.livro.base64) {

			let blob = this.dataURItoBlob(this.livro.base64)
			window.open(window.URL.createObjectURL(blob));
		} else {

			this.toaster.info('Nenhum PDF Selecionado!', 'MENSAGEM');
		}
	}

	dataURItoBlob(dataURI) {

		var byteString;
		if (dataURI.split(',')[0].indexOf('base64') >= 0)
			byteString = atob(dataURI.split(',')[1]);
		else
			byteString = unescape(dataURI.split(',')[1]);

		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

		var ia = new Uint8Array(byteString.length);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}

		return new Blob([ia], { type: mimeString });
	}

	async get() {


		if (this.cad.controls.livro.valid && (!!this.cad.controls.livro?.value)) {

			let dados = await this.homeservice.get({ name: this.cad.controls.livro.value });
			if (dados) {

				dados['name'] = `${dados['name']}.pdf`;
				dados['base64'] = 'data:application/pdf;base64,' + dados['base64'];
				this.livro = dados;
				this.toaster.success('PDF Encontrado com Sucesso!', 'MENSAGEM');
			} else {

				this.livro = null
				this.toaster.info('PDF não Encontrado!', 'MENSAGEM');
			}
		}
		else {

			this.livro = null
			this.toaster.info('Campo Está em Branco!', 'MENSAGEM');
		}
	}

	sair() {
		localStorage.removeItem("login");
		this.router.navigate(['login'])
	}

	cadastrarUsuarios() {

		this.router.navigate(['cadastrar-usuarios']);
	}

}
