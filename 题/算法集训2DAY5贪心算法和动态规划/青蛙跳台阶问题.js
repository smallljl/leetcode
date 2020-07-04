var num1 = 0;

function count1(total) {
  num1++;
  if (total === 0) return 0;
  if (total === 1) return 1;
  if (total === 2) return 2;
  return count1(total - 1) + count1(total - 2);
}

var num2 = 0;
//使用动态规划优化效率
function count2(total) {
  var cache = {}; //缓存已经计算过的结果
  function _count(total) {
    if (cache[total] !== undefined) {
      return cache[total]; //直接使用缓存结果
    }
    num2++;
    var result;
    if (total === 0) result = 0;
    else if (total === 1) result = 1;
    else if (total === 2) result = 2;
    else {
      result = _count(total - 1) + _count(total - 2);
    }
    cache[total] = result;
    return result;
  }
  console.log("缓存", cache);
  return _count(total);
}

console.time("没有动态规划");
var result1 = count1(25);
console.log(result1, "计算了" + num1 + "次");
console.timeEnd("没有动态规划");

console.time("动态规划");
var result2 = count2(25);
console.log(result2, "计算了" + num2 + "次");
console.timeEnd("动态规划");
