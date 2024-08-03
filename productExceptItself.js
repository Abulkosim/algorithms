function productExceptSelf(nums) {
    var count = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num === 0)
            count++;
    }
    if (count >= 2) {
        console.log(nums.map(function (num) { return 0; }));
        return nums.map(function (num) { return 0; });
    }
    else if (count === 1) {
        console.log(nums.map(function (num) {
            if (num !== 0) {
                return 0;
            }
            else {
                return nums.reduce(function (a, b) {
                    if (a === 0) {
                        return b;
                    }
                    else if (b === 0) {
                        return a;
                    }
                    else {
                        return a * b;
                    }
                }, 1);
            }
        }));
    }
    else {
        var numsProduct_1 = nums.reduce(function (a, b) { return a * b; }, 1);
        console.log(nums.map(function (num) {
            return numsProduct_1 / num;
        }));
    }
}
productExceptSelf([1, 2, 3, 4]);
productExceptSelf([1, 2, 3, 0]);
productExceptSelf([1, 0, 3, 0]);
