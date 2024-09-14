var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function quickSort(arr) {
    if (arr.length <= 1)
        return arr;
    var pivot = arr[Math.floor(arr.length / 2)];
    var left = arr.filter(function (x) { return x < pivot; });
    var middle = arr.filter(function (x) { return x === pivot; });
    var right = arr.filter(function (x) { return x > pivot; });
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(left), true), middle, true), quickSort(right), true);
}
var unsortedArray2 = [3, 6, 8, 10, 1, 2, 1];
var sortedArray2 = quickSort(unsortedArray2);
console.log(sortedArray2);
