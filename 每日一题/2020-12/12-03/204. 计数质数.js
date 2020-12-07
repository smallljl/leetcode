/**
 *  统计所有小于非负整数 n 的质数的数量。

    示例 1：

    输入：n = 10
    输出：4
    解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
    示例 2：

    输入：n = 0
    输出：0
    示例 3：

    输入：n = 1
    输出：0

 * 
 * 
 */

function isPrimes(n){
    // Math.sqrt(n) 可整除的因子
    for(let j = 2; j <= Math.sqrt(n);j++){
        if(n % j === 0){
            return false;
        }
    }
    return true;
}

var countPrimes = function(n) {
    let count = 0;
    for(let i = 2; i < n; i++){
        if(isPrimes(i)){
            count ++;
        }
    }
    return count;
};

var countPrimes2 = function(n){
    const isPrimes = new Array(n).fill(1);
    let ans = 0;
    for(let i = 2; i < n; i++){
        if(isPrimes[i]){
            ans++;
            for(let j = i*i; j < n;j++){
                isPrimes[j] = 0;
            }
        }
    }
    return ans;
}