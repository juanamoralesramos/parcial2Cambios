import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaComponent } from './receta.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecetaComponent],
  exports: [RecetaComponent]
})
export class RecetaModule { }
