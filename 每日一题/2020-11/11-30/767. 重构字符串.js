/**
 *  给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。

    若可行，输出任意可行的结果。若不可行，返回空字符串。

    示例 1:

    输入: S = "aab"
    输出: "aba"
    示例 2:

    输入: S = "aaab"
    输出: ""

 * 
 * 
 */

// 过不了
var reorganizeString = function(S) {
    var counts = {};
    for(let i = 0; i < S.length; i++){
        var c = S.charAt(i);
        if(!counts[c]){
            counts[c] = 0;
        } 
        counts[c] ++;
    }  

    var heap = new Heap();
    for(var key in counts){
        if(counts[key] > (S.length+1) / 2) {
            return "";
        }
        heap.insert({val:counts[key],content:key});
    }

    var res = [];
    while(heap.size() >= 2){
        var node1 = heap.extractMax();
        var node2 = heap.extractMax();

        res.push(node1.content);
        res.push(node2.content);

        node1.val --;
        node2.val --;

        if(node1.val > 0){
            heap.insert(node1);
        }
        if(node2.val > 0){
            heap.insert(node2);
        }
    }

    if(heap.size() > 0){
        var node1 = heap.extractMax();
        res.push(node1.content);
    }

    return res.join("");

};