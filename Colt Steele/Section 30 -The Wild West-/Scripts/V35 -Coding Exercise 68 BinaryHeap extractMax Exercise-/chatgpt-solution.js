extractMax() {
  if (this.values.length === 0) return undefined;
  if (this.values.length === 1) return this.values.pop();

  this.swap(0, this.values.length - 1);
  const max = this.values.pop();
  let idx = 0;

  while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let leftChild = this.values[leftIdx] || -Infinity;
      let rightChild = this.values[rightIdx] || -Infinity;
      
      let largestIdx = leftChild > rightChild ? leftIdx : rightIdx;

      if (this.values[idx] >= this.values[largestIdx]) break;
      
      this.swap(idx, largestIdx);
      idx = largestIdx;
  }

  return max;
}

swap(i, j) {
  [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
}
