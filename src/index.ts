

import express, { Request, Response } from 'express';
const app = express();
const port = 3000;
app.get('/', (req: Request, res: Response) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(port)



/*
//clases en TS
interface libros {
    nombre: string,
    autor: string
}


let libro:libros={
    nombre: "La Roza",
    autor: "juan"
}

class Usuario {

    private nombre: string;
    private apellido: string;
    private libros: libros[];
    private mascotas: string[];

    //constructor del objeto 
    constructor(nombre: string, apellido: string,libros: libros[], mascotas: string[]){

        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    //Devuelve el nombre completo
    getFullName():string{ return  `mi nombre es ${this.nombre} ${this.apellido}` }

    //Agrega una mascota al Array
    addMascotas(mascota:string):void{ this.mascotas.push(mascota) }

    //Ceunta la cantidad de mascotas en el Array
    countMascotas():number{ return this.mascotas.length }
    
    //Agrega un libro al Objeto de libros
    addBook(libro:libros):void{ this.libros.push(libro) }

    //Muestra solamente los nombres de los libros en un Array 
    getBooksName():string[]{
        let arrayNombresDeLibros = []

        for(let nombresLibro of this.libros){

            let nombres = nombresLibro.nombre
            arrayNombresDeLibros.push(nombres)
        }

        return arrayNombresDeLibros
    }
}


//ejemplos de asignacion de valores 
let perrito: String= "Firulais"

let edad: Number= 22

let verdad: boolean= true

let algo:any = "hola"

let perritos: string[]=["Perrito1","Perrito2"]

let edades: number[]= [8,9]

let verdades:boolean[]= [true, false]

let cosas:any[] =["hola",8]

let miObjeto:object ={
    nombre: "juan",
    edad: 19
}

let misObjetos:object[]=[
    {
        nombre: "pedro",
        edad: 25
    },
    {
        nombre: "ignacio",
        edad: 28
    }
]

let hacerCuenta =():number=>{
    return 1+1
}

let arrayDeCuentas =():number[]=>{
    return [5,6]
}

let darSaludo =():string=>{
    return "holaaaaaaa!!!!"
}

let darSaludos =():string[]=>{
    return ["holaa","hello"]
}

let devolverLaVerdad =():boolean=>{
    return true
}

let devolverVerdades =():boolean[]=>{
    return [true, false]
}

let noDevuelvenada =():void =>{
    console.log("hola gente")
}

let funcionQueRetornaVariasCosas=():any=>{
    return "holaa" + 155
}

let retornarUnaSuma=(num1:number,num2:number):number=>{
    return num1 + num2
}




//Promesas

const db = [
    { id: 1, nombre: 'Romina'},
    { id: 2, nombre: 'Andres'},
    { id: 3, nombre: 'Gabriel'},
    { id: 4, nombre: 'Damian'},
]

const buscarId = (id:any):Promise<any> => {

    const res:any = db.find(el => el.id === id);

    const promesa:any = new Promise(function(resuelve, rechaza){
        setTimeout(() => {
            if(res){
                resuelve(res)
            }else{
                rechaza(`No se pudo encontrar la persona con el id ${id}`)
            }
        }, 2000);
    })

    return promesa

}


const app = async () => {


    console.log('------INICIO DE APLICACION');

    try {

        const finalizado:object= Promise.all([

            await buscarId(2),
            await buscarId(3)

        ]);

        const resultado:object = await finalizado
        console.log(resultado);


        const p1:object = await buscarId(2)
        console.log(p1);

        const p2:object =  await buscarId(3)
        console.log(p2);
        
    } catch (error) {
        console.error('-----------', error)
    }


    
}


app();
console.log('------- FIN');
console.log('-----OTRO FIN');

const sumar = (a:any,b:any):any => a + b
console.log(sumar(3,4));



*/
//ejemplos 

/*
const persona = new Usuario ('Federico', 'Gomez', [{nombre:'El Ruso',autor:'Una persona'}],['nero'])
console.log('Nombre completo')
console.log(persona.getFullName())

console.log('Cantidad de mascotas inicial')
console.log(persona.countMascotas())
persona.addMascotas('canario')

console.log('Cantidad de mascotas final')
console.log(persona.countMascotas())

console.log('Nombres de libros inical')
console.log(persona.getBooksName())
persona.addBook({nombre:'El autor',autor:'Desconocido'})

console.log('Nombres de libros final')
console.log(persona.getBooksName())

*/