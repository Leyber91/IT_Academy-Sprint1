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



// EXERCISE 3 CODE
let btnEx3 = document.createElement('button')
let divEx3 = document.createElement('div')
btnEx3.className = 'exercise3'
btnEx3.textContent = 'Exercise 3'
//DEFINE FUNCTION
let exercise3 = function() {
//INSERT CODE HERE TO EXECUTE
let nom = 'Luis'
let cognom = 'Blanco Rodriguez'
console.log(`Mi nombre es : ${nom}`)
console.log(`Mis apellidos son : ${cognom}`)

}
btnEx3.addEventListener('click', exercise3)
//DEFINE EXERCISE 3 TITLE AND STATEMENT
let Ex3Title =document.createElement('h2')
Ex3Title.className = 'title'
Ex3Title.textContent = 'Exercise 3'
let Ex3Statement = document.createElement('p')
Ex3Statement.className = 'statement'
Ex3Statement.textContent = `Crea una variable que contingui el teu nom i un altre que contingui el teu cognom.`
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
let exercise4 = function() {
//INSERT CODE HERE TO EXECUTE
let a = 42
let b = 23
console.log(`La suma de 42 y 23 es : ${a + b}`)
}
btnEx4.addEventListener('click', exercise4)
//DEFINE EXERCISE 4 TITLE AND STATEMENT
let Ex4Title =document.createElement('h2')
Ex4Title.className = 'title'
Ex4Title.textContent = 'Exercise 4'
let Ex4Statement = document.createElement('p')
Ex4Statement.className = 'statement'
Ex4Statement.textContent = `Crea dos variables amb dos números i fes una suma entre ells.`
//APPEND EXERCISE 4 FUNCTION
displayer.appendChild(Ex4Title)
displayer.appendChild(Ex4Statement)
displayer.appendChild(btnEx4)


// EXERCISE 5 CODE
let btnEx5= document.createElement('button')
let divEx5 = document.createElement('div')
let inputEx5 = document.createElement('input')
inputEx5.id = 'nota'
btnEx5.className = 'exercise5'
btnEx5.textContent = 'Submite tu nota'
//DEFINE FUNCTION
let exercise5 = () => {
//INSERT CODE HERE TO EXECUTE

    let x = document.getElementById('nota').value
    if (x >= 5 && x <= 10){
        return alert(`'Enhorabuena, has aprovado con un ${x}`)
    } else if (x >= 5 ){
        return alert(`'Va a ser que no has aprovado, obtuviste ${x}`)
    } else {
        return alert(`${x} no es una nota real`)
    }
}

btnEx5.addEventListener('click', exercise5)

//btnEx5__1.addEventListener('click', exercise5(btnEx5__1.textContent))
//btnEx5__2.addEventListener('click', exercise5(btnEx5__1.textContent))
//btnEx5__3.addEventListener('click', exercise5(12))
//DEFINE EXERCISE 5 TITLE AND STATEMENT
let Ex5Title =document.createElement('h2')
Ex5Title.className = 'title'
Ex5Title.textContent = 'Exercise 5'
let Ex5Statement = document.createElement('p')
Ex5Statement.className = 'statement'
Ex5Statement.textContent = `Crea una variable nota_examen juntament amb un alert que ens digui si l’examen ha estat aprovat o no juntament amb la nota.`
//APPEND EXERCISE 5 FUNCTION
displayer.appendChild(Ex5Title)
displayer.appendChild(Ex5Statement)
divEx5.appendChild(inputEx5)
divEx5.appendChild(btnEx5)
displayer.appendChild(divEx5)

