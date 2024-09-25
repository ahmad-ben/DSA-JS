const forLoopWithReturn = () => {
  for (let i = 0; i < 100; i++) {

    for (let j = 0; j < 100; j++) {
      console.log(i, j);
      if(i === 0) return "Stop the two loops now";
    }
    
  }
};

console.log(forLoopWithReturn());