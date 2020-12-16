/*
 *  给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
    如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
    注意：你不能在买入股票前卖出股票。
    示例 1:
    输入: [7,1,5,3,6,4]
    输出: 5
    解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
        注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
    示例 2:
    输入: [7,6,4,3,1]
    输出: 0
    解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
*
*/ 

var maxProfit = function(prices) {
    let len = prices.length;
    let minprice = Infinity;
    let maxprofit = 0;
    for(let i = 0; i < len; i ++){
        if(prices[i] < minprice){
            minprice = prices[i];
        } else if(prices[i] - minprice > maxprofit){
            maxprofit = prices[i] - minprice;
        }
    }
    return maxprofit;
};

var maxProfit = function(prices){
    let len = prices.length;
    if(len < 2){
        return 0;
    }
    let dp = new Array(len);   // m 行  
    for(let i = 0; i < len; i++){ // 
       dp[i] = new Array(2); 
    }
    // dp[i][0] 下标为 i 这天结束的时候，不持股，手上拥有的现金数
    // dp[i][1] 下标为 i 这天结束的时候，持股，手上拥有的现金数
    dp[0][0] = 0;
    dp[0][1] = - prices[0];
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }
    return dp[len - 1][0];
}