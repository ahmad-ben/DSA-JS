const cumulativeEdition = (lastNumber) => {
  sum = 0;
  for (let i = 1; i <= lastNumber; i++) sum += i;
  return sum;
}

/*

  sum = 0;
  for (let i = 1; i <= lastNumber; i++) sum += i;
    Operation 1: sum = 0
    Operation 2: i = 1
    Operation 3: i <= lastNumber
    Operation 4: i++ || { i + 1 } => `X`
    Operation 5: i++ || { i = X }
    Operation 6: sum += i || { i + sum } => `Y`
    Operation 7: sum += i || { sum = Y }

    The change of the number of operation correspondent to the input value:
      Op 1 and 2:
        Happen once regardless to the value of the input.
        Op 3, 4, 5, 6 and 7:
        Happen the value of the input times.
          Value of input increase = Number of execution of this operation will increase.
      So the number of operation is:
        1 + 1 + n + n + n + n + n = 2 + 5n.
      That means:
        If:
          n = 50
        The number of operations is:
          2 + (5 * 50) 
          2 + 250  
          252 

*/