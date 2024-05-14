const fibs = (n) => {
    const fibonnacei = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonnacei[i] = fibonnacei[i - 1] + fibonnacei[i - 2];
    }
    return fibonnacei;
  };
  console.log(fibs(7));
  const fibrec = (n, arr = [0, 1]) => {
    if (arr.length == n) return arr;
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibrec(n, arr);
  };
  
  console.log(fibrec(7));