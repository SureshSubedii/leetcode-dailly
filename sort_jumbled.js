var sortJumbled = function(mapping, nums) {
    let transformedNums = nums.map(num => {
        let transformed = parseInt(String(num).split("").map(digit => mapping[digit]).join(""));
        return { original: num, transformed };
    });
    console.log(transformedNums)

    transformedNums.sort((a, b) => a.transformed - b.transformed);

    return transformedNums.map(item => item.original);
}
