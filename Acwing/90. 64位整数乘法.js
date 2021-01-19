/**
 *  求 a 乘 b 对 p 取模的值。

    输入格式
    第一行输入整数a，第二行输入整数b，第三行输入整数p。

    输出格式
    输出一个整数，表示a*b mod p的值。

    数据范围
    1≤a,b,p≤1018
    输入样例：
    3
    4
    5
    输出样例：
    2
 * 
 * 
 */

/**
 *  (a + b) % p = (a % p + b % p) % p 

    (a - b) % p = (a % p - b % p) % p 

    (a * b) % p = (a % p * b % p) % p 

    a ^ b % p = ((a % p)^b) % p 
 * 
 */


var fs = require('fs');
var buf = '';

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();

});

process.stdin.on('end', function() {
  let tokens = buf.split('\n').map(function(x) { return x });
  let a = BigInt(tokens[0]);
  let b = BigInt(tokens[1]); 
  let p = BigInt(tokens[2]);
  let res = BigInt(0);
  while(b){
     if(b & BigInt(1)) res = (res + a)  % p;
       b >>=BigInt(1);
       a = BigInt(2) * a % p;
  }
  console.log(res.toString());
});
