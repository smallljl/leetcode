/**
 * return 一个hash值
 * @param {*} str 
 * @param {*} size 
 */
function hashFunc(str,size){
    var hashCode = 0;
    for(var i = 0;i < str.length;i ++){
        hashCode = 37 * hashCode + str.charCodeAt(i);
    }
    return hashCode % size;
}

/**
 * hashTable的封装
 */
function HashTable(){

    this.storage = [];
    this.limit = 8;
    this.count = 0;
    /**
     * 
     */
    HashTable.prototype.hashFunc = hashFunc;

    /**
     * 
     * @param {*} key 
     * @param {*} val 
     */
    HashTable.prototype.put = function(key,val){
        var index = this.hashFunc(key,this.limit);
        var bucket = this.storage[index];
        if(bucket == null){
            bucket = [];
            this.storage[index] = bucket;
        }

        for(var i = 0; i<bucket.length;i++){
            var tuple = bucket[i];
            if(tuple[0] === key){
                tuple[1] = val;
            }
        }
        bucket.push([key,val]);
        this.count++;

        if(this.count > this.limit * 0.75){
            var newLimit = this.limit * 2;
            var newPrime = this.getPrime(newLimit);
            this.resize(newPrime);
        }

        return true;
    };

    /**
     * 
     * @param {*} key 
     */
    HashTable.prototype.get = function (key){
        var index = this.hashFunc(key,this.limit);
        var bucket = this.storage[index];
        if(bucket == null){
            return null;
        }
        for(var i = 0; i < bucket.length;i++){
            var tuple = bucket[i];
            if(tuple[0] === key){
                return tuple[1];
            }
        }
        return null;
    }

    /**
     * 
     * @param {*} key 
     */
    HashTable.prototype.remove = function(key){
        var index = this.hashFunc(key,this.limit);
        var bucket = this.storage[index];
        if(bucket == null){
            return false;
        }
        for(var i = 0;i<bucket.length;i++){
            var tuple = bucket[i];
            if(tuple[0] === key){
                bucket.splice(i,1);
                this.count--;

                if(this.count > 7 && this.count < this.limit*0.25){
                    var newLimit = Math.floor(this.limit/2);
                    var newPrime = this.getPrime(newLimit);
                    this.resize(newPrime);
                }

                return true;
            }            
        }
        return false;
    };

    HashTable.prototype.isEmpty = function(){
        return this.count === 0;
    };

    HashTable.prototype.size = function(){
      return this.count;
    };

    HashTable.prototype.resize = function (newLimit){
        var oldStorage = this.storage;
        this.limit = newLimit;
        this.count = 0;
        this.storage = [];

        for(var i = 0; i < oldStorage.length; i++){
            var bucket = oldStorage[i];
            if(bucket == null){
                continue;
            }
            for(var j = 0; j < bucket.length;j++){
                var tuple = bucket[j];
                this.put(tuple[0],tuple[1]);
            }
        }
    };

    /**
     * 判断是否是质数
     * @param {} num 
     */
    HashTable.prototype.isPrime = function(num){
       var temp = parseInt(Math.sqrt(num));
       for(var i = 2; i<=temp;i++){
           if(num % i === 0){
              return false;
           }
       }
       return true;
    };

    HashTable.prototype.getPrime = function(num){
      while(!this.getPrime(num)){
          num++;
      }
      return num;
    };
}

// /** 
// /**
//  * return 一个hash值
//  * @param {*} str 
//  * @param {*} size 
//  */
// function hashFunc(str,size){
//     var hashCode = 0;
//     for(var i = 0;i < str.length;i ++){
//         hashCode = 37 * hashCode + str.charCodeAt(i);
//     }
//     return hashCode % size;
// }

// /**
//  * hashTable的封装
//  */
// function HashTable(){
//     this.storage = [];
//     this.count = 0;
//     this.limit = 8; // 默认的长度

//     /**
//      * 
//      */
//     HashTable.prototype.hashFunc = hashFunc;

//     /**
//      * 
//      * @param {*} key 
//      * @param {*} val 
//      */
//     HashTable.prototype.put = function(key,val){
//         var index = this.hashFunc(key,this.limit);
//         // 取桶
//         var bucket = this.storage[index];
//         if(bucket == null){
//             bucket = [];
//             this.storage[index] = bucket;
//         }

//         // 存在key值就修改
//         for(var i = 0; i < bucket.length;i++){
//             var tuple = bucket[i];
//             if(key == tuple[0]){
//                 tuple[1] = val;
//                 return true;
//             }
//         }

//         // 不存在添加
//         bucket.push([key,val]);
//         this.count++;

//         if(this.count > this.limit*0.75){
//             var newLimit = this.limit*2;
//             var newPrime = this.getPrime(newLimit);
//             this.resize(newPrime);
//         }
//         return true;
//     }

//     /**
//      * 
//      * @param {*} key 
//      */
//     HashTable.prototype.get = function (key){
//         var index = this.hashFunc(key,this.limit);
//         var bucket = this.storage[index];
//         if(bucket == null){
//             return null;
//         }
//         for(var i = 0; i < bucket.length; i++){
//             var tuple = bucket[i];
//             if(tuple[0] == key){
//                 return tuple[1];
//             }
//         }
//         return null;
//     }

