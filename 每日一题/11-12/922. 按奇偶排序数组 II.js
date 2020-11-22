/**
 *  给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

    对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

    你可以返回任何满足上述条件的数组作为答案。

     

    示例：

    输入：[4,2,5,7]
    输出：[4,5,2,7]
    解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
     

    提示：

    2 <= A.length <= 20000
    A.length % 2 == 0
    0 <= A[i] <= 1000
     
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * 
 * 
 */
var sortArrayByParityII = function(A) {
    let len = A.length;
    let even = 1;
    let odd = 0;
    let res = [];
    for(let i = 0; i < len; i++){
        if(A[i] % 2 === 0){
            res[odd] = A[i];
            odd += 2;
        } else {
            res[even] = A[i];
            even += 2;
        }
    }
    return res;
};


var sortArrayByParityII = function(A) {
    let len = A.length;
    // let i = 0; // 指向偶数
    let j = 1; // 指向基数
    for(let i = 0; i < len; i+=2){
        if(A[i] & 1){ // 是奇数
            while(A[j] & 1){  // 是奇数
                j+=2;
            }
            swap(A,i,j)
        }
    }
    return A;
};