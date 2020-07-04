var num = 0;

/**
 * 根据总的找零金额，和拥有的面值，精确的计算最终结果
 * 如果无解，返回false
 * @param {*} total 总的找零金额
 * @param {*} denos 拥有的面试
 */
function exchange(total, denos) {
  var cache = []; // {total:xx, index:xxx, result:xxx}
  function _exchange(total, index) {
    // 只需要看，要不要找第i个面值
    if (total === 0) {
      return []; //不用找零
    } else if (total < 0) {
      return false; //无解
    }
    if (index >= denos.length) {
      // index这个位置没有任何面值
      return false; //无解
    }
    //查看是否命中缓存
    for (var i = 0; i < cache.length; i++) {
      var c = cache[i];
      if (c.total === total && c.index === index) {
        return c.result;
      }
    }
    num++;
    var result; //缓存结果
    // 1. 看total是不是等于第index个面值，如果等于，用第index张面值作为找零
    var deno = denos[index]; //第index张面值
    if (total === deno) {
      result = [deno]; //deno就是最优解
    }
    // 2. total比第index个面值小，第index张面值无法用于找零，看后续面值
    else if (total < deno) {
      return _exchange(total, index + 1);
    }
    // 3. total比第index个面值大，分为找和不找，分别求解，比较解的结果，得到最终结果
    else if (total > deno) {
      //找
      var result1 = _exchange(total - deno, index); //找了这张面值后，剩下的最优解
      //不找
      var result2 = _exchange(total, index + 1); //不找这个面值，剩下的最优解
      //对比两种结果
      if (result1 === false && result2 === false) {
        result = false;
      } else if (result1 === false && result2 !== false) {
        result = result2;
      } else if (result1 !== false && result2 === false) {
        result = [deno].concat(result1);
      } else {
        //都有解
        result1 = [deno].concat(result1); // 让找自己的情况加入自己这张面额
        result = result1.length < result2.length ? result1 : result2;
      }
    }
    cache.push({
      total: total,
      index: index,
      result: result
    });
    return result;
  }
  console.log(cache);
  return _exchange(total, 0);
}

var result = exchange(51, [30, 25, 10, 5, 1]);
console.log(result, "运行了" + num + "次"); //预期： 25 25 1

// var result = exchange(51, [11, 10, 5, 2]);
// console.log(result); //预期： false
