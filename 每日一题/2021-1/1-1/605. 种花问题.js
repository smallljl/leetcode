/**
 * 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。
 * 可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

    给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

    示例 1:

    输入: flowerbed = [1,0,0,0,1], n = 1
    输出: True
    示例 2:

    输入: flowerbed = [1,0,0,0,1], n = 2
    输出: False

 *  
 * 
 */
 
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // 当前0 前一个0 后一个0
    if(n === 0) return true;
    let len = flowerbed.length;
    let i = 0, cnt = 0;
    while(i < len){
        // current element 0
        // previous element 0
        // next element 0
        if(flowerbed[i] === 0 && 
              (i === 0 || flowerbed[i-1] === 0) &&  // i !== 0 
              (i === len -1 || flowerbed[i+1] === 0)){ // i !== len-1
            flowerbed[i] = 1;
            cnt++;
            if(cnt === n) return true;
        }
        i++;
    }
    return false;
  };

  // 相邻不能种 每次跳2格
  var canPlaceFlowers = function(flowerbed, n) {
    let m = flowerbed.length;
    let i = 0;
    while(i < m && n > 0){
        // 当前为空， 后一个为空 或者 当前是最后一个
        if(!flowerbed[i] && (i+1 >= m || !flowerbed[i+1])){
            n--;
            i+=2;    
        } else if(flowerbed[i]){
            i+=2;
        } else i++;
    }
    return n === 0;
  };