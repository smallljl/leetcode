/*给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
示例 1：
输入："ab-cd"
输出："dc-ba"
示例 2：
输入："a-bC-dEf-ghIj"
输出："j-Ih-gfE-dCba"
示例 3：
输入："Test1ng-Leet=code-Q!"
输出："Qedo1ct-eeLg=ntse-T!"
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-only-letters*/
var reverseOnlyLetters = function(S) {
    let arr = S.split("");
    _swap(0,arr.length-1);
    return arr.join("");
    function _swap(i,j){
        while(i<j){
            while(!/([a-z]|[A-Z])/.test(arr[i]) && i < j){
                i++;
            }
            while(!/([a-z]|[A-Z])/.test(arr[j]) && i < j){
                j--;
            }
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
};
