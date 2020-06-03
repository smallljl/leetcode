/**
 * 
 *给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
  注意：
  num1 和num2 的长度都小于 5100.
  num1 和num2 都只包含数字 0-9.
  num1 和num2 都不包含任何前导零。 
  你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/add-strings 
 * 
 * 
 */
var addStrings = function(num1,num2){
    let max = Math.max(num1.length, num2.length);
    num1 = num1.padStart(max, 0);
    // 0000000123132
    num2 = num2.padStart(max, 0);
    // 0213213745313
    let res = '', sum = 0;
    while(max--) {
        console.log(num1[max],num2[max],(sum>9));
        sum = (+num1[max]) + (+num2[max]) + (sum > 9);  // 上次的值大于9的话+1  sum > 9
        res = (sum % 10) + res;
    }
    return sum > 9 ? '1' + res : res; 
};

addStrings("0123132789798","021321374657899854");