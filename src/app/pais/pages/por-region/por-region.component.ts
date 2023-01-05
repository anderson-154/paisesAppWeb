import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {
  termino:string = '';
  hayError:boolean=false;
  paises: Country[]=[];

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.hayError=false;
    this.termino = termino;

    console.log(this.termino)
    
    this.paisService.buscarPaisRegion(this.termino)
    .subscribe({next:(pais)=>{
      this.paises= pais;
    }, error:(err)=>{
      this.hayError = true;
      this.paises = [];
    }
    })
  }

  sugerencias(event:string){

  }



}
