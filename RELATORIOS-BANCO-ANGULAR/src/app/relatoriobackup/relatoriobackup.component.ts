import { HomeServiceService } from './../services/home-service/home-service.service';

import { Component, OnInit, ChangeDetectorRef, OnDestroy, Input, ViewChild, AfterContentInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { NgbDatepickerConfig, NgbDateStruct, NgbDatepicker, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as moment from 'moment/moment';
import { ToastrService } from 'ngx-toastr';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-relatoriobackup',
  templateUrl: './relatoriobackup.component.html',
  styleUrls: ['./relatoriobackup.component.css']
})
export class RelatoriobackupComponent implements OnInit {

  public model: NgbDateStruct;
  public models: NgbDateStruct;
  public cad: FormGroup;
  public manual = {udp: ' ', fita: ' '};
  public cads = {valor: null, data: null, anotacao: null, anotacao2: null, datas: null, anotacoes: null, nomebusca: null, nomelternativo: null};
  public gerar = true;
  public corrigido = false;
  public hiddenRecovery = true;
  public hiddenCadastro= true;
  public serverList = [];
  public serverList3 = [];
  public serverList2 = [];
  public telefone = [
    {name: 'TELEFONE', classe: 'classWaiting' },
  ];
  constructor(
	private toaster: ToastrService,
	private homeservice: HomeServiceService
    ) {

  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
 
	this.getServers();
	this.Formcad();
  }

