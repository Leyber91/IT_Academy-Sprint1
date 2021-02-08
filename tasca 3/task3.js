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
exercise1(2,3)

//DEFINE EXERCISE 1 TITLE AND STATEMENT
let Ex1Title = document.createElement('h2')
Ex1Title.className = 'title'
Ex1Title.textContent = 'Exercise 1'
let Ex1Statement = document.createElement('p')
Ex1Statement.className = 'statement'
Ex1Statement.textContent = `Crea un array amb el teu nom on cada posició correspongui a una lletra. Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres.`
//APPEND EXERCISE 1 FUNCTION
displayer.appendChild(Ex1Title)
displayer.appendChild(Ex1Statement)
displayer.appendChild(exerciseSection1)


// EXERCISE 2 CODE
let btnEx2 = document.createElement('button')
btnEx2.className = 'exercise2'
btnEx2.textContent = 'Exercise 2'
//DEFINE FUNCTION
let exercise2 = function() {
//INSERT CODE HERE TO EXECUJE
let nom = 'Luis'
let primerCognom = 'Blanco'
let segonCognom = 'Rodriguez'

console.log( ` Mi nombre es ${nom}, mi primer apellido es ${primerCognom} y mi segundo ${segonCognom}`)
}
btnEx2.addEventListener('click', exercise2)
console.log(`Por donde empiezo... ${exercise2()}`)
//DEFINE EXERCISE 2 TITLE AND STATEMENT
let Ex2Title =document.createElement('h2')
Ex2Title.className = 'title'
Ex2Title.textContent = 'Exercise 2'
let Ex2Statement = document.createElement('p')
Ex2Statement.className = 'statement'
Ex2Statement.textContent = `Imprimir el nom i cognoms de l'usuari, Invocar la funció mitjançant template literals`
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
let arrayOfFunctions = []
for (let i = 0; i < 10 ; i++){
    arrayOfFunctions[i] = function() {
        for (let j = 0; j < 10 ; j++){
        // and store them in funcs
        console.log(`Counter${i}: ` + j); // each should log its value.
    }};
    }
    for (let i = 0; i < 10; i++) {
        arrayOfFunctions[i](); // and now let's run each one to see
      }
}
btnEx3.addEventListener('click', exercise3)
//DEFINE EXERCISE 3 TITLE AND STATEMENT
let Ex3Title =document.createElement('h2')
Ex3Title.className = 'title'
Ex3Title.textContent = 'Exercise 3'
let Ex3Statement = document.createElement('p')
Ex3Statement.className = 'statement'
Ex3Statement.textContent = `Crea una matriu de deu funcions i empleni-la mitjançant un bucle. Cada funció comptarà del 0-9 imprimint-ho per pantalla. Invoqui cada funció de l'array iterativament. Haurà d'imprimir-se per pantalla el compte de 0-9 deu vegades`
//APPEND EXERCISE 3 FUNCTION
displayer.appendChild(Ex3Title)
displayer.appendChild(Ex3Statement)
displayer.appendChild(btnEx3)


// EXERCISE 4 CODE
let btnEx4 = document.createElement('button')
let divEx4 = document.createElement('div')
btnEx4.className = 'exercise4'
btnEx4.textContent = 'Exercise 4'
//DEFINE FUNCTION
let exercise4 = function(user) {
    console.log(`Your username is ${user}`)
}
exercise4('Leyber91')
//DEFINE EXERCISE 4 TITLE AND STATEMENT
let Ex4Title =document.createElement('h2')
Ex4Title.className = 'title'
Ex4Title.textContent = 'Exercise 4'
let Ex4Statement = document.createElement('p')
Ex4Statement.className = 'statement'
Ex4Statement.textContent = `Crear una funció anònima autoinvocable (igualada a una variable) que imprimeixi per pantalla el nom d'usuari rebut com a paràmetre`
//APPEND EXERCISE 4 FUNCTION
displayer.appendChild(Ex4Title)
displayer.appendChild(Ex4Statement)
