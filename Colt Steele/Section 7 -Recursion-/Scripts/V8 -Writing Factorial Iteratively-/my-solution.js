const factorial = (num) => {
  let total = num || 1;

  for (let i = num - 1; i > 1; i--) total = total * i;

  console.log(total);
}

factorial(0);
factorial(1);
factorial(2);
factorial(3);
factorial(4);
factorial(5);
factorial(10);