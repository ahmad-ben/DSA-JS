class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.level = year;
  }
}

let firstStudentObj = new Student("ahmed", "ben chakhter", 5);
let secondStudentObj = new Student("mohammed", "ben chakhter", 10);

console.log(firstStudentObj);
console.log(secondStudentObj);
console.log(secondStudentObj.firstName);
console.log(secondStudentObj.lastName);
console.log(secondStudentObj.level);
