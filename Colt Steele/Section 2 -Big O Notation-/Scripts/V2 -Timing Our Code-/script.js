const cumulativeEdition = (lastNumber) => {
  // const startTime = new Date();
  // const sTimeStamp = startTime.getTime();
  sum = 0;
  for (let i = 1; i <= lastNumber; i++) {
    sum += i;
  }  
  console.log("The total is: ", sum);
  // const endTime = new Date();
  // const eTimeStamp = endTime.getTime();
  // console.log(`the time of starting is: ${sTimeStamp}, and the time of finishing is ${eTimeStamp}`);
}

const cumulativeEditionV2 = (lastNumber) => {
  // const startTime = new Date();
  // const sTimeStamp = startTime.getTime();
  const sum = lastNumber * (lastNumber + 1) / 2; 
  console.log("The total is: ", sum);
  // const endTime = new Date();
  // const eTimeStamp = endTime.getTime();
  // console.log(`the time of starting is: ${sTimeStamp}, and the time of finishing is ${eTimeStamp}`);
}

const fun1StartTime = performance.now();
cumulativeEdition(100000000); 
const fun1EndTime = performance.now();

const fun2StartTime = performance.now();
cumulativeEditionV2(100000000); 
const fun2EndTime = performance.now();

console.log(`Fist Fun: time elapsed in ${(fun1EndTime - fun1StartTime) / 1000} seconds`);
console.log(`Second Fun: time elapsed in ${(fun2EndTime - fun2StartTime) / 1000} seconds`);
console.log(`${((fun1EndTime - fun1StartTime) / 1000) / ((fun2EndTime - fun2StartTime) / 1000)}`);