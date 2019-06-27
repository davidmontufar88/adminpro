import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', { read: false, static: false } ) txtProgress: ElementRef;

  @Input('nombre') leyenda: string;
  @Input('prog') progreso: number;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();


  constructor() {
    console.log('leyenda' + this.leyenda);
    console.log('progreso' + this.progreso);
  }

  ngOnInit() {
  }

  onModelChange( nuevoValor: number) {

    if ( nuevoValor >= 100) {
      this.progreso = 100;
    } else if ( nuevoValor <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(nuevoValor);
  }

  incrementar( valor: number ) {

    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    }




}
