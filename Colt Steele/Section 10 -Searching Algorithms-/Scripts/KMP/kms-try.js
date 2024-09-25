const createLPPS = (pattern) => {
  let LPPSArr = [0];

  for (let i = 1; i < pattern.length; i++) {
    const preArrItem = LPPSArr[i - 1];

    if(preArrItem !== 0 && pattern[i] === pattern[preArrItem])
      LPPSArr.push(preArrItem + 1);
    else if(pattern[i] === pattern[0]) LPPSArr.push(1);
    else LPPSArr.push(0);

  }

  return LPPSArr;
};

console.log(createLPPS("ahmedah"));     // [0, 0, 0, 0, 0, 1, 2]
console.log(createLPPS("aabacaa"));     // [0, 1, 0, 1, 0, 1, 2]
console.log(createLPPS("ABABCABAB"));   // [0, 0, 1, 2, 0, 1, 2, 3, 4]
console.log(createLPPS("ABABABCABAB")); // [0, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
console.log(createLPPS("abcaa"));       // [0, 0, 0, 1, 1]
console.log(createLPPS("abad"));        // [0, 0, 1, 0]
console.log(createLPPS("abab"));        // [0, 0, 1, 2]







const findMatchNum = (str, pat) => {
  const LPPSArr = createLPPS(pat);

  let patIdx = 0;
  let strIdx = 0;
  let matchNum = 0;

  while(strIdx < str.length){
    let currentStrChar = str[strIdx];
    let currentPatChar = pat[patIdx];

    if(currentStrChar === currentPatChar){

      if(patIdx + 1 === pat.length){
        matchNum++;
        const idxOfSufPre = LPPSArr[patIdx];
        patIdx = idxOfSufPre;
      } else patIdx++;

      strIdx++;

    }else{

      if(patIdx !== 0){
        const idxOfSufPre = LPPSArr[patIdx - 1] ?? 0;
        patIdx = idxOfSufPre; 
      } else strIdx++;

    }
  }

  console.log("SOLUTION: ", matchNum);
};

findMatchNum("ababad", "abad");                                           // 1
findMatchNum("BACDGABCDAF", "ABCD");                                      // 1
findMatchNum("mississippi", "iss");                                       // 2
findMatchNum("ababadabadab", "abad");                                     // 2
findMatchNum("aaaaabaaaaaba", "aaab");                                    // 2
findMatchNum("ABCDABDABCDABCDABCDABD", "ABCDABD");                        // 2
findMatchNum("abcabcabcabc", "abcabc");                                   // 3
findMatchNum("ABABACABABABCABABABCABABABCABABACABABABC", "ABABABCABAB");  // 3
findMatchNum("ABABACABABACABABACABABACABABAC", "ABABACAB");               // 4
findMatchNum("aaaaa", "aa");                                              // 4
findMatchNum("here 5 of here hehere trick there & here, hh.", "here");    // 5                                             // 4
findMatchNum("acbacbacbacbacbacbacb", "acbacb");                          // 6
findMatchNum("ABABABABABABABAB", "ABAB");                                 // 7

/*

  ABABACABABABCABABABCABABABCABABACABABABC
        ABABABCABAB
               ABABABCABAB
                      ABABABCABAB

*/