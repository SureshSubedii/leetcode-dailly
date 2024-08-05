var kthDistinct = function (arr, k) {
    let map = {};
    
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }
    
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] === 1) {
            count++;
            if (count === k) {
                return arr[i];
            }
        }
    }
    
    return "";
};
