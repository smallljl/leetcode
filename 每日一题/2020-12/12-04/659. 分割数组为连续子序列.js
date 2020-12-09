/**
 *  给你一个按升序排序的整数数组 num（可能包含重复数字），
 *  请你将它们分割成一个或多个长度至少为 3 的子序列，其中每个子序列都由连续整数组成。

    如果可以完成上述分割，则返回 true ；否则，返回 false 。

    示例 1：

    输入: [1,2,3,3,4,5]
    输出: True
    解释:
    你可以分割出这样两个连续子序列 : 
    1, 2, 3
    3, 4, 5
    示例 2：

    输入: [1,2,3,3,4,4,5,5]
    输出: True
    解释:
    你可以分割出这样两个连续子序列 : 
    1, 2, 3, 4, 5
    3, 4, 5
    示例 3：

    输入: [1,2,3,4,4,5]
    输出: False

 * 
 * 
 */
var isPossible = function(nums) {
    const map = new Map();
    for (let x of nums) {
        if (!map.has(x)) {
            map.set(x, new MinPriorityQueue());
        }
        if (map.has(x - 1)) {
            const prevLength = map.get(x - 1).dequeue()['priority'];
            if (map.get(x - 1).isEmpty()) {
                map.delete(x - 1);
            }
            map.get(x).enqueue(x, prevLength + 1);
        } else {
            map.get(x).enqueue(x, 1);
        }
    }
    for (let [key, value] of map.entries()) {
        if (value.front()['priority'] < 3) {
            return false;
        }
    }
    return true;
};