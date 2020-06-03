/*给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。*/


// [4,3,2,1]
//   1     返回自己  1 
// [4,2,2,9]
//  4,2,3,0        

var plusOne = function(digits) {        
    const len = digits.length;         
    for(let i = len-1; i >= 0;i--){
        digits[i]++;    // 不是9+1
        digits[i]%=10;   // 是9变0
        if(digits[i]!==0){
            return digits;
        }
    }
    digits = [...Array(len + 1)].map(_=>0);
    digits[0] = 1;
    return digits;
};

var plusOne2 = function(digits){
    const len = digits.length;         
    for(let i = len-1; i >= 0;i--){
        if(digits[i] !== 9){
            digits[i]++;
            return digits;
        }else{
            digits[i] = 0;
        }
    }
    digits = [...Array(len + 1)].map(_=>0);
    digits[0] = 1;
    return digits;
};

var plusOne3 = function(digits) {
    return String(BigInt(digits.join('')) + BigInt(1)).split('');
};

console.log(plusOne2([4, 3, 2, 9]));

