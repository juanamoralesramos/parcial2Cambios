import { Component, OnInit } from '@angular/core';
import { Receta } from './receta';
import { dataReceta } from './dataReceta';
import { RecetaService } from './receta.service';


@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
  constructor(private recetaService: RecetaService) { }

  recetas: Array<Receta> = [];
  average: number = 0;

  getRecetaList(){
    this.recetaService.getRecetas().subscribe(recetas => {
      this.recetas = recetas;
    })
    return dataReceta;
  }

  getAverageRecetas(){
    let length = 0;
    let sum = 0;
    this.recetaService.getRecetas().subscribe(recetas =>{
      length = recetas.length;
      recetas.forEach(receta => {
        sum += receta.calificacion;
      });
      this.average = sum/length;
    });
  }

  ngOnInit() {
    this.getRecetaList();
    this.getAverageRecetas();
  }

}
