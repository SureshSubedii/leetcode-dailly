
var frequencySort = function (nums) {
    let map = new Map()
    let result = []
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)

    }
    for (let [key, val] of map.entries()) {
        result.push([key, val])

    }
    result.sort((a, b) => {
        if (a[1] == b[1]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }
    });

    return result.flatMap(item => Array(item[1]).fill(item[0]))}

    console.log(frequencySort([5,5,1,2,2,2,3,3]))
