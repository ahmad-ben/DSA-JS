class Animal {
  constructor(name, isItTame) {
    this.name = name;
    this.isItTame = isItTame;
    this.returnNum = 0;
  }

  checkIsItTame(){
    return this.isItTame ? "It's ready to be adopted." : "Not ready yet!." 
  }

  animalReturned(){
    this.returnNum++;
  }

  getAdoptsNumber(){
    return this.returnNum ? 
      `It was adopted ${this.returnNum} time.` : 
      "Never be adopted";
  }

}

const firstAnimal = new Animal("tommy", true); 
const secondAnimal= new Animal("hitler", false);

console.log(firstAnimal);
console.log(secondAnimal);

console.log(secondAnimal.checkIsItTame());
console.log(firstAnimal.checkIsItTame());

console.log(firstAnimal.getAdoptsNumber());
firstAnimal.animalReturned();
firstAnimal.animalReturned();
console.log(firstAnimal.getAdoptsNumber());

