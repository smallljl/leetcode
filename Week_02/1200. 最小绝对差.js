/**
 * 
 * 给你个整数数组 arr，其中每个元素都 不相同。
   请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。
    示例 1：
    输入：arr = [4, 2, 1, 3]
    输出：[[1, 2], [2, 3], [3, 4]]
    示例 2：
    输入：arr = [1, 3, 6, 10, 15]
    输出：[[1, 3]]
    示例 3：
    输入：arr = [3, 8, -10, 23, 19, -4, -14, 27]
    输出：[[-14, -10], [19, 23], [23, 27]]
    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/minimum-absolute-difference
 * 
 * 
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b);
    let min = Infinity;
    let j = 0;
    let k = 0;
    let res  = [];
    for(let i = 1; i < arr.length;i++){
        k = Math.abs(arr[i] - arr[j]); 
        if(k < min){
            res = [];
            min = k;
            res.push([arr[j],arr[i]])
        }else if(k === min){
            res.push([arr[j],arr[i]])
        }
        j++;
    }
    return res;
  };

let arr = [4,2,1,3];
minimumAbsDifference(arr);