function topKFrequent(nums: number[], k: number): string[] {
    let hashMap = {}

    for (let item of nums) {
        if (!hashMap.hasOwnProperty(item)) {
            hashMap[item] = 1
        } else {
            hashMap[item]++
        }
    }

    let topKFrequentArray = Object.keys(hashMap).sort((a, b) => hashMap[b] - hashMap[a])

    return topKFrequentArray.slice(0, k)
}