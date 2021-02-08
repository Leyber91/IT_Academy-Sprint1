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
btnEx5.textContent = 'Pon tu nota'
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

// EXERCISE 6 CODE
let btnEx6= document.createElement('button')
let divEx6 = document.createElement('div')
let textoEx6 = document.createElement('p')
textoEx6.textContent = 'Me estas poniendo azul'
textoEx6.id = 'texto'
btnEx6.className = 'exercise6'
btnEx6.textContent = 'Cambiazo'
//DEFINE FUNCTION
let exercise6 = () => {
//INSERT CODE HERE TO EXECUTE

    let x = document.getElementById('texto').innerHTML;
    let y = x.replace( 'azul' , 'verde')
    document.getElementById('texto').innerHTML = y

}
btnEx6.addEventListener('click', exercise6)
//DEFINE EXERCISE 6 TITLE AND STATEMENT
let Ex6Title =document.createElement('h2')
Ex6Title.className = 'title'
Ex6Title.textContent = 'Exercise 6'
let Ex6Statement = document.createElement('p')
Ex6Statement.className = 'statement'
Ex6Statement.textContent = `Reemplaça la paraula blau per la paraula verd del següent text Tinc un cotxe de color blau.`
//APPEND EXERCISE 6 FUNCTION
displayer.appendChild(Ex6Title)
displayer.appendChild(Ex6Statement)
divEx6.appendChild(textoEx6)
divEx6.appendChild(btnEx6)
displayer.appendChild(divEx6)

// EXERCISE 6_2 CODE
let btnEx6_2= document.createElement('button')
let divEx6_2 = document.createElement('div')
let textoEx6_2 = document.createElement('p')
textoEx6_2.textContent = 'Me estas poniendo azul'
textoEx6_2.id = 'texto2'
btnEx6_2.className = 'exercise6_2'
btnEx6_2.textContent = 'Cambiazo'
//DEFINE FUNCTION
let exercise6_2 = () => {
//INSERT CODE HERE TO EXECUTE

    let x = document.getElementById('texto').innerHTML;
    let y = x.replace( /o/g , 'u') //el comando /o/ remplazo todas las instancias
    document.getElementById('texto2').innerHTML = y

}
btnEx6_2.addEventListener('click', exercise6_2)
//DEFINE EXERCISE 6_2 TITLE AND STATEMENT
let Ex6_2Title =document.createElement('h2')
Ex6_2Title.className = 'title'
Ex6_2Title.textContent = 'Exercise 6_2'
let Ex6_2Statement = document.createElement('p')
Ex6_2Statement.className = 'statement'
Ex6_2Statement.textContent = `Després intenta fer-ho remplaçant les o per les u.`
//APPEND EXERCISE 6_2 FUNCTION
displayer.appendChild(Ex6_2Title)
displayer.appendChild(Ex6_2Statement)
divEx6_2.appendChild(textoEx6_2)
divEx6_2.appendChild(btnEx6_2)
displayer.appendChild(divEx6_2)


// EXERCISE 7 CODE
let btnEx7= document.createElement('button')
let divEx7 = document.createElement('div')
btnEx7.className = 'exercise7'
btnEx7.textContent = 'Muestrame'
//DEFINE FUNCTION
let exercise7 = () => {
//INSERT CODE HERE TO EXECUTE
let array = ['taula', 'cadira', 'ordinador', 'libreta']
for (let i = 0; i < array.length ; i++){
    let br = document.createElement('br')
    divEx7.append(br)
    let x = `El objeto ${array[i]} està en la posición ${i}`
    console.log(x)
    let text = document.createElement('p').innerHTML = x
    divEx7.append(text)
}
}

btnEx7.addEventListener('click', exercise7)
//DEFINE EXERCISE 7 TITLE AND STATEMENT
let Ex7Title =document.createElement('h2')
Ex7Title.className = 'title'
Ex7Title.textContent = 'Exercise 7'
let Ex7Statement = document.createElement('p')
Ex7Statement.className = 'statement'
Ex7Statement.textContent = `Donat el seguit llistat d'objectes 'taula', 'cadira', 'ordinador', 'libreta', per un bucle que mostri per pantalla cada objecte i la seva posició al llistat.`
//APPEND EXERCISE 7 FUNCTION
displayer.appendChild(Ex7Title)
displayer.appendChild(Ex7Statement)
divEx7.appendChild(btnEx7)
displayer.appendChild(divEx7)


// EXERCISE 8 CODE
let divEx8 = document.createElement('div')
let pad = document.createElement('div')
let inputE8_x = document.createElement('input')
let inputE8_y = document.createElement('input')
let sumarbtn = document.createElement('button')
let restarbtn = document.createElement('button')
let multiplicarbtn = document.createElement('button')
let dividirbtn = document.createElement('button')
let screen = document.createElement('div')
screen.id = 'screen'
sumarbtn.id = 'sumar'
restarbtn.id = 'restar'
multiplicarbtn.id = 'multiplicar'
dividirbtn.id = 'dividir'
sumarbtn.textContent = '+'
restarbtn.textContent = '-'
multiplicarbtn.textContent = '*'
dividirbtn.textContent = '/'
inputE8_x.id = 'valueX'
inputE8_y.id = 'valueY'
pad.id = 'pad'
//DEFINE FUNCTION
let calculator = function() {
//INSERT CODE HERE TO EXECUTE
    console.log(this)
    //if (operator === 'x')
    let x = parseInt(document.getElementById('valueX').value)
    let y = parseInt(document.getElementById('valueY').value)
    let operator = this.textContent

    if (operator === '+'){screen.textContent = x + y}
    if (operator === '-'){screen.textContent = x - y}
    if (operator === '*'){screen.textContent = x * y}
    if (operator === '/'){
        if( y != 0){
        screen.textContent = x / y
    } else {
        alert('no puedes dividir por 0')
    }}

    }

sumarbtn.addEventListener('click', calculator)
restarbtn.addEventListener('click', calculator)
multiplicarbtn.addEventListener('click', calculator)
dividirbtn.addEventListener('click', calculator)
//DEFINE EXERCISE 8 TITLE AND STATEMENT
let Ex8Title =document.createElement('h2')
Ex8Title.className = 'title'
Ex8Title.textContent = 'Exercise 8'
let Ex8Statement = document.createElement('p')
Ex8Statement.className = 'statement'
Ex8Statement.innerHTML = `<pre>Crea una funció anomenada calculadora que tingui com a entrada els següents 
paràmetres: operador, valor1 i valor2. Estructura de la funció que faci sumes, restes 
i multiplicacions. El resultat haurà de ser mostrar per pantalla.</pre>`
//APPEND EXERCISE 8 FUNCTION
displayer.appendChild(Ex8Title)
displayer.appendChild(Ex8Statement)
pad.appendChild(screen)
pad.appendChild(inputE8_x)
pad.appendChild(inputE8_y)
divEx8.appendChild(sumarbtn)
divEx8.appendChild(restarbtn)
divEx8.appendChild(multiplicarbtn)
divEx8.appendChild(dividirbtn)
pad.appendChild(divEx8)
displayer.appendChild(pad)


