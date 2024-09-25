function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
 
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) return true;
    
    start++;
    next++;
  }
  return false;
}
