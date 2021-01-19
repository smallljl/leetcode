/**
 *  求 a 的 b 次方对 p 取模的值。

    输入格式
    三个整数 a,b,p ,在同一行用空格隔开。

    输出格式
    输出一个整数，表示a^b mod p的值。

    数据范围
    0≤a,b,p≤109
    数据保证 p≠0

    输入样例：
    3 2 7
    输出样例：
    2
 * 
 */

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function() {
  buf.split('\n').forEach(function(line) {
    var tokens = line.split(' ').map(function(x) { return parseInt(x) });
    let a = BigInt(tokens[0]);
    let b = BigInt(tokens[1]);
    let p = BigInt(tokens[2]);
    let res = BigInt(1);
    while(b){
        if(b & BigInt(1)) res = res * a  % p;
        b >>= BigInt(1);
        a = a * a  % p;
    }
    console.log(parseInt(res%p));
  });
});
