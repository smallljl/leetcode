var num = 0;
/**
 * 得到一个找零的结果： [25, 10, 10, 1]
 * @param {*} total 要找零的总额
 * @param {*} denos 拥有的面额
 */
function exchange(total, denos) {
  num++;
  if (total <= 0) {
    return []; //不用找零
  }
  // 寻找最大的面额，同时要保证面额小于等于total
  var max = 0;
  for (var i = 0; i < denos.length; i++) {
    var deno = denos[i];
    if (deno > max && deno <= total) {
      max = deno;
    }
  }
  // max记录这一次的解（局部最优解）
  var result = [max];
  var next = exchange(total - max, denos); //得到后续的局部最优解
  result = result.concat(next); //拼接之后，就是整体最优解
  return result;
}

var total = 51;
var denos = [30, 25, 10, 5, 1];
var result = exchange(total, denos);
console.log(result, num);
