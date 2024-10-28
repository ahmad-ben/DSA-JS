const sortedFrequency = (arr, countedNum) => {
  const findFirstOccurrence = () => {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < countedNum) left = mid + 1;
      else right = mid - 1;
    }
    return left < arr.length && arr[left] === countedNum ? left : -1;
  };

  const findLastOccurrence = () => {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] <= countedNum) left = mid + 1;
      else right = mid - 1;
    }
    return right >= 0 && arr[right] === countedNum ? right : -1;
  };

  const firstIndex = findFirstOccurrence();
  const lastIndex = findLastOccurrence();

  return firstIndex !== -1 && lastIndex !== -1 ? lastIndex - firstIndex + 1 : -1;
};
