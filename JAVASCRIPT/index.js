//prints in the console
console.log("Hello World");

let myname = 'Yuri';
console.log(myname)
//Cannot have a reserved already name
//Cannot start with a number
//Cannot contain a space or hyphen (-)
//Case-sensitive




//Constants

const interestRate = 0.3;
console.log(interestRate);


//ValuesTypes:

let name = 'Yuri'; //String Literal
let age = 18; //Literal Number
let lebool = true;
let smething = undefined; //Probably won't have any value
let nothing = null; //Is predetermined that may have a value = type object
console.log(name, age, lebool, smething, nothing)

let money = 34.95;

console.log(typeof money);
console.log(typeof age);

//No differences between numbers. No Integers or Floats.




//Reference Values

//Objects
let object = {cidade: "Goiânia", cep: 74563124, rua: "Consolação" };
console.log(object);

object.cidade = "São Paulo"; //Alterando algum atributo do objeto
console.log(object.cidade);

object["cidade"] = 'Mariana'; //Idêntico ao dicionário em Python
console.log(object["cidade"]);


//Arrays - Lists
let food = ['chocolate', 'beef'];
console.log(food);
console.log(food[0]);
food[2] = 'waffles';
console.log(food);

