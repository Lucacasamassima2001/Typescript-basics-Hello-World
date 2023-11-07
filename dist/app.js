// String, number, bool:
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// let prova1:number = 5
// let prova2:string = 'ciao'
// let prova3:boolean = true
// function somma1(a: number,b : number){
//     return a + b
// }
// console.log(somma1(3, 5))
// --------
// Object, array, tuple:
// Object
// let persona: {
//     nome: string,
//     cognome: string,
//     eta: number,
//     indirizzo: {
//         via: string,
//         cap: number,
//         citta: string
//     }
// }
// persona = {
//     nome: 'Luca',
//     cognome: 'Rossi',
//     eta: 5,
//     indirizzo: {
//         via: 'via della vittoria',
//         cap: 73256,
//         citta: 'Roma'
//     }
// }
// Array
// const array: number[] = [1,2,3]
// const array1: string[] = ['ciao', 'tutti']
// const array2: any[] = [1,2,true,'']
// Tuple, array con lunghezza fissa
// const tuple : [number, number, string] = [1,2, 'Ciao']
// Enum, any, union, custom type:
// il tipo any accetta tutti i tipi di dati
// let array: [any, number] = ['5', 5]
// il tipo union è un unione di più elementi
// let prova: number | boolean | any[]  = [5, 'ciao']
// il tipo Custom type
// type Persona = {
//         nome: string,
//         cognome: string
// }
// let persona: Persona
// persona = {
//          nome: 'Luca',
//          cognome: 'Rossi',
//      }
//      function trovaPersona(persona: Persona){}
// il tipo enum ci semplifica la denominazione delle variabili tramite delle "etichette"
// enum Ruolo {
//     ADMIN = 'admin',
//     USER = 'user',
//     GUEST = 'guest'
// }
// const Persona = {
//     nome: 'Luca',
//     cognome: 'Rossi',
//     ruolo: Ruolo.ADMIN
// }
// Functions
// è possibile assegnare dei parametri di default e typescript ne riconoscerà il tipo assegnandolo correttamente e consente di specificare il tipo di ritorno es. number
// function sum1(num: number, num1 =  3):number {
//     return num + num1
// }
// console.log(sum1(3))
// Compilatore, tramite il comando tsc app.ts -w , installiamo un watcher che cambia il file js ad ogni modifica
// classi
// abstract class Persona {
//   constructor(private nome: string, protected cognome: string) {}
//   abstract presenta(): void
//   saluta(persona: Persona): void {
//     console.log(`ciao ${persona.nome} ${persona.cognome}, molto piacere`);
//   }
// }
// class Student extends Persona {
//   constructor(
//     private materiapreferita: string,
//     cognome: string,
//     nome: string
//     ) {
//     super(nome, cognome);
//   }
//   presenta(): void{
//     console.log(`Sono lo studente ${this.cognome}`);
//   }
// }
// singleton
// class Preside{
//     private static instance: Preside;
//     private constructor(private nome:string, private cognome:string){}
//     static getInstance(){
//         if(Preside.instance){
//             return this.instance
//         }
//         this.instance = new Preside('Gianluca', 'Gialli')
//         return this.instance
//     }
//     presenta(){
//         console.log(`buongiorno sono il preside ${this.nome} ${this.cognome}`)
// }
// }
// Preside.getInstance().presenta()
// interface, le interfacce estendono le funzionalità delle classi
// es 1 
// interface Prova{
//     readonly nome:string
//     saluta():void
// }
// class x implements Prova{
//   nome: string;
//   constructor(nome: string){
//     this.nome = nome
//   }
//   saluta(): void {
//     console.log('ciao')  }
// }
// interface Internet{
//   ip: string
//   connessione():void}
// abstract class Dispositivo{
//   constructor(protected nome:string, protected anno:number){}
//   abstract accendi():void
//   abstract spegni():void
// }
// class Telefono extends Dispositivo implements Internet{
//   ip: string;
//   constructor(nome: string, anno:number, ip: string){
//     super(nome, anno)
//     this.ip = ip
//   }
//   connessione(): void {
//     throw new Error("Method not implemented.");
//   }
//   accendi(): void {
//       console.log('il telefono si accende')
//   }
//   spegni(): void {
//       console.log('il telefono si spegne')
//   }
// }
// class Smartphone extends Dispositivo implements Internet{
//   ip: string;
//   constructor(nome: string, anno:number, ip: string){
//     super(nome, anno)
//     this.ip = ip
//   }
//   connessione(): void {
//     throw new Error("Method not implemented.");
//   }
//   accendi(): void {
//       console.log('lo smartphone si accende')
//   }
//   spegni(): void {
//       console.log('lo smartphone si spegne')
//   }
// }
// class Computer extends Dispositivo implements Internet{
//   ip: string;
//   constructor(nome: string, anno:number, ip: string){
//     super(nome, anno)
//     this.ip = ip
//   }
//   connessione(): void {
//     throw new Error("Method not implemented.");
//   }
//   accendi(): void {
//       console.log('il Computer si accende')
//   }
//   spegni(): void {
//       console.log('il Computer si spegne')
//   }
// }
// es 2 
// interface x{
//   nome: string
// }
// interface y extends x{
//   cognome: string
//   respira():void
// }
// interface z{
// telefono: string
// saluta():void
// }
// interface w extends y, z{
//   via: string
//   mangia():void
// }
// class Persona implements w{
//   via: string
//   cognome: string
//   nome: string
//   telefono: string
//   constructor(via:string, cognome: string, nome: string, telefono:string){
//     this.via = via
//     this.cognome = cognome
//     this.nome = nome
//     this.telefono = telefono
//   }
//   mangia(): void {
//     throw new Error("Method not implemented.");
//   }
//   respira(): void {
//     throw new Error("Method not implemented.");
//   }
//   saluta(): void {
//     throw new Error("Method not implemented.");
//   }
// }
// aggiungere <T> vuol dire che la funzione accetta dati di tipo generico ma riempie l'array con lo stesso tipo al momento dell'assegnazione, tramite extends si possono aggiungere tipi di dati supportati <T extends number | boolean ecc>
// const arr: Array<string> = ['ciao', 'a tutti']
// function creaArray<T>(items: T[]):T[] {
//   return new Array().concat(items)
// }
// const arr1 = creaArray<number>([1,2,3,4])
// const arr2 = creaArray<string>(['a', 'b', 'c', 'd'])
// class Prova<T>{
//   private list:T[] = []
//   aggiungiItem(item: T){
//     this.list.push(item)
//   }
//   rimuoviItem(item: T){
//     this.list.splice(this.list.indexOf(item,1))
//   }
// }
// const listaStringhe = new Prova<string>()
// listaStringhe.aggiungiItem('luca')
// listaStringhe.aggiungiItem('marco')
// listaStringhe.aggiungiItem('anna')
// const listaNumeri = new Prova<number>()
// listaNumeri.aggiungiItem(3243)
// Decorators(funzioni con @)
// es decorator semplice, lancia la classe all'avvio 
// function Logger(constructor: any){
//   console.log('mando a schermo')
//   console.log(constructor)
// }
// @Logger
// class Prova{
//   constructor(){
//     console.log('sto creando oggetto prova')
//   }
// }
// const prova = new Prova()
// es decorator factory, usare un decorator per più classi
// function Logger(messaggio: string){
//   return function(constructor: any){
//     console.log(messaggio)
//     console.log(constructor)
//   }
// }
// @Logger('ciao sono il logger della classe prova')
// class Prova{
//   constructor(){
//     console.log('sto creando oggetto prova')
//   }
// }
// @Logger('ciao sono il logger della classe franco')
// class Franco{
//   constructor(){
//     console.log('sto creando oggetto Franco')
//   }
// }
// Decorator template
function createElemento(elemento, id, text) {
    return function (constructor) {
        const container = document.getElementById(id);
        const text1 = new constructor(text);
        if (container) {
            container.innerHTML = elemento;
            container.querySelector('h1').textContent = text1.text;
        }
    };
}
let Text1 = class Text1 {
    constructor(text) {
        this.text = text;
        console.log('sto creando oggetto Hello world');
    }
};
Text1 = __decorate([
    createElemento('<h1></h1>', 'container', 'Hello World with Typescript')
], Text1);
function createElemento1(elemento, id, text) {
    return function (constructor) {
        const container1 = document.getElementById(id);
        const text2 = new constructor(text);
        if (container1) {
            container1.innerHTML = elemento;
            container1.querySelector('h2').textContent = text2.text;
        }
    };
}
let Text2 = class Text2 {
    constructor(text) {
        this.text = text;
        console.log('sto creando oggetto Hello world');
    }
};
Text2 = __decorate([
    createElemento1('<h2></h2>', 'container1', 'Hello World with Typescript')
], Text2);
function createElemento2(elemento, id, text) {
    return function (constructor) {
        const container2 = document.getElementById(id);
        const text3 = new constructor(text);
        if (container2) {
            container2.innerHTML = elemento;
            container2.querySelector('h3').textContent = text3.text;
        }
    };
}
let Text3 = class Text3 {
    constructor(text) {
        this.text = text;
        console.log('sto creando oggetto Hello world');
    }
};
Text3 = __decorate([
    createElemento2('<h3></h3>', 'container2', 'Hello World with Typescript')
], Text3);
// --------------- 
// Typescript import file
// è possibile importare functions, interface, class
import { addizione, sottrazione, moltiplicazione } from './functions.js';
console.log(addizione(5, 5));
console.log(sottrazione(5, 5));
console.log(moltiplicazione(5, 5));
