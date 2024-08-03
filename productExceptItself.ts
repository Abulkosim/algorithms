function productExceptSelf(nums: number[]): number[] {
    let count = 0;

    for (let num of nums) {
        if (num === 0) count++
    }

    if (count >= 2) {
        return nums.map(num => 0)
    } else if (count === 1) {
        return nums.map((num) => {
            if (num !== 0) {
                return 0
            } else {
                return nums.reduce((a: number, b: number) => {
                    if (a === 0) {
                        return b
                    } else if (b === 0) {
                        return a
                    } else {
                        return a * b
                    }
                }, 1)
            }
        })
    } else {
        let numsProduct = nums.reduce((a: number, b: number) => a * b, 1)

        return nums.map((num) => {
            return numsProduct / num
        })
    }
}

productExceptSelf([1, 2, 3, 4])
productExceptSelf([1, 2, 3, 0])
productExceptSelf([1, 0, 3, 0])