
var maxProfit = function (prices) {
    let idx = 0;
    let profit = 0;
    while (idx < prices.length - 1) {
        let tempProfit = 0;
        let pair = idx + 1;
        while (pair < prices.length) {
            let pairProfit = prices[pair] - prices[idx];
            if (pairProfit > 0 && pairProfit > tempProfit)
                tempProfit = pairProfit;
            pair = pair + 1;
        }
        if (tempProfit > profit)
            profit = tempProfit;
        idx = idx + 1;
    }
    return profit;
};
// const input = [1, 2, 3, 4, 5];
// const input = [7, 6, 4, 3, 1]
const input = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(input));