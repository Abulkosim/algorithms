function binarySearch(numbers, target) {
  let low = 0
  let high = numbers.length
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (numbers[mid] == target) {
      return mid
    } else if (numbers[mid] > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}