//     /**
//      * 
//      * @param {*} key 
//      */
//     HashTable.prototype.remove = function(key){
//         var index = this.hashFunc(key,this.limit);
//         var bucket = this.storage[index];
//         if(bucket == null){
//             return null;
//         }
//         for(var i = 0; i < bucket.length; i++){
//             var tuple = bucket[i];
//             if(tuple[0] == key){
//                 bucket.splice(i,1);
//                 this.count--;

//                 if(this.count > 7 && this.count < Math.floor(this.limit * 0.25)){
//                     var newLimit = Math.floor(this.limit/2);
//                     var newPrime = this.getPrime(newLimit);
//                     this.resize(newPrime)
//                 }

//                 return tuple[1];
//             }
//         }
//         return null;
//     }

//     HashTable.prototype.isEmpty = function(){
//         return this.count == 0;
//     }

//     HashTable.prototype.size = function(){
//         return this.count;
//     }

//     HashTable.prototype.resize = function (newLimit){
//         this.oldStorage = this.storage;

//         this.storage = [];
//         this.limit = newLimit;
//         this.count = 0;

//         for(var i = 0; i < this.oldStorage.length ; i++){
//             var bucket = this.oldStorage[i];
//             if(bucket == null){
//                 continue;
//             }
//             for(var j = 0; j < bucket.length; j++){
//                 var tuple = bucket[i];
//                 this.put(tuple[0],tuple[1]);
//             }
//         }
//     }

//     /**
//      * 判断是否是质数
//      * @param {} num 
//      */
//     HashTable.prototype.isPrime = function(num){
//         var temp = parseInt(Math.sqrt(num));

//         for(var  i = 2; i <= temp;i++){
//             if(num % i == 0){
//                 return false;
//             }
//         }
//         return true;
//     }

//     HashTable.prototype.getPrime = function(num){
//         while(!this.isPrime(num)){
//             num++;
//         }
//         return num;
//     }
// }

/**
 * return 一个hash值
 * @param {*} str 
 * @param {*} size 
 */
// function hashFunc(str,size){
//     var hashCode = 0;
//     for(var i = 0;i < str.length;i ++){
//         hashCode = 37 * hashCode + str.charCodeAt(i);
//     }
//     return hashCode % size;
// }

/**
 * hashTable的封装
 */
// function HashTable(){

//     this.storage = [];
//     this.count = 0;
//     this.limit = 8;
//     /**
//      * 
//      */
//     HashTable.prototype.hashFunc = hashFunc;

//     /**
//      * 
//      * @param {*} key 
//      * @param {*} val 
//      */
//     HashTable.prototype.put = function(key,val){
//        var index = this.hashFunc(key,this.limit);
//        var bucket = this.storage[index];
//        if(bucket == null){
//            bucket = [];
//            this.storage[index] = bucket;
//         }

//         for(var i = 0; i < bucket.length;i++){
//             var tuple = bucket[i];
//             if(tuple[0] == key){
//                 tuple[1] = val;
//                 return true;
//             }
//         }

//         bucket.push([key,val]);
//         this.count++;

//         if(this.count > this.limit * 0.75){
//             var newLimit = this.limit * 2;
//             var newPrime = this.getPrime(newLimit);
//             this.resize(newPrime)
//         }
       

//         return true;
//     }

//     /**
//      * 
//      * @param {*} key 
//      */
//     HashTable.prototype.get = function (key){
//         var index = this.hashFunc(key,this.limit);
//         var bucket = this.storage[index];
//         if(bucket == null){
//             return null;
//         }
//         for(var i = 0; i < bucket.length;i++){
//             var tuple = bucket[i];
//             if(tuple[0] == key){
//                 return tuple[1];
//             }
//         }
//         return null;
//     }

//     /**
//      * 
//      * @param {*} key 
//      */
//     HashTable.prototype.remove = function(key){
//         var index = this.hashFunc(key,this.limit);
//         var bucket = this.storage[index];
//         if(bucket == null){
//             return false;
//         }
//         for(var i = 0; i < bucket.length;i++){
//             var tuple = bucket[i];
//             if(tuple[0] == key){
//                 bucket.splice(i,1);
//                 this.count--;

//                 if(this.count > 7 && this.count < this.limit * 0.25){
//                     var newLimit = Math.floor(this.limit/2);
//                     var newPrime = this.getPrime(newLimit);
//                     this.resize(newPrime)
//                 }

//                 return true;
//             }
//         }
//         return false;
//     }

//     HashTable.prototype.isEmpty = function(){
//         return this.count == 0
//     }

//     HashTable.prototype.size = function(){
//        return this.count;
//     }

//     HashTable.prototype.resize = function (newLimit){
//         var oldStorage = this.storage;
//         this.count = 0;
//         this.limit = newLimit;
//         this.storage = [];

//         for(var i = 0; i < oldStorage.length;i++){
//             var bucket = oldStorage[i];
//             if(bucket == null){
//                 continue;
//             }
//             for(var j = 0; j < bucket.length; j++){
//                 var tuple = bucket[i];
//                 this.push(tuple[0],tuple[1]);
//             }
//         }
//     }

//     /**
//      * 判断是否是质数
//      * @param {} num 
//      */
//     HashTable.prototype.isPrime = function(num){
//        var temp = parseInt(Math.sqrt(num));
//        for(var i = 0; i <= temp;i++){
//            if(num % i == 0){
//                return false;
//            }
//        }
//        return true;
//     }

//     HashTable.prototype.getPrime = function(num){
//       while(!this.isPrime(num)){
//           num++;
//       }
//       return num;
//     }
// }
