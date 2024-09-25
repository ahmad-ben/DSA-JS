class Person {
  static areTheyTheSameGender(firstPerson, secondPerson){
    return firstPerson.gender === secondPerson.gender ? "yes" : "no";
  }

  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

}

const firstPerson = new Person("ahmed", "man"); 
const secondPerson= new Person("abd", "man");

console.log(firstPerson);
console.log(secondPerson);

console.log(Person.areTheyTheSameGender(firstPerson, secondPerson));

