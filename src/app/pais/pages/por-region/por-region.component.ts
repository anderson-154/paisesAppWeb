import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right:5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['america','africa','asia','europ','oceania']
  regionActiva:string='';

  termino:string = '';
  hayError:boolean=false;
  paises: Country[]=[];

   constructor(private paisService:PaisService) { }

   activarRegion(region:string){
    if(region === this.regionActiva){return;}
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarPaisRegion(region)
      .subscribe(paises=>{
        this.paises = paises
      })
  }

  getClaseCss(region:string):string{
    return (region === this.regionActiva)? 'btn btn-primary': 'btn btn-outline-primary';
  }

  
  // sugerencias(event:string){

  // }



}
