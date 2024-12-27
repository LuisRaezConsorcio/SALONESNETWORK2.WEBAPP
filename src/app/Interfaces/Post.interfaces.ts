export interface Post {
    id: number;
    name: string;
    pais: Pais[]
}

export interface Pais {

    id: number,
    name: string,
    seccion: Seccion[]

}

export interface Seccion {

    id: number,
    name: string,
   subseccion: Subseccion[]

}

export interface Subseccion {

    id: number,
    name: string

}


