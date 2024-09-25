const cumulativeEditionV2 = (lastNumber) => {
  return lastNumber * (lastNumber + 1) / 2; 

}

/*

  lastNumber * (lastNumber + 1) / 2; 
    Operation 1: lastNumber + 1 => `X`
    Operation 2: lastNumber * X => `Y`
    Operation 3: Y / 2; 

  The change of the number of operation correspondent to the input value:
    Even the input value is changing the number of operation will be always stable.
    So the number of operation is:
      1 + 1 + 1 = 3.

*/