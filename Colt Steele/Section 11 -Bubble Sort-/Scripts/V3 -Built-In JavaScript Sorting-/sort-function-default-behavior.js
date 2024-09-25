let arrOne = [1, 100, 20, 111, 30, 22, 35];

arrOne.sort();

console.log("Arr One Sorted: ", arrOne); //=> [1, 100, 111, 20, 22,  30,  35];

/* ===== EXPLANATION ===== */

const arrForExplanation = arrOne.map(value => {
  const valStr = value.toString();
  let arrOfValCharUTF = [];

  for (const char of valStr) arrOfValCharUTF.push(char.charCodeAt());
  
  return {value, "UTF-16": arrOfValCharUTF}
});

console.log(arrForExplanation);

/*
  [
    { value: 1,   'UTF-16': [ 49 ]          },
    { value: 100, 'UTF-16': [ 49, 48, 48 ]  },
    { value: 111, 'UTF-16': [ 49, 49, 49 ]  },
    { value: 20,  'UTF-16': [ 50, 48 ]      },
    { value: 22,  'UTF-16': [ 50, 50 ]      },
    { value: 30,  'UTF-16': [ 51, 48 ]      },
    { value: 35,  'UTF-16': [ 51, 53 ]      }
  ]
*/
