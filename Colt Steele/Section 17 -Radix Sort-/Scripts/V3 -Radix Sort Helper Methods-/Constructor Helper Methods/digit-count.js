function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

digitCount(1); // 1
digitCount(25); // 2
digitCount(314); // 3