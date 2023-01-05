import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country, Idd } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor(private activateRoute:ActivatedRoute,
              private paisService:PaisService) { }

  ngOnInit(): void {
    //esta es la forma de hacerlo con RxJs SwitchMap
    this.activateRoute.params
      .pipe(
        switchMap(({id})=> this.paisService.getPaisByCode(id))
        ,tap(console.log)
        )
      .subscribe(pais=>this.pais = pais[0])

    //esta es la forma de suscribirse para cualquier cambo en el url y va conectado al app-routing.module y el param es el id que mandamos por ahi, lo capturamos y nos volvemos a suscribir para mandar ese id al metodo del service
    // this.activateRoute.params
    // .subscribe(({id})=>{
    //   console.log(id)
    //   this.paisService.getPaisByCode(id).subscribe(pais=>{
    //     console.log(pais)
    //   })
    // })
  }

}
