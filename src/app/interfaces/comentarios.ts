export interface Comentario{
    id?: number;
    titulo:string;
    autor:string;
    texto:string;
    fechaCreacion: Date
}

export interface DatosPersonales{
    Identificacion: number;
    nombre:string;
    apellido:string;
    direccion:string;
    email:string;
    telefono:string;
}