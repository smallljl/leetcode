/*给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21*/
var reverse = function(x) {
    let ord = Math.abs(x);  // ord === 321
    let now = 0;
    while(ord > 0){  // 核心算法
        now = now * 10 + ord % 10;   // 0 + 1  =>  1     1*10 + 2 => 12  12*10 + 3 => 123
        ord = Math.floor(ord/10);
    }
    if(x < 0)  // 是负数
        return now <= Math.pow(2,31) ? -now : 0;
    else  // 是正数
        return now < Math.pow(2,31) ? now : 0;
};
console.log(reverse(1534236469));

now = now * 10 + (ord % 10);
ord = Math.floor(ord / 10)