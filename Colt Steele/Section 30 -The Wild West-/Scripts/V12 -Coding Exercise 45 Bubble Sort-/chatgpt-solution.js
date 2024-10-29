function bubbleSort(arr, comparator) {
  // If no comparator is provided, use a default comparator for numbers in ascending order
  if (typeof comparator !== 'function') {
    comparator = (a, b) => a - b;
  }

  let n = arr.length;
  let swapped;
  
  // Outer loop to go through each element
  for (let i = 0; i < n; i++) {
    swapped = false;

    // Inner loop for bubble sort pass
    for (let j = 0; j < n - i - 1; j++) {
      // Use the comparator to decide if we should swap
      if (comparator(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
        swapped = true;
      }
    }

    // If no swaps happened, array is sorted
    if (!swapped) break;
  }

  return arr;
}
