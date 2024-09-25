/*
  QUESTION:
  By Binary Search Algorithm Search for 15
  [ 1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19 ]
  
  ANSWER:
    LEFT => INDEX 0   => `1`
    RIGHT => INDEX 12 => `19`
    MIDDLE => 12 + 0 / 2 => 12 / 2 => 6 => `11`

    IF `11` === 15 NO
    IF `11` < 15 YES
    LEFT => INDEX `11` + 1 => 6 + 1 => 7 => `12`
    => [12, 15, 16, 17, 18, 19]
    
    MIDDLE => 12 + 7 / 2 => 19 / 2 => 10 => `17`
    
    IF `17` === 15 NO
    IF `17` < 15 NO
    RIGHT => INDEX `17` - 1 => 10 - 1 => 9 => 16
    => [12, 15, 16]
    
    MIDDLE => 9 + 7 / 2 => 16 / 2 => 8 => `15`
    IF `15` === 15 YES
    => WE FIND IT WITH 3 OPERATIONS !!

    ! I BELIEVE THE SEARCH SHOULD STOP IF:
      LEFT INDEX > RIGHT INDEX
    
*/