/*
*
*       给定不同面额的硬币 coins 和一个总金额 amount。
*       编写一个函数来计算可以凑成总金额所需的最少的硬币个数。\
*       如果没有任何一种硬币组合能组成总金额，返回 -1。
        示例 1:
        输入: coins = [1, 2, 5], amount = 11
        输出: 3
        解释: 11 = 5 + 5 + 1
        示例 2:
        输入: coins = [2], amount = 3
        输出: -1
        来源：力扣（LeetCode）
        链接：https://leetcode-cn.com/problems/coin-change
*
*
*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange1 = function(coins, amount) {
   function _coinChange(coins,amount){
        if(amount <= 0)
            return [];
        let max = 0;
        // 每次找最大的值
        for(let i = 0; i < coins.length;i++){
            let coin = coins[i];
            if(coin <= amount && coin > max)
                max = coin;
        }
        let result = [max];
        let next = _coinChange(coins,amount-max);
        result = result.concat(next);
        return result;
   }
   return _coinChange(coins,amount);
};

let coinChange2 = function(coins,amount){
    let dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for(let i = 1; i <= amount;i++){
        for(let coin of coins){
            if(i >= coin)
                dp[i] = Math.min(dp[i],dp[i-coin]+1);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}

// dfs搜索
let coinChange3 = function(coins,amount){
    let least = Infinity; len = coins.length;
    function _coinChange(sum,level,start){
        if(sum > amount)
            return;
        // 剪枝
        if(least !== Infinity && level >= least) return;
        if(sum === amount){
            least = Math.min(least,level);
            return;
        }
        for(let i = start; i < len;i++){
            sum += coins[i];
            _coinChange(sum,level+1,start);
            sum -= coins[i];
        }
    }
    _coinChange(0,0,0);
    return least === Infinity ? -1 : least;
}

// 记忆化搜索
let coinChange = function(coins,amount){
    if(coins.length === 0) return -1;
    let memo = [];
    function _coinChange(coins,amount){
        if(amount < 0) return -1;
        if(amount === 0) return 0;
        let min = Infinity;
        if(memo[amount]){
            return memo[amount];
        }
        for(let i = 0; i < coins.length;i++){
           let res = _coinChange(coins,amount-coins[i]);
           if(res >= 0 && res < min){
               min = res+1;
           }
        }
        memo[amount] = (min === Infinity ? -1 : min)
        return memo[amount];
    }
    return _coinChange(coins,amount);
}

let coins =[1, 2, 5];
let amount = 11;
console.log(coinChange(coins, amount));