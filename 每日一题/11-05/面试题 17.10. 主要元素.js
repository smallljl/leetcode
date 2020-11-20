/**
 * 
 *  数组中占比超过一半的元素称之为主要元素。给定一个整数数组，找到它的主要元素。若没有，返回-1。

    示例 1：

    输入：[1,2,5,9,5,9,5,5,5]
    输出：5
     

    示例 2：

    输入：[3,2]
    输出：-1
     

    示例 3：

    输入：[2,2,1,1,1,2,2]
    输出：2
 * 
 * 
 */


// map 解法
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map =  {};
    let n = nums.length;
    let middle = Math.floor(n / 2);
    for(let i = 0; i < n; i ++){
        if(!map[nums[i]])
            map[nums[i]] = 1;
        else
            map[nums[i]] ++;
        if(map[nums[i]] > middle)
            return nums[i];
    }
    return -1;
};




/**
 * 取随机数
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n  = nums.length;
    let len = n;
    let middle = Math.floor( n / 2);
    while(len){
        const index = Math.floor(Math.random() * n);
        const majority = nums[index];
        let count = 0;
        for(const num of nums){
            if(num === majority && ++count > middle)
                return num
        }
        len--;
    }
    return -1;
};


/**
 * 
 * 32 bit 暂时未看懂
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = nums.length;
    let majority = 0;
    for(let i = 0; i < 32 ; i ++){
       let mask = 1 << i;
       let count = 0;
       for(const num of nums){
           if(num & mask)  ++count;
       }
       if(count > Math.floor(n / 2) ) majority |= mask;
    }
    return majority;
};


/**
 * 摩尔投票法
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let major = nums[0];
    let num = 1;

    for (let i = 1; i < nums.length; i++) {
        if (major === nums[i]) {
            num++;
        } else {
            num--;
        }
        if (num === 0) {
            major = nums[i];
            num = 1;
        }
    }

    let count  = 0;
    for(let i = 0; i < nums.length; i ++){
        if(nums[i] === major) count++;
    }
    if(count > Math.floor(nums.length / 2)){
        return major;
    } 
    return -1;
};
 

/**
 * 取中间
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums = nums.sort();
    let major =  nums[Math.floor(nums.length / 2)]  

    let count  = 0;
    for(let i = 0; i < nums.length; i ++){
        if(nums[i] === major) count++;
    }
    if(count > Math.floor(nums.length / 2)){
        return major;
    } 
    return -1;
};