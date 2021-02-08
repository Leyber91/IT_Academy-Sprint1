//CONSTANTS CREATED
const exerciseSection = document.createElement('div')
const displayer = document.querySelector('.displayer')
const exerciseStatement = document.createElement('p')
const header = document.createElement('h2')
header.textContent= 'Tasca 4';
displayer.appendChild(header);


// EXERCISE 1 CODE
const exerciseSection1 = document.createElement('div')
let btnEx1 = document.createElement('button')
btnEx1.className = 'exercise1'
btnEx1.textContent = 'Exercise 1: Luis'

//DEFINE FUNCTION
let exercise1 = (a, b) => exerciseSection1.textContent = a + b
console.log(exercise1)
exercise1(2,3)

//DEFINE EXERCISE 1 TITLE AND STATEMENT
let Ex1Title = document.createElement('h2')
Ex1Title.className = 'title'
Ex1Title.textContent = 'Exercise 1'
let Ex1Statement = document.createElement('p')
Ex1Statement.className = 'statement'
Ex1Statement.textContent = `Imprimir per pantalla el resultat d'una arrow function autoinvocable que sumi dos nombres.`
//APPEND EXERCISE 1 FUNCTION
displayer.appendChild(Ex1Title)
displayer.appendChild(Ex1Statement)
displayer.appendChild(exerciseSection1)


// EXERCISE 2 CODE
let btnEx2 = document.createElement('button')
btnEx2.className = 'exercise2'
btnEx2.textContent = 'Exercise 2'
//DEFINE FUNCTION
let exercise2 = (x) => {
//INSERT CODE HERE TO EXECUJE

let object = { a : x}
console.log(object)
return object

}
btnEx2.addEventListener('click', exercise2)
console.log(exercise2(42))

//DEFINE EXERCISE 2 TITLE AND STATEMENT
let Ex2Title =document.createElement('h2')
Ex2Title.className = 'title'
Ex2Title.textContent = 'Exercise 2'
let Ex2Statement = document.createElement('p')
Ex2Statement.className = 'statement'
Ex2Statement.textContent = `Crear una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.`
//APPEND EXERCISE 2 FUNCTION
displayer.appendChild(Ex2Title)
displayer.appendChild(Ex2Statement)
displayer.appendChild(btnEx2)



// EXERCISE 3 CODE
let btnEx3 = document.createElement('button')
let divEx3 = document.createElement('div')
btnEx3.className = 'exercise3'
btnEx3.textContent = 'Exercise 3'
//DEFINE FUNCTION
let exercise3 = function() {
//INSERT CODE HERE TO EXECUTE
class Persona{
    constructor(nom) {
      this.nom = nom;
    }
    decirNombre(){
        console.log(this.nom)
    }
  }
  let me = 'myself'
  let yoMismo = new Persona(me)
  yoMismo.decirNombre()

}
btnEx3.addEventListener('click', exercise3)
//DEFINE EXERCISE 3 TITLE AND STATEMENT
let Ex3Title =document.createElement('h2')
Ex3Title.className = 'title'
Ex3Title.textContent = 'Exercise 3'
let Ex3Statement = document.createElement('p')
Ex3Statement.className = 'statement'
Ex3Statement.textContent = `Crear una classe Persona que rebi un paràmetre 'nom' a l'ésser creat. La classe inclourà un mètode decirNombre que imprimeixi per consola el paràmetre 'Nom'. Invocar el mètode decirNombre des de fora de la classe.`
//APPEND EXERCISE 3 FUNCTION
displayer.appendChild(Ex3Title)
displayer.appendChild(Ex3Statement)
displayer.appendChild(btnEx3)



// EXERCISE 4 CODE
let btnEx4 = document.createElement('button')
let divEx4 = document.createElement('div')
btnEx4.className = 'exercise4'
btnEx4.textContent = 'Exercise 4'
// DEFINE THE CLASS
class Planet{
    constructor(name, position, type) {
      this.name = name;
      this.position = position;
      this.type = type;
    }
    nameIt(){
        console.log(this.name)
    }
    putIt(){
        console.log(this.position)
    }
    typeIt(){
        console.log(this.type)
    }
    fullReport(){
        console.log(`This planet is named ${this.name}, is the number ${this.position} from the Sun and is a ${this.type} type planet`)
    }
  }


//DEFINE FUNCTION
let exercise4 = function() {
//INSERT CODE HERE TO EXECUTE
let Earth = new Planet('Earth', 3 , 'rocky')
let Jupiter = new Planet('Jupiter', 5 , 'gas')
let Pluto = new Planet('Pluto', 9 , 'dwarf')

console.log(Earth.nameIt())
console.log(Jupiter.putIt())
console.log(Jupiter.typeIt())
console.log(Pluto.fullReport())
}
btnEx4.addEventListener('click', exercise4)
//DEFINE EXERCISE 4 TITLE AND STATEMENT
let Ex4Title =document.createElement('h2')
Ex4Title.className = 'title'
Ex4Title.textContent = 'Exercise 4'
let Ex4Statement = document.createElement('p')
Ex4Statement.className = 'statement'
Ex4Statement.textContent = `Crear una function creadora d'objectes, abstraient la definició de les classes. Invocar-amb diferents definicions.`
//APPEND EXERCISE 4 FUNCTION
displayer.appendChild(Ex4Title)
displayer.appendChild(Ex4Statement)
displayer.appendChild(btnEx4)



