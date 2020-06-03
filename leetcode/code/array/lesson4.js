/**
 * 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。格雷编码序列必须以 0 开头。

示例 1:

输入: 2
输出: [0,1,3,2]
解释:
00 - 0
01 - 1
11 - 3
10 - 2

对于给定的 n，其格雷编码序列并不唯一。
例如，[0,2,3,1] 也是一个有效的格雷编码序列。

00 - 0
10 - 2
11 - 3
01 - 1
示例 2:

输入: 0
输出: [0]
解释: 我们定义格雷编码序列必须以 0 开头。
     给定编码总位数为 n 的格雷编码序列，其长度为 2n。当 n = 0 时，长度为 20 = 1。
     因此，当 n = 0 时，其格雷编码序列为 [0]。
 */
export default (n) => {
  // 递归函数，用来算输入为n的格雷编码序列
  let make = (n) => {
    if (n === 1) {
      return ['0', '1'];
    } else {
      let prev = make(n - 1)
      let result = []
      let max = Math.pow(2, n) - 1
      for (let i = 0, len = prev.length; i < len; i++) {
        result[i] = `0${prev[i]}`
        result[max - i] = `1${prev[i]}`
      }
      return result;
    }
  }

  let byte2to10 = (arr)=>{
    let result = [];
    for(let i = 0,len = arr.length,tmp,sum;i<len;i++){
      tmp = arr[i].split("");
      sum=0;
      for(let j = 0,jl=tmp.length-1;j<=jl;j++){
        sum = sum + parseInt(tmp[jl-j]) * Math.pow(2,j);
      }
      result.push(sum);
    }
    return result;
  }
  return byte2to10(make(n));
}
