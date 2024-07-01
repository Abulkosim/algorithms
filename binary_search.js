function binarySearch(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}