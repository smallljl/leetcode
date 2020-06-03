// 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
//
//  
//
// 示例 1：
//
// 输入：n = 234
// 输出：15
// 解释：
// 各位数之积 = 2 * 3 * 4 = 24
// 各位数之和 = 2 + 3 + 4 = 9
// 结果 = 24 - 9 = 15
// 示例 2：
//
// 输入：n = 4421
// 输出：21
// 解释：
// 各位数之积 = 4 * 4 * 2 * 1 = 32
// 各位数之和 = 4 + 4 + 2 + 1 = 11
// 结果 = 32 - 11 = 21

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum1 = function(n) {
    let sum = 0;
    let dig = 1;
    while(n>0){
        let digit = n % 10
        n = Math.floor(n /10) ;
        dig*=digit;
        sum+=digit;
    }
    return dig-sum;
};

var subtractProductAndSum2 = function (n){
    let str = n.toString();
    let sum = 0,dig = 1;
    for(let i = 0; i < str.length;i++){
        sum+=parseInt(str.charAt(i));
        dig*=parseInt(str.charAt(i));
    }
    return dig-sum;
};

