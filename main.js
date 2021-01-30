//CONSTANTS CREATED
const exerciseSection = document.createElement('div')
const displayer = document.querySelector('.displayer')
const exerciseStatement = document.createElement('p')


// EXERCISE 1 CODE
let btnEx1 = document.createElement('button')
btnEx1.className = 'exercise1'
btnEx1.textContent = 'Exercise 1'
//DEFINE FUNCTION
let exercise1 = function() {
    console.log('We are executing exercise 1')
    }
btnEx1.addEventListener('click', exercise1)
//DEFINE EXERCISE 1 TITLE AND STATEMENT
let Ex1Title = document.createElement('h2')
Ex1Title.className = 'title'
Ex1Title.textContent = 'Exercise 1'
let Ex1Statement = document.createElement('p')
Ex1Statement.className = 'statement'
Ex1Statement.textContent = `L'exercici consisteix a crear un fitxer anomenat ciber.html i mostrar per consola un 'Hola mundo' (per activar la consola ->; F12). Pista: Console.log()`
//APPEND EXERCISE 1 FUNCTION
displayer.appendChild(Ex1Title)
displayer.appendChild(Ex1Statement)
displayer.appendChild(btnEx1)


// EXERCISE 2 CODE
let btnEx2 = document.createElement('button')
btnEx2.className = 'exercise2'
btnEx2.textContent = 'Exercise 2'
//DEFINE FUNCTION
let exercise2 = function() {
//INSERT CODE HERE TO EXECUJE
    alert('¡¡¡ Soy Luis !!!')
    }
btnEx2.addEventListener('click', exercise2)
//DEFINE EXERCISE 2 TITLE AND STATEMENT
let Ex2Title =document.createElement('h2')
Ex2Title.className = 'title'
Ex2Title.textContent = 'Exercise 2'
let Ex2Statement = document.createElement('p')
Ex2Statement.className = 'statement'
Ex2Statement.textContent = `Crea un alert que mostri el teu nom:`
//APPEND EXERCISE 2 FUNCTION
displayer.appendChild(Ex2Title)
displayer.appendChild(Ex2Statement)
displayer.appendChild(btnEx2)






