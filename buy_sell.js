var maxProfit = function(prices) {

    let max = 0;
    let minimum = prices[0];
    for (let  i = 0; i< prices.length; i++ ){
    minimum = Math.min(minimum ,prices[i]);
    max = Math.max(max ,prices[i] - minimum );
    }
    return max;
    }