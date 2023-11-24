export class Receta {
    id: number; 
    nombre: string;
    descripcion: string;
    dificultad: string;
    duracion: number;
    ingrediente: string;
    categoria: string;
    imagen: string;
    calificacion: number;
    cantidad_opiniones: number;
    
    autor_receta: string
   
    public constructor(id: number,
                    nombre: string,
                    descripcion: string, 
                    dificultad: string,
                    duracion: number,  
                    ingrediente: string,
                    categoria: string,
                    imagen: string, 
                    calificacion: number, 
                    cantidad_opiniones: number, 
                    autor_receta: string) {
            this.id = id
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.dificultad = dificultad;
            this.duracion = duracion;
            this.ingrediente = ingrediente;
            this.categoria  = categoria;
            this.imagen = imagen;
            this.calificacion = calificacion;
            this.cantidad_opiniones = cantidad_opiniones;
            this.autor_receta = autor_receta;
            }
   }