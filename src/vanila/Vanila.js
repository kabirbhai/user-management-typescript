let user = "Robot";
user = 33;
user = true;
user = { id: 1, name: "kabir" };
user = [2, 5, 6, 8];
user = ["kabir", "sing", "jhon"];
user = [
  { id: 1, name: "kabir" },
  { id: 2, name: "sogir" },
];

let student: string = "John";
let age: number = 33;
let isGirl: boolean = true;
let friends: string[] = ["abul", "babul", "kabul"];
let fee: number[] = [23, 66, 122];

interface Person {
  //interface
  name: string;
  job: string;
  age: number;
  isSmall?: boolean; //optional property
  location?: string | boolean; //union type
}

let person: Person = {
  name: "Rahmina",
  job: "student",
  age: 22,
  location: true,
};
console.log(person);

//function in typeScript

const handleFunction = (name: string, age: number, address: string): void => {
  const total: number = 50;
  // return name

  console.log(name, age, address);
};

console.log(user);
