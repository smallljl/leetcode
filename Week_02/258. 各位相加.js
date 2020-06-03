/*给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

示例:

    输入: 38
输出: 2
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-digits*/
var addDigits = function(num) {
    function _addDigits(num){
        if(num < 10) return num;
        let next = 0;
        while(num !== 0){
            next += num % 10;
            num = Math.floor(num/10);
        }
        return _addDigits(next);
    }
    return _addDigits(num);
};

var addDigits2 = function(num){
    if (num < 10) return num
    return num % 9 || 9
};