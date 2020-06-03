/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar1 = function(s) {
    let res  = " ";
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
            res = s[i];
            break;
        }
    }
    return res;
};

// map解
var firstUniqChar = function(s){
    let map = {};
    for(let i = 0; i < s.length;i++ ){
        if(map[s[i]] !== undefined){
            map[s[i]] = 0;
        }else{
            map[s[i]] = 1;
        }
    }
    for(let key in map){
        if(map[key] === 1){
            return key;
        }
    }
    return " ";
};