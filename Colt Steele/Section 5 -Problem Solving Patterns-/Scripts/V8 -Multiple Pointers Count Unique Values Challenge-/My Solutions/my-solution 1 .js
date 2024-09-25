[-5, -5, -4, -2, 0, 0, 3, 6, 6, 7, 7, 7, 12, 12];
[-5, -4, 12, -2, -5, 0, 3, 0, 7, 7, 6, 6, 7, 12];

/*

The big different that i see here, is:
  In the sorted if you leave a number you will never see it again.
    If you move in the same direction with both pointers.
    When you move you basically have two scenarios:
      You will find the same number as the last one.
      You will find a different number but absolutely not the previous numbers:
        You move in a specific direction in a sorted array.
        If you pass a value you will never see it again.

*/

const countUniqueValues = (arr) => {
  let uniqueValuesArr = [];

  for (let i = 0; i < arr.length; i++) {
    if(uniqueValuesArr.indexOf(arr[i]) == -1) uniqueValuesArr.push(arr[i]);
  }

  console.log(uniqueValuesArr.length);
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4



/*

  const countUniqueValues = (arr) => {
    let uniqueValuesArr = [];
    uniqueValuesArr = arr.filter(item => {
      console.log("uniqueValuesArr: ", uniqueValuesArr);
      console.log("item: ", item);
      console.log("Index: ", uniqueValuesArr.indexOf(item));
      return uniqueValuesArr.indexOf(item) == -1
    });
    console.log("uniqueValuesArr: ", uniqueValuesArr);
    console.log("Result: ", uniqueValuesArr.length);
  }

*/