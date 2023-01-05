import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounce, debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  //este debounce funciona cuando deja de escribir y manda la cadena como este
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();
  @Input() placeholder:string=''
  debouncer:Subject<string> = new Subject();

  termino:string ='';


  ngOnInit(): void {
      this.debouncer.pipe(debounceTime(300))//emita el valor cada 300 mms
      .subscribe(val =>{
          this.onDebounce.emit(val);
          console.log(val)
      })
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPrecionada(){
    this.debouncer.next( this.termino);
  }
}
