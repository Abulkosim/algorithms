function insertionSort(arr){
  for (let i = 1; i < arr.length; i++) {
    for (var j = i - 1; j >= 0 && arr[j] > arr[i]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = arr[i];
  }
  return arr;
}
