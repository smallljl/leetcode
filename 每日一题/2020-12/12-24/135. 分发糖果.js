/**
 *  老师想给孩子们分发糖果，有 N 个孩子站成了一条直线，老师会根据每个孩子的表现，预先给他们评分。

    你需要按照以下要求，帮助老师给这些孩子分发糖果：

    每个孩子至少分配到 1 个糖果。
    相邻的孩子中，评分高的孩子必须获得更多的糖果。
    那么这样下来，老师至少需要准备多少颗糖果呢？

    示例 1:

    输入: [1,0,2]
    输出: 5
    解释: 你可以分别给这三个孩子分发 2、1、2 颗糖果。
    示例 2:

    输入: [1,2,2]
    输出: 4
    解释: 你可以分别给这三个孩子分发 1、2、1 颗糖果。
        第三个孩子只得到 1 颗糖果，这已满足上述两个条件。

 * 
 */

/**
 * @param {number[]} ratings
 * @return {number}
 */
// 取最大的满足  两次遍历取最大值
var candy = function(ratings) {
    const n = ratings.length;
    const left = new Array(n).fill(0);
    for(let i = 0; i < n; i++){
        if(i > 0 && ratings[i] > ratings[i-1]){
            left[i] = left[i-1] + 1;
        } else {
            left[i] = 1;
        }
    } 
    const right = new Array(n).fill(0);
    for(let i = n-1; i >= 0; i--){
        if(i < n-1 && ratings[i] > ratings[i+1]){
            right[i] = right[i+1] + 1;
        } else {
            right[i] = 1;
        }
    }
    let ans = 0;
    for(let i = 0 ; i < n; i++){
        ans += Math.max(left[i],right[i]);
    }
    return ans;
};

// 不理解
var candy = function(ratings) {
    const n = ratings.length;
    let ret = 1;
    // dec 当前递减序列的长度 
    // inc 最近的递增序列的长度
    // pre 前一个同学分得的糖果数量
    let inc = 1, dec = 0, pre = 1;   

    for (let i = 1; i < n; i++) {
        if (ratings[i] >= ratings[i - 1]) {
            dec = 0;
            if (ratings[i] === ratings[i - 1]) pre = 1;
            else pre++;
            ret += pre;
            inc = pre;
        } else {
            dec++;
            if (dec === inc) {
                dec++;
            }
            ret += dec;
            pre = 1;
        }
    }
    return ret;
};