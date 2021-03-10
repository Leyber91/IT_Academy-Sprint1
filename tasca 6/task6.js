//CONSTANTS CREATED
const exerciseSection = document.createElement('div')
const displayer = document.querySelector('.displayer')
const exerciseStatement = document.createElement('p')
const header = document.createElement('h2')
header.textContent= 'Tasca 6';
displayer.appendChild(header);


// EXERCISE 1 CODE
const exerciseSection1 = document.createElement('div')
let employees = [{
  id: 1,
  name: 'Linux Torvalds'
}, {
  id: 2,
  name: 'Bill Gates'
},{
  id: 3,
  name: 'Jeff Bezos'
}];

let salaries = [{
  id: 1,
  salary: 4000
}, {
  id: 2,
  salary: 1000
}, {
  id: 3,
  salary: 2000
}];

//DEFINE FUNCTION
const exercise1 = (x) => {
//Definimos la Promise
const getEmpleado = function(a) {
  console.log(employees.find(x => x.id === a).id)
}

getEmpleado(2)

const getSalario = function(empleado) {
  console.log(salaries.find(x => x.id === empleado.id).salary)
}
getSalario(employees[2])
}
exercise1()




//DEFINE EXERCISE 1 TITLE AND STATEMENT
let Ex1Title = document.createElement('h2')
Ex1Title.className = 'title'
Ex1Title.textContent = 'Exercise 1'
let Ex1Statement = document.createElement('p')
Ex1Statement.className = 'statement'
Ex1Statement.textContent = `Donats els objectes Employees i Salaries, creu una arrow function getEmpleado que retorni una Promise efectuant la cerca en l'objecte pel seu id. Creu una altra arrow function getSalario que rebi com a paràmetre un objecte Employee i retorni el seu salari.`
//APPEND EXERCISE 1 FUNCTION
displayer.appendChild(Ex1Title)
displayer.appendChild(Ex1Statement)


// EXERCISE 2 CODE
let btnEx2 = document.createElement('button')
btnEx2.className = 'exercise2'
btnEx2.textContent = 'Exercise 2'
// FUNCTIONS TO BE CALLED BACK

//DEFINE FUNCTION
let exercise2 = (id) => {
//INSERT CODE HERE TO EXECUJE
//Definimos la Promise
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`El nombre del empleado con id ${id}, es ${employees.find(x => x.id === id).name} y su salario es de ${salaries.find(x => x.id === id).salary}`);
    }, 2000);
  });
}

async function asyncCall() {
  console.log('llamandola...');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
};

exercise2(2);


//DEFINE EXERCISE 2 TITLE AND STATEMENT
let Ex2Title =document.createElement('h2')
Ex2Title.className = 'title'
Ex2Title.textContent = 'Exercise 2'
let Ex2Statement = document.createElement('p')
Ex2Statement.className = 'statement'
Ex2Statement.textContent = `Creu una funció asíncrona que, rebent un id d'empleat, imprimeixi per pantalla el nom de l'empleat i el seu salari`
//APPEND EXERCISE 2 FUNCTION
displayer.appendChild(Ex2Title)
displayer.appendChild(Ex2Statement)




// EXERCISE 3 CODE
let btnEx3 = document.createElement('button')
let divEx3 = document.createElement('div')
btnEx3.className = 'exercise3'
btnEx3.textContent = 'Exercise 3'
//DEFINE FUNCTION
let getEmpleado = function(a) {

};





//DEFINE EXERCISE 3 TITLE AND STATEMENT
let Ex3Title =document.createElement('h2')
Ex3Title.className = 'title'
Ex3Title.textContent = 'Exercise 3'
let Ex3Statement = document.createElement('p')
Ex3Statement.className = 'statement'
Ex3Statement.textContent = `Creu una funció asíncrona que anomeni a una altra que retorni una Promise que efectuï la seva resolve amb una demora de 2 segons.`
//APPEND EXERCISE 3 FUNCTION
displayer.appendChild(Ex3Title)
displayer.appendChild(Ex3Statement)



