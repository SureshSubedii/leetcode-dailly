var rangeSum = function(nums, n, left, right) {
    const allSums = [];
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            allSums.push(sum);
        }
    }
    
    allSums.sort((a, b) => a - b);
    
    let result = 0;
    for (let i = left - 1; i < right; i++) {
        result += parseInt(allSums[i]);
    }
    
    return result % 1000000007;
};