  async getServers() {

	const dados = await this.homeservice.getServers();
	if (dados) {

		const lista = JSON.parse(JSON.stringify(dados));
		lista.forEach(element => {
			element.classeU = 'classWaiting';
			element.classeF = 'classWaiting';
			element.classeR = 'classWaiting';
		});
		this.serverList2 = lista;
		this.serverList2.forEach(element => {

			element && element.name ? this.serverList.push(element.name) : '';
			element && element.altname ? this.serverList3.push(element.altname) : '';
		})
	}
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

  // tslint:disable-next-line: typedef
  separa(data) {
    console.log(data);
    let texto = data.valor.split(' ');
    for (let index = 0; index < this.serverList.length; index++) {
       if (texto.find(f => f === this.serverList[index])) {
         const index2 = this.serverList2.findIndex(f => f.name === this.serverList[index]);
         if (texto.find(f => f === 'concluido')) {
            this.serverList2[index2].classeU = 'classSuccess';
            this.toaster.success(this.serverList3[index] + ' DEU CERTO', 'MENSAGEM');
         } else if (texto.find(f => f === 'falha')) {
            this.serverList2[index2].classeU = 'classFailed';
         } else {
          this.toaster.error( 'BACKUP É DE OUTRA DATA!', 'MENSAGEM');
         }
          this.verificaCompleto();
       }
    }
    this.cad.patchValue({valor: null});
    console.log(texto);
  }

  verificaCompleto() {
	if (!(this.serverList2.find( f => f.classeF === 'classWaiting' || f.classeU === 'classWaiting'))  && !(this.telefone[0].classe === 'classWaiting') && this.cad.controls.data.value) {
      this.gerar = false;
    } else {
      this.gerar = true;
    }
  }

  limparDados() {
	  this.serverList2.forEach(element => {
		  element.classeU = 'classWaiting';
		  element.classeF = 'classWaiting';
		  element.classeR = 'classWaiting';
	  })
	  this.telefone[0].classe = 'classWaiting';
	  this.verificaCompleto();
	  this.cad.patchValue({data: null, anotacao: null, anotacao2: null});
  }

  // tslint:disable-next-line: typedef
  editaFita (udp, valor, classe) {
	console.log(udp);
	if (this.corrigido) {
		const index  = this.serverList2.findIndex( f => f.name === udp.name);
		this.serverList2[index][classe] = 'classWaiting';
		this.verificaCompleto();
	} else {
		const index  = this.serverList2.findIndex( f => f.name === udp.name);
		this.serverList2[index][classe] = valor;
		this.verificaCompleto();
	}
  }

  corrige() {
	  if (this.corrigido) {
		this.corrigido = false;
		document.getElementById('corrige').setAttribute('class', 'btn btn-outline-secondary buttonClass3');
	  } else {
		this.corrigido = true;
		document.getElementById('corrige').setAttribute('class', 'btn btn-outline-secondary buttonClassActivated');
	  }
  }

  minimiza() {
	this.hiddenRecovery = !this.hiddenRecovery;
	if (!this.hiddenRecovery) {
	  document.getElementById('minimiza').setAttribute('class', 'btn btn-outline-secondary buttonClass3');
	} else {
	  document.getElementById('minimiza').setAttribute('class', 'btn btn-outline-secondary buttonClassActivated');
	}
}

minimizaCadastro() {
	this.hiddenCadastro = !this.hiddenCadastro;
	if (!this.hiddenCadastro) {
	    document.getElementById('cadastro').setAttribute('class', 'btn btn-outline-secondary buttonClassActivated');
	} else {
		document.getElementById('cadastro').setAttribute('class', 'btn btn-outline-secondary buttonClass3');
	}
}

  manualChange(param) {
	  console.log('caiu manueakl');
	  if (this.manual[param].length > 1) {
		this.manual[param] = ' ';
	  } else {
		this.manual[param] = '- Manual';
	  }
  }

  editaTel (udp, valor) {
	if (this.corrigido) {
		const index  = this.telefone.findIndex( f => f.name === udp.name);
		this.telefone[index].classe = 'classWaiting';
		this.verificaCompleto();
	} else {
		const index  = this.telefone.findIndex( f => f.name === udp.name);
		this.telefone[index].classe = valor;
		this.verificaCompleto();
	}
  }

  gerarPDF() {
	pdfMake.createPdf(this.montaPDF(this.serverList2, this.cad.controls.data.value, this.telefone, this.cad.controls.anotacao.value, this.cad.controls.anotacao2.value, this.cad.value)).print();
  }



 formatadata(data) {
   if (data) {
    return (data.day < 10 ? '0' + data.day : data.day) + '/' + (data.month < 10 ? '0' + data.month : data.month) + '/' + data.year
   }
 }

 formatadata2020(data) {
  return data.year + '-' + (data.month < 10 ? '0' + data.month : data.month) + data.day;
}


 Formcad() {
   this.cad = new FormGroup({
     valor: new FormControl({value: this.cads.valor, disabled: false}),
	 data: new FormControl({value: this.cads.data, disabled: false}),
	 anotacao: new FormControl({value: this.cads.anotacao, disabled: false}),
	 anotacao2: new FormControl({value: this.cads.anotacao2, disabled: false}),
	 datas: new FormControl({value: this.cads.datas, disabled: false}),
	 anotacoes: new FormControl({value: this.cads.anotacoes, disabled: false}),
	 nomebusca: new FormControl({value: this.cads.nomebusca, disabled: false}),
	 nomelternativo: new FormControl({value: this.cads.nomelternativo, disabled: false})
   });
 }



montaPDF(listaTipos, data, telefone, observacao?, observacao2?, cad?) {
  let pdf =   {
        content: [
      {
			style: 'tableExample',
			table: {
			    widths: ['*'],
				body: [
				    [
    				    {
    				       text: 'CONTROLE DIÁRIO',
    				       alignment: 'center'
    				    }
				    ],
				    [
    				    {
    				       text: 'LISTA DE NOMES - BACKUP ' +  (data.day < 10 ? '0' + data.day : data.day) + '/' + (data.month < 10 ? '0' + data.month : data.month) + '/' + data.year + '.',
    				       alignment: 'center'
    				    }
				    ],
				    [
    				    {
    				       text:  observacao ? observacao : '',
    				       alignment: 'center'
    				    }
				    ],
				]
			}
		},
		{
			style:'tableExample2',
			table: {
				widths: ['*', 70, 70],
				body: this.formataServer(listaTipos)
			}
		},
		{
			style: 'tableExample3',
			table: {
				widths: ['*'],
				heights:['*', 20, '*'],
				body: [
				    [
    				    {
    				       text: 'VISTO',
    				       alignment: 'center'
    				    }
					],
					[
    				    {
						   border: [true, true, true, false],
    				       text: '',
    				    }
				    ],
				    [
    				    {
							
					       border: [true, false, true, true],
    				       text: 'ASSINATURA               ______________________________________________________________________',
    				       alignment: 'left'
    				    }
				    ],
				]
			}
		},
		{
			style: 'tableExample',
			table: {
			    widths: ['*'],
				body: [
				    [
    				    {
    				       text: 'CONTROLE DE TELEFONE',
    				       alignment: 'center'
    				    }
				    ],
				    [
    				    {
    				       text: 'DATA: ' + (data.day < 10 ? '0' + data.day : data.day) + '/' + (data.month < 10 ? '0' + data.month : data.month) + '/' + data.year,
    				       alignment: 'center'
    				    }
				    ],
				    [
    				    {
    				       text: observacao2 ? observacao2 : '',
    				       alignment: 'center'
    				    }
				    ],
				]
			}
		},
		{
			style:'tableExample2',
			table: {
				widths: ['*', 70],
				body:[
					
					[						
						{
						  text: 'Descrição',
						  fillColor: '#eeeeee'
						},						
						{
							text: 'Situação',
							fillColor: '#eeeeee'
						  }
				    ],
					[						
						{
							text: 'S_TEL',
						},					
						{
							text: '',
							fillColor: (telefone[0].classe === 'classSuccess' ? '#2b9600' : '#ff0000')
						}]

					]
			}
		},
		{
			style: 'tableExample3',
			table: {
				widths: ['*'],
				heights:['*', 20, '*'],
				body: [
				    [
    				    {
    				       text: 'VISTO',
    				       alignment: 'center'
    				    }
					],
					[
    				    {
						   border: [true, true, true, false],
    				       text: '',
    				    }
				    ],
				    [
    				    {
							
					       border: [true, false, true, true],
    				       text: 'ASSINATURA               ______________________________________________________________________',
    				       alignment: 'left'
    				    }
				    ],
				]
			}
		}
	],
	styles: {
		tableExample: {
			margin: [0, 5, 0, 0],
			fontSize: 10,
			fillColor: '#eeeeee'
		},
		tableExample2: {
			margin: [0, 0, 0, 0],
			fontSize: 10,
		},
	    tableExample3: {
			margin: [0, 3, 0, 15],
			fontSize: 10,
			fillColor: '#eeeeee'
		},
	},
	defaultStyle: {
		// alignment: 'justify'
	}
	
};
if (cad.datas && listaTipos.find(element => element.classeR === 'classSuccess')) {
		pdf.content.push({
			style: 'tableExample',
			table: {
			    widths: ['*'],
				body: [
				    [
    				    {
    				       text: 'CONTROLE RECUPERAÇÃO',
    				       alignment: 'center'
    				    }
				    ],
				    [
    				    {
    				       text: 'DATA: ' + (cad.datas.day < 10 ? '0' + cad.datas.day : cad.datas.day) + '/' + (cad.datas.month < 10 ? '0' + cad.datas.month : cad.datas.month) + '/' + cad.datas.year,
    				       alignment: 'center'
    				    }
				    ],
				    [
    				    {
    				       text: cad.anotacoes ? cad.anotacoes : '',
    				       alignment: 'center'
    				    }
				    ],
				]
			}
		});
		pdf.content.push({
			style:'tableExample2',
			table: {
				widths: ['*', 70],
				body: this.formataServerRecovery(listaTipos.filter(element => element.classeR === 'classSuccess'))
			}
		});
		pdf.content.push({
			style: 'tableExample3',
			table: {
				widths: ['*'],
				heights:['*', 20, '*'],
				body: [
				    [
    				    {
    				       text: 'VISTO',
    				       alignment: 'center'
    				    }
					],
					[
    				    {
						   border: [true, true, true, false],
    				       text: '',
    				    }
				    ],
				    [
    				    {
							
					       border: [true, false, true, true],
    				       text: 'ASSINATURA               ______________________________________________________________________',
    				       alignment: 'left'
    				    }
				    ],
				]
			}
		});
	}
return pdf;

}

formataServer(listaTipos) {
	let listas = [];
	listas.push(					[						
		{
		  text: 'Descrição',
		  fillColor: '#eeeeee'
		},						
		{
			text: 'Situação TIPO2',
			fillColor: '#eeeeee'
		  },						
		  {
			text: 'Situação TIPO1',
			fillColor: '#eeeeee'
		  }
	]);
	for (let index = 0; index < listaTipos.length; index ++) {
		const array = [
			{text:listaTipos[index].name},
			{text:'' , fillColor: (listaTipos[index].classeU === 'classSuccess' ? '#2b9600' : '#ff0000')},
			{text:'' , fillColor: (listaTipos[index].classeF === 'classSuccess' ? '#2b9600' : '#ff0000')},
		]
		listas.push(array);
	}
	return listas;
}

formataServerRecovery(listaTipos) {
	let listas = [];
	listas.push(					[						
		{
		  text: 'Descrição',
		  fillColor: '#eeeeee'
		},												
		  {
			text: 'Situação',
			fillColor: '#eeeeee'
		  }
	]);
	for (let index = 0; index < listaTipos.length; index ++) {
		const array = [
			{text:listaTipos[index].name},
			{text:'' , fillColor: (listaTipos[index].classeR === 'classSuccess' ? '#2b9600' : '#eeeeee')}
		]
		listas.push(array);
	}
	return listas;
}

}
