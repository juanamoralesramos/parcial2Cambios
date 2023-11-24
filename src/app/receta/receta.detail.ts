
import { Receta } from "./receta";


export class RecetaDetail extends Receta {

  constructor(
    id: number,
    nombre: string,
    descripcion: string, 
    dificultad: string,
    duracion: number,  
    ingrediente: string,
    categoria: string,
    imagen: string, 
    calificacion: number, 
    cantidad_opiniones: number, 
    autor_receta: string
  ) {
    super(id, nombre, descripcion, dificultad, duracion, ingrediente, categoria, imagen, calificacion, cantidad_opiniones, autor_receta)
  }
}