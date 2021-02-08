//CONSTANTS CREATED
const exerciseSection = document.createElement('div')
const displayer = document.querySelector('.displayer')
const exerciseStatement = document.createElement('p')
const header = document.createElement('h2')
header.textContent= 'Tasca 2';
displayer.appendChild(header);


// EXERCISE 1 CODE

let btnEx1 = document.createElement('button')
btnEx1.className = 'exercise1'
btnEx1.textContent = 'Exercise 1: Luis'
//DEFINE FUNCTION
let exercise1 = function() {
    let nom = 'Luis'
    let nomArray = nom.split('')
    console.log(nomArray)
    for (let i = 0; i < nomArray.length ; i++){
        console.log(nomArray[i])
    }}
btnEx1.addEventListener('click', exercise1)
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
displayer.appendChild(btnEx1)


// EXERCISE 2 CODE
let btnEx2 = document.createElement('button')
btnEx2.className = 'exercise2'
btnEx2.textContent = 'Exercise 2: Leyber91'
//DEFINE FUNCTION
let exercise2 = function() {
//INSERT CODE HERE TO EXECUJE
    let user = 'LEYBER91'
    let userArray = user.split('')
    console.log(userArray)
    for (let i = 0; i < userArray.length ; i++){
       if(userArray[i] === 'A' ||userArray[i] === 'E' ||userArray[i] === 'I' ||userArray[i] === 'O' ||userArray[i] === 'U' ){
        console.log(`He trobat la VOCAL: ${userArray[i]} `)
       } else if (userArray[i] < 10){
            console.log(`Els noms de persona no tenen número ${userArray[i]}, pero els users si.`)
       } else {
            console.log(`He trobat la CONSONANT: ${userArray[i]} `)
       }
    }}
btnEx2.addEventListener('click', exercise2)
//DEFINE EXERCISE 2 TITLE AND STATEMENT
let Ex2Title =document.createElement('h2')
Ex2Title.className = 'title'
Ex2Title.textContent = 'Exercise 2'
let Ex2Statement = document.createElement('p')
Ex2Statement.className = 'statement'
Ex2Statement.textContent = `Afegeix reconeixer vocals, consonants y números`
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
    const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
    let user = 'LEYBER91'
    let userArray = user.split('')
    console.log(countOccurrences(userArray))
}
btnEx3.addEventListener('click', exercise3)
//DEFINE EXERCISE 3 TITLE AND STATEMENT
let Ex3Title =document.createElement('h2')
Ex3Title.className = 'title'
Ex3Title.textContent = 'Exercise 3'
let Ex3Statement = document.createElement('p')
Ex3Statement.className = 'statement'
Ex3Statement.textContent = `Emmagatzemar en un Map les lletres de l'array y el nombre de vegades que apareixen.`
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
let nom = 'LUIS'
let nomArray = nom.split('')
let Cognom = 'BLANCO'
let CognomArray = Cognom.split('')
let fullName = [].concat(nomArray , [" "], CognomArray)
console.log(fullName)
}
btnEx4.addEventListener('click', exercise4)
//DEFINE EXERCISE 4 TITLE AND STATEMENT
let Ex4Title =document.createElement('h2')
Ex4Title.className = 'title'
Ex4Title.textContent = 'Exercise 4'
let Ex4Statement = document.createElement('p')
Ex4Statement.className = 'statement'
Ex4Statement.textContent = `Crea una altra array amb el teu cognom on cada posició correspongui a una lletra. Fusiona els dos arrays en un`
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
btnEx5.textContent = 'Exercise5'
//DEFINE FUNCTION
let exercise5 = () => {
//INSERT CODE HERE TO EXECUTE
var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 
var regex = /\S+[a-z0-9]@[a-z0-9\.]+/img;
var extractedEmail=str.match(regex);
console.log(extractedEmail)
}
btnEx5.addEventListener('click', exercise5)
//DEFINE EXERCISE 5 TITLE AND STATEMENT
let Ex5Title =document.createElement('h2')
Ex5Title.className = 'title'
Ex5Title.textContent = 'Exercise 5'
let Ex5Statement = document.createElement('p')
Ex5Statement.className = 'statement'
Ex5Statement.textContent = `Crea una funció que retorni un array amb tots els email (sense repetir) del següent text:`
//APPEND EXERCISE 5 FUNCTION
displayer.appendChild(Ex5Title)
displayer.appendChild(Ex5Statement)
displayer.appendChild(btnEx5)