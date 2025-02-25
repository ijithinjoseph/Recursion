const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  };
  
  const merge = (left, right) => {
    const sorted = [];
  
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
  
    return [...sorted, ...left, ...right];
  };
  
  console.log(mergeSort([11, 3, 23, 1, 23, 33, 5]));