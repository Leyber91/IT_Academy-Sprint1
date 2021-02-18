//CONSTANTS CREATED
const exerciseSection = document.createElement('div')
const displayer = document.querySelector('.displayer')
const exerciseStatement = document.createElement('p')
const header = document.createElement('h2')
header.textContent= 'Tasca 4';
displayer.appendChild(header);


// EXERCISE 1 CODE
const exerciseSection1 = document.createElement('div')
let btnEx1_1 = document.createElement('button')
btnEx1_1.className = 'exercise1'
btnEx1_1.textContent = 'Exercise 1. resolve'
let btnEx1_2 = document.createElement('button')
btnEx1_2.className = 'exercise1'
btnEx1_2.textContent = 'Exercise 1. reject'

const prometida = () => {console.log('Soy una promesa')}
const rechazada = () => {console.log('Soy una rechazada')}
const traicionada = () => {console.log('Soy una traicionada')}

//DEFINE FUNCTION
const exercise1 = (x) => {
//Definimos la Promise
return new Promise ((resolve, reject) => {
  if(x) {
    setTimeout(() => {
      resolve(prometida())
    }, 1500 );
    
  } else {
  reject(new Error ('Maldita lisiada, como te atreviste!!!'))
  }
});
}
//
exercise1(1)
  .then(exercise1(0))


//exercise1()
// async function await1 (){
//   const promesa1 = await exercise1('traicionada');
//   console.log(promesa1)
// }
//exercise1('traicionada').then(prometida)
//exercise1().then(rechazada())
// await1()


//DEFINE EXERCISE 1 TITLE AND STATEMENT
let Ex1Title = document.createElement('h2')
Ex1Title.className = 'title'
Ex1Title.textContent = 'Exercise 1'
let Ex1Statement = document.createElement('p')
Ex1Statement.className = 'statement'
Ex1Statement.textContent = `Crear una function que retorni una Promise que invoqui la funcion resolve() o bé reject() que rep. Invocar-la des de fora pasandole totes dues funcions que imprimeixin un missatge diferent en cada cas.`
//APPEND EXERCISE 1 FUNCTION
displayer.appendChild(Ex1Title)
displayer.appendChild(Ex1Statement)


// EXERCISE 2 CODE
let btnEx2 = document.createElement('button')
btnEx2.className = 'exercise2'
btnEx2.textContent = 'Exercise 2'
// FUNCTIONS TO BE CALLED BACK
const rechazadaDoble = () => {console.log('Soy una doble rechazada')}
const traicionadaDoble = () => {console.log('Soy una doble traicionada')}

//DEFINE FUNCTION
let exercise2 = (x, f1, f2) => {
//INSERT CODE HERE TO EXECUJE
//Definimos la Promise

  if(x == 'rechazada') {
    f1()
    
  } else {
    f2()
  }
};
exercise2('rechazada', rechazadaDoble)
exercise2('rechazada', traicionadaDoble)
exercise2('traicionada', rechazadaDoble, traicionadaDoble)
exercise2('traicionada', traicionadaDoble, rechazadaDoble)


//DEFINE EXERCISE 2 TITLE AND STATEMENT
let Ex2Title =document.createElement('h2')
Ex2Title.className = 'title'
Ex2Title.textContent = 'Exercise 2'
let Ex2Statement = document.createElement('p')
Ex2Statement.className = 'statement'
Ex2Statement.textContent = `Crear una arrow function que, rebent un paràmetre i una function callback, li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre.`
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
//INSERT CODE HERE TO EXECUTE
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



//Definimos la Promise
return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log(employees.find(x => x.id === a).id))
      }, 2000)
    })
};



getEmpleado(2)
getEmpleado(3)
getEmpleado(1)




//DEFINE EXERCISE 3 TITLE AND STATEMENT
let Ex3Title =document.createElement('h2')
Ex3Title.className = 'title'
Ex3Title.textContent = 'Exercise 3'
let Ex3Statement = document.createElement('p')
Ex3Statement.className = 'statement'
Ex3Statement.textContent = `Donats els objectes employees i salaries, creu una arrow function getEmpleado que retorni una Promise efectuant la cerca en l'objecte pel seu id.`
//APPEND EXERCISE 3 FUNCTION
displayer.appendChild(Ex3Title)
displayer.appendChild(Ex3Statement)




// EXERCISE 4 CODE
let divEx4 = document.createElement('div')

// DEFINE THE CLASS

const BillGates = getEmpleado(2).then(console.log(this))
const JeffBezos = getEmpleado(3)
const LinuxTorvalds = getEmpleado(1)


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

//DEFINE FUNCTION
let getSalario = function(empleado) {
//INSERT CODE HERE TO EXECUTE


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

return new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log(salaries.find(x => x.id === empleado.id).salary))
  }, 2000)
})
};

getSalario(employees[0])
getSalario(employees[1])
getSalario(employees[2])

//DEFINE EXERCISE 4 TITLE AND STATEMENT
let Ex4Title =document.createElement('h2')
Ex4Title.className = 'title'
Ex4Title.textContent = 'Exercise 4'
let Ex4Statement = document.createElement('p')
Ex4Statement.className = 'statement'
Ex4Statement.textContent = `Creu una altra arrow function getSalario que rebi com a paràmetre un objecte employee i retorni el seu salari.`
//APPEND EXERCISE 4 FUNCTION
displayer.appendChild(Ex4Title)
displayer.appendChild(Ex4Statement)



// EXERCISE 5 CODE
let divEx5 = document.createElement('div')
// DEFINE THE CLASS
//DEFINE FUNCTION
let exercise5 = function() {
//INSERT CODE HERE TO EXECUTE
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
getEmpleado(1).then(getSalario(employees[0]))


}

exercise5()

//DEFINE EXERCISE 5 TITLE AND STATEMENT
let Ex5Title =document.createElement('h2')
Ex5Title.className = 'title'
Ex5Title.textContent = 'Exercise 5'
let Ex5Statement = document.createElement('p')
Ex5Statement.className = 'statement'
Ex5Statement.textContent = `Invoqui la primera Promise getEmpleado i posteriorment getSalario, niant l'execució de les dues promises.`
//APPEND EXERCISE 5 FUNCTION
displayer.appendChild(Ex5Title)
displayer.appendChild(Ex5Statement)






// EXERCISE 6 CODE
let divEx6 = document.createElement('div')
// DEFINE THE CLASS
//DEFINE FUNCTION
let exercise6 = function() {
//INSERT CODE HERE TO EXECUTE
async function await6 (){
  try {
    const promesa1 = await exercise1();
    console.log(promesa1);  
    getEmpleado(1).then(getSalario(employees[1])) 
  } catch (err) {
    console.log(err)
  }
}



await6()



}

exercise6()

//DEFINE EXERCISE 6 TITLE AND STATEMENT
let Ex6Title =document.createElement('h2')
Ex6Title.className = 'title'
Ex6Title.textContent = 'Exercise 6'
let Ex6Statement = document.createElement('p')
Ex6Statement.className = 'statement'
Ex6Statement.textContent = `Fixi un element catch a la invocació de la fase anterior que capturi qualsevol error i l'imprimeixi per consola.`
//APPEND EXERCISE 6 FUNCTION
displayer.appendChild(Ex6Title)
displayer.appendChild(Ex6Statement)










