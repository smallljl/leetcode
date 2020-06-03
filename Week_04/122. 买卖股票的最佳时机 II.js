/*
    给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
    设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
    注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
    示例 1:
    输入: [7,1,5,3,6,4]
    输出: 7
    解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
         随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
    示例 2:
    输入: [1,2,3,4,5]
    输出: 4
    解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
         注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
         因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
    示例 3:
    输入: [7,6,4,3,1]
    输出: 0
    解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii
 */
// dfs 会超时
var maxProfit2 = function(prices) {
    let len = prices.length;
    let max = 0;
    function _f(prices,idx,status,profit){
        if(idx === len){
            max = Math.max(profit,max);
            return;
        }
        // 不操作
        _f(prices,idx+1,status,profit);
        if(status === 0)  // 0没有股票   // 买入
           _f(prices,idx+1,1,profit-prices[idx]);
        else // 卖出
           _f(prices,idx+1,0,profit+prices[idx]);
    }
    _f(prices,0,0,0);
    return max;
};

// 贪心算法
var maxProfit3 = function(prices){
    let res = 0;
    for(let i = 0,len = prices.length; i < len-1;i++){
        let diff = prices[i+1] - prices[i];
        diff > 0 && (res += diff);
    }
    return res;
}

var maxProfit4 = function(prices){
    let len = prices.length;
    if(len < 2) return 0;
    let dp = new Array(len);
    dp[0] = [0,-prices[0]];
    for(let i = 1; i < len; i++){
        dp[i] = new Array(2);
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] + prices[i]);  // 没有股票状态
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] - prices[i]);  // 有股票状态
    }
    return dp[len-1][0];
}


// 状态压缩
var maxProfit5 = function(prices){
    let len = prices.length;
    if(len < 2) return 0;
    let cach = new Array(len);  // 有现金
    let hold = new Array(len);  // 有股票
    cach[0] = 0;
    hold[0] = - prices[0];
    for(let i = 1; i < len; i++){
       cach[i] = Math.max(cach[i-1],hold[i-1]+prices[i]);
       hold[i] = Math.max(hold[i-1],cach[i-1]-prices[i]);
    }
    return cach[len-1]; 
}

// 状态压缩
var maxProfit = function(prices){
    let len = prices.length;
    if(len < 2) return 0;
    let cach = 0;
    let hold = -prices[0];
    let preCash = chah;
    let preHold = hold;
    for(let i = 1; i < len; i++){
        cach = Math.max(preCash,preHold+prices[i]);
        hold = Math.max(preHold,preCash - prices[i]);
        preCash = cach;
        preHold = hold;
    }
    return cach;
}