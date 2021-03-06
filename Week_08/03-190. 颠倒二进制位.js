/*
* 
  颠倒给定的 32 位无符号整数的二进制位。

   

  示例 1：

  输入: 00000010100101000001111010011100
  输出: 00111001011110000010100101000000
  解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
      因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
  示例 2：

  输入：11111111111111111111111111111101
  输出：10111111111111111111111111111111
  解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
       因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/reverse-bits
*
*
*
*/
var reverseBits = function(n) {
  // 123    0 * 10      
  let result = 0;
  // result从右往移动空出末位 + n从左往右移动获取末位 + n次 = 倒序
  for(let i = 0;i < 32;i++){
      // 左移空出一位
      result <<= 1
      // n&1获取n的末位，result的末位换成n的末位
      result |= n & 1;
      // 右移1位
      n >>= 1;
  }
  return result >>> 0;
};
console.log(reverseBits(10))