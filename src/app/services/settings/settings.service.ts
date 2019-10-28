import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class SettingsService {

  constructor( @Inject(DOCUMENT) private document: Document) {
    this.cargarAjustes();
  }

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ) );
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes') ){
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      this.aplicarTema ( this.ajustes.tema );
    } else {
      this.aplicarTema ( this.ajustes.tema );
    }
  }

  aplicarTema(tema: string) {
    const url: string = `assets/css/colors/${tema}.css`;
    this.document.getElementById('tema').setAttribute('href', url);


    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }

  }

interface Ajustes {
    temaUrl: string;
    tema: string;
  }
