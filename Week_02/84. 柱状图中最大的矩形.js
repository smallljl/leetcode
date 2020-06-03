/*给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
求在该柱状图中，能够勾勒出来的矩形的最大面积。
以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
示例:
    输入: [2,1,5,6,2,3]
    输出: 10
链接：https://leetcode-cn.com/problems/largest-rectangle-in-histogram*/


var largestRectangleArea1 = function(heights) {
    let maxarea = 0;
    for (let i = 0; i < heights.length; i++) {
        let minheight = Number.MAX_SAFE_INTEGER;
        for (let j = i; j < heights.length; j++) {
            minheight = Math.min(minheight, heights[j]);
            maxarea = Math.max(maxarea, minheight * (j - i + 1));
        }
    }
    return maxarea;

};

var largestRectangleArea2 = function(heights) {
    function calcArea(start,end){
        if(start > end){
            return 0;
        }
        var minIndex = start;
        for(var i = start;i <= end;i++){
            if(heights[minIndex] > heights[i]){
                minIndex = i;
            }
        }
        return Math.max(heights[minIndex] * (end - start + 1),
                    Math.max(calcArea(start,minIndex-1),calcArea(minIndex+1,end)));
    }
    return calcArea(0,heights.length-1);
};

// 动态规划
var largestRectangleArea3 = function(heights) {
    const cache = [];
    function calcArea(start,end){
        if(start > end){
            return 0;
        }
        for(let i = 0; i < cache.length;i++){
            let item = cache[i];
            if(item.start === start && item.end === end){
                return item.result;
            }
        }
        let minIndex = start;
        for(let i = start;i <= end;i++){
            if(heights[minIndex] > heights[i]){
                minIndex = i;
            }
        }
        let result =  Math.max(heights[minIndex] * (end - start + 1),
            Math.max(calcArea(start,minIndex-1),calcArea(minIndex+1,end)));

        cache.push({
            start:start,
            end:end,
            result:result
        });
        return result;
    }
    return calcArea(0,heights.length-1);
};


/**
 * 压栈的方法
 * @param heights
 * @returns {number}
 */
var largestRectangleArea4 = function(heights){
    var maxarea = 0;
    var stack = [-1]; // 存储的下标
    for(var i = 0;i < heights.length;i++){
        // heights[stack[stack.length-1]]  栈中 最后的值
        while(stack.length > 1 && heights[i] <= heights[stack[stack.length-1]]){
            // 栈中最后的下标  stack[stack.length-1]
            // 分别比较前面元素到当前下标的比较
            maxarea = Math.max(maxarea,heights[stack.pop()] * (i - stack[stack.length-1] - 1));
        }
        stack.push(i);
    }
    while(stack.length > 1){
        maxarea = Math.max(maxarea,heights[stack.pop()] * (heights.length - stack[stack.length-1] - 1));
    }
    return maxarea;
};

// 参考国际版 做了小的优化
let largestRectangleArea5 = function(heights){
    let maxArea = 0;
    const stack = [];
    heights = [0].concat(heights).concat([0]);
    for(let i = 0; i < heights.length;i++){
        while(stack && heights[i] < heights[stack[stack.length-1]]){
            const j = stack.pop();
            maxArea = Math.max(maxArea,heights[j]*(i-stack[stack.length-1]-1));
        }
        stack.push(i);
    }
    return maxArea;
};

var largestRectangleArea6 = function(heights) {
    let maxarea = 0;
    for (let i = 0; i < heights.length; i++) {
        let leftBound = i-1;
        let rightBound = i+1;
        while(heights[leftBound] >= heights[i] && leftBound > 0){
            leftBound--;
        }
        while(heights[rightBound]> heights[i] && rightBound < heights.length-1){
            rightBound++;
        }
        let area = heights[i] * (rightBound-leftBound-2+1);
        maxarea = Math.max(area,maxarea);
    }
    return maxarea;
};


console.log(largestRectangleArea5([7,0,7,7,5,321,32,31,2,35,465,4,654,65]));