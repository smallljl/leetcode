/*给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。
示例：
给定数组 nums = [-1, 0, 1, 2, -1, -4]，
满足要求的三元组集合为：
[
    [-1, 0, 1],
    [-1, -1, 2]
]*/
// 1.暴力求解
var threeSum1 = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) { // 每个人
        for (let j = i + 1; j < nums.length - 1; j++) { // 依次拉上其他每个人
            for (let k = j + 1; k < nums.length; k++) { // 去问剩下的每个人
                if (nums[i] + nums[j] + nums[k] === 0) { // 我们是不是可以一起组队
                    let resItem =[nums[i], nums[j], nums[k]];
                    res.push(resItem);
                }
            }
        }
    }
    return res;
};

//三数求并排序
var threeSum = function(nums) {
    let res = [];
    let set = new Set();
    for(let i = 0; i < nums.length - 2; i ++){
        for(let j = i+1; j < nums.length - 1; j++){
            for(let k = j+1; k < nums.length; k++ ){
                if(nums[i] + nums[j] + nums[k] === 0){
                    let item = [nums[i],nums[j],nums[k]].sort((a,b)=>{
                        if( a < 0 && b < 0){
                            return -(Math.abs(a) - Math.abs(b));
                        } 
                        return a - b;
                    });  // 排序
                    let key = item.join(""); 
                    if(!set.has(key)){
                        set.add(key);
                        res.push(item);
                    }
                }
            }
        }    
    }
    res.sort((a,b)=>{
        if(a[0] != b[0]){
            return a[0] - b[0];
        } else {
            if(a[1] != b[1]){
                return a[1] - b[1];
            } else {
                return a[2] - b[2];
            }
        }
    });
    return res;
};


// map优化
var threeSum2 = function(nums){
    let res = [];
    let hash = {};
    for(let i = 0; i < nums.length-2; i ++){
        for(let j = i+1; j < nums.length -1; j++){
            if(hash[nums[j]] !== undefined){
                res.push(hash[nums[j]].concat([nums[j]]));
                hash[nums[j]] = undefined;
            }else{
                let mark = 0 - nums[i] - nums[j];
                hash[mark] = [nums[i],nums[j]];
            }
        }
    }
    return res;
}

// 排序双指针
var threeSum = function(nums){
    let res = [];
    let len = nums.length;
    if(nums === null || len  < 3) return [];
    nums.sort((a,b)=>a-b);
    for(let i = 0; i < len-2; i++){
        if(nums[i] > 0) break;
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let L = i+1;
        let R = len-1;
        while(L < R){
            let sum = nums[i] + nums[L] + nums[R];
            if(sum === 0){
                res.push([nums[i],nums[L],nums[R]]);
                while(L < R && nums[L] === nums[L+1]) L++;
                while(L < R && nums[R] === nums[R-1]) R--;
                L++;
                R--;
            }
            else if(sum < 0) L++;
            else if(sum > 0) R--;
        }
    }
    return res;
}