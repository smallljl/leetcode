function Set(){
    this.items = {};

    Set.prototype.has = function(value){
       return this.items.hasOwnProperty(value);
    };

    Set.prototype.add = function(value){
       if(this.has(value)) return false;
       this.items[value] = value;
       return true;
    };

    Set.prototype.remove = function(value){
       if(!this.has(value)) return false;
       delete this.items[value];
       return true;
    };

    Set.prototype.size = function(){
       return Object.keys(this.items).length;
    };

    Set.prototype.clear = function(){
       this.items = {};
    };

    Set.prototype.values = function(){
       return Object.keys(this.items);
    };

    // 并集
    Set.prototype.union = function(otherSet){
      var unionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len;i++){
          unionSet.add(values[i]);
      }
      values = otherSet.values();
      for(var i = 0,len = values.length; i < len;i++){
        unionSet.add(values[i]);
      }
      return unionSet;
    };

    // 交集
    Set.prototype.intersection = function(otherSet){
      var intersectionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len;i++){
        var item = values[i];  
        if(otherSet.has(item)){
            intersectionSet.add(item);
        }
      }
      return intersectionSet;
    };

    // 差集
    Set.prototype.difference = function(otherSet){
      var differenceSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len;i++){
        var item = values[i];  
        if(!otherSet.has(item)){
            differenceSet.add(item);
        }
      }
      return differenceSet;
    };

    Set.prototype.subset = function(otherSet){
        var values = this.values();
      for(var i = 0,len = values.length; i < len;i++){
        var item = values[i];  
        if(!otherSet.has(item)){
            return false;
        }
      }
      return true;
    }
}

/****************
 * 
 * function Set(){
    this.items = {};

    Set.prototype.has = function(value){
       
    }

    Set.prototype.add = function(value){
       
    }

    Set.prototype.remove = function(value){
       
    }

    Set.prototype.size = function(){
     
    }

    Set.prototype.clear = function(){
      
    }

    Set.prototype.values = function(){
       
    }

    // 并集
    Set.prototype.union = function(otherSet){
      
    }

    // 交集
    Set.prototype.intersection = function(otherSet){
      
    }

    // 差集
    Set.prototype.difference = function(otherSet){
       
    }

    Set.prototype.subset = function(otherSet){
        
    }
}

 * 
 * 
 * 11111111111111111111111111111111111111111111111111111111111111111
 * 
 * function Set(){
    this.items = {};

    Set.prototype.has = function(value){
        return this.items.hasOwnProperty(value);
    }

    Set.prototype.add = function(value){
        if(this.has(value)){
            return false;
        }
        this.items[value] = value;
        return true;
    }

    Set.prototype.remove = function(value){
        if(!this.has(value)){
            return false;
        }
        delete this.items[value]
        return true;
    }

    Set.prototype.size = function(){
        return Object.keys(this.items).length;
    }

    Set.prototype.clear = function(){
        this.items = {};
    }

    Set.prototype.values = function(){
        return Object.keys(this.items);
    }

    Set.prototype.union = function(otherSet){
        var uniconSet = new Set();
        
        var values = this.values();
        for(var i = 0,len = values.length;i < len; i++){
            uniconSet.add(values[i]);
        }

        values = otherSet.values();
        for(var i = 0,len = values.length; i < len; i++){
            uniconSet.add(values[i]);
        }

        return uniconSet;
    }

    Set.prototype.intersection = function(otherSet){
        var insersectionSet = new Set();
        var values = this.values();
        for(var i = 0,len = values.length; i< len;i++){
            var item = values[i];
            if(otherSet.has(item)){
                insersectionSet.add(item);
            }
        }
        return insersectionSet;
    }

    Set.prototype.difference = function(otherSet){
        var differenceSet = new Set();
        var values = this.values();
        for(var i = 0,len = values.length; i < len; i++){
            var item = values[i];
            if(!otherSet.has(item)){
                differenceSet.add(item);
            }
        }
        return differenceSet;
    }

    Set.prototype.subset = function(otherSet){
        var values = this.values();
        for(var i = 0,len = values.length; i < len;i++){
            var item = values[i];
            if(!otherSet.has(item)){
                return false;
            }
        }
        return true;
    }
}
 * 

 2222222222222222222222222222222222222222222222222222222

 function Set(){
    this.items = {};

    Set.prototype.has = function(value){
        // hasOwnProperty
       return this.items.hasOwnProperty(value);
    }

    Set.prototype.add = function(value){
       if(this.has(value)){
           return false;
       }
       this.items[value] = value;
       return true;
    }

    Set.prototype.remove = function(value){
       if(!this.has(value)){
           return false;
       }
       delete this.items[value];
       return true;
    }

    Set.prototype.size = function(){
        return Object.keys(this.items).length;
    }

    Set.prototype.clear = function(){
      this.items  = {};
    }

    Set.prototype.values = function(){
       return Object.keys(this.items);
    }

    // 并集
    Set.prototype.union = function(otherSet){
      var unionSet = new Set();
      var values = this.values();
      for(var i = 0; i < values.length; i++){
          unionSet.add(values[i]);
      }
      values = otherSet.values();
      for(var i = 0,len = values.length; i < len; i++){
          unionSet.add(values[i]);
      }
      return unionSet;
    }

    // 交集
    Set.prototype.intersection = function(otherSet){
      var intersectionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length;i<len;i++){
        var item = values[i];  
        if(otherSet.has(item)){
            intersectionSet.add(item);
        }
      }
      return intersectionSet;
    }

    // 差集
    Set.prototype.difference = function(otherSet){
       var differenceSet = new Set();
       var values = this.values();
       for(var i = 0,len = values.length; i < len; i++){
            var item = values[i];
            if(!otherSet.has(item)){
                differenceSet.add(item);
            }
       }
       return differenceSet;
    }

    Set.prototype.subset = function(otherSet){
        var values = this.values();
        for(var i =0,len = values.length; i < len; i++){
            var item = values[i];
            if(!otherSet.has(item)){
                return false;
            }
        }
    }
    return true;
}


333333333333333333333333333333333333333333333333333333333333333333333333333333

function Set(){
    this.items = {};

    Set.prototype.has = function(value){
       return this.items.hasOwnProperty(value);
    }

    Set.prototype.add = function(value){
       if(this.has(value)) return false;
       this.items[value] = value;
       return true;
    }

    Set.prototype.remove = function(value){
       if(!this.has(value)) return false;
       delete this.items[value];
       return true;
    }

    Set.prototype.size = function(){
       return Object.keys(this.items).length;
    }

    Set.prototype.clear = function(){
       this.items = {};
    }

    Set.prototype.values = function(){
       return Object.keys(this.items);
    }

    // 并集
    Set.prototype.union = function(otherSet){
      var unionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len; i++){
          unionSet.add(values[i]);
      }
      values = otherSet.values();
      for(var i = 0,len = values.length; i < len;i ++){
          unionSet.add(values[i]);
      }
      return unionSet;
    }

    // 交集
    Set.prototype.intersection = function(otherSet){
      var intersectionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len; i++){
          var item = values[i];
          otherSet.has(item) && intersectionSet.add(item);
      }
      return intersectionSet;
    }

    // 差集
    Set.prototype.difference = function(otherSet){
        var differenceSet = new Set();
        var values = this.values();
        for(var i = 0,len = values.length; i < len; i++){
            var item = values[i];
            otherSet.has(item) || differenceSet.add(item);
        }
        return differenceSet;
    }

    Set.prototype.subset = function(otherSet){
        var values = this.values();
        for(var i = 0,len = values.length; i < len; i++){
            var item = values[i];
            if(!otherSet.has(item)){
                return false;
            }
        }
        return true;
    }
}

44444444444444444444444444444444444444444444444444444444444444444444

function Set(){
    this.items = {};

    Set.prototype.has = function(value){
       return this.items.hasOwnProperty(value);
    }

    Set.prototype.add = function(value){
       if(this.has(value)){
           return false;
       }
       this.items[value] = value;
       return true;
    }

    Set.prototype.remove = function(value){
       if(!this.has(value)){
           return false;
       }
       delete this.items[value];
       return true;
    }

    Set.prototype.size = function(){
        return Object.keys(this.items).length;
    }

    Set.prototype.clear = function(){
      this.items = {};
    }

    Set.prototype.values = function(){
       return Object.keys(this.items);
    }

    // 并集
    Set.prototype.union = function(otherSet){
      var unionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len; i++){
        unionSet.add(values[i]);
      }
      values = otherSet.values();
      for(var i = 0,len = values.length; i < len; i++){
        unionSet.add(values[i]);
      }
      return unionSet;
    }

    // 交集
    Set.prototype.intersection = function(otherSet){
      var intersectionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len; i ++){
         var item = values[i];  
         otherSet.has(item) && intersectionSet.add(item);
      }
      return intersectionSet;
    }

    // 差集
    Set.prototype.difference = function(otherSet){
        var differenceSet = new Set();
        var values = this.values();
        for(var i = 0,len = values.length; i < len; i ++){
           var item = values[i];  
           !otherSet.has(item) && differenceSet.add(item);
        }
        return differenceSet;
    }

    Set.prototype.subset = function(otherSet){
        var values = this.values();
        for(var i = 0,len = values.length; i < len; i ++){
           var item = values[i];  
           if(!otherSet.has(item)) return false;
        }   
        return true;
    }
}

 * 
 55555555555555555555555555555555555555555555555555555555555555555


 function Set(){
    this.items = {};

    Set.prototype.has = function(value){
       return this.items.hasOwnProperty(value);
    }

    Set.prototype.add = function(value){
       if(this.has(value)){
           return false;
       }
       this.items[value] = value;
       return true;
    }

    Set.prototype.remove = function(value){
       if(!this.has(value)) return false;
       delete this.items[value];
       return true;
    }

    Set.prototype.size = function(){
        return Object.keys(this.items).length;
    }

    Set.prototype.clear = function(){
        this.items = {};
    }

    Set.prototype.values = function(){
       return Object.keys(this.items);
    }

    // 并集
    Set.prototype.union = function(otherSet){
      var unionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len;i++){
          unionSet.add(values[i]);
      }
      values = otherSet.values();
      for(var i = 0,len = values.length; i < len;i++){
        unionSet.add(values[i]);
      }
      return unionSet;
    }

    // 交集
    Set.prototype.intersection = function(otherSet){
      var intersectionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len;i++){
        var item = values[i];
        otherSet.has(item) && intersectionSet.add(values[i]);
      }
      return intersectionSet
    }

    // 差集
    Set.prototype.difference = function(otherSet){
        var differenceSet = new Set();
        var values = this.values();
        for(var i = 0,len = values.length; i < len;i++){
          var item = values[i];
          !otherSet.has(item) && differenceSet.add(values[i]);
        }
        return differenceSet
    }

    Set.prototype.subset = function(otherSet){
        var values = this.values();
        for(var i = 0,len = values.length; i < len;i++){
          var item = values[i];
          if(otherSet.has(item)) return false;
        }
        return true
    }
}
 * 

 66666666666666666666666666666666666666666666666666666

function Set(){
    this.items = {};

    Set.prototype.has = function(value){
       return this.items.hasOwnProperty(value);
    }

    Set.prototype.add = function(value){
       if(this.has(value)){
          return false;
       }
       this.items[value] = value;
       return true;
    }

    Set.prototype.remove = function(value){
       if(!this.has(value)) return false;
       delete this.items[value];
       return true
    }

    Set.prototype.size = function(){
      return Object.keys(this.items).length;
    }

    Set.prototype.clear = function(){
      this.items = {};
    }

    Set.prototype.values = function(){
       return Object.keys(this.items);
    }

    // 并集
    Set.prototype.union = function(otherSet){
      var unionSet = new Set();
      var  values = this.values();
      for(var i = 0,len = values.length; i < len; i++){
          var item = values[i];
          unionSet.add(item)
      }
      values = otherSet.values();
      for(var i = 0,len = values.length; i < len; i++){
        var item = values[i];
        unionSet.add(item)
      }
      return unionSet;
    }

    // 交集
    Set.prototype.intersection = function(otherSet){
       var intersectionSet = new Set();
       var values = this.values();
       for(var i = 0,len = values.length; i < len; i++){
            var item = values[i];
            if(otherSet.has(item)) intersectionSet.add(item);
       }
       return intersectionSet;
    }

    // 差集
    Set.prototype.difference = function(otherSet){
       var differenceSet = new Set();
       var values = this.values();
       for(var i = 0,len = values.length; i < len; i++){
            var item = values[i];
            !otherSet.has(item) && differenceSet.add(item)
       }
       return differenceSet;
    }

    Set.prototype.subset = function(otherSet){
        var values = this.values();
        for(var i = 0; i < values.length; i++){
            var item = values[i];
            if(!otherSet.has(item)) return false;
        }
        return true;
    }
}

 * 
 * 
 * 77777777777777777777777777777777777777777777777777777777777777
 * 

function Set(){
    this.items = {};

    Set.prototype.has = function(value){
       return this.items.hasOwnProperty(value);
    }

    Set.prototype.add = function(value){
       if(this.has(value)) return false
       this.items[value] = value;
       return true;
    }

    Set.prototype.remove = function(value){
       if(!this.has(value)) return false;
       delete this.items[value];
       return true;
    }

    Set.prototype.size = function(){
        return Object.keys(this.items).length;
    }

    Set.prototype.clear = function(){
        this.items = {};
    }

    Set.prototype.values = function(){
       return Object.keys(this.items);
    }

    // 并集
    Set.prototype.union = function(otherSet){
      var unionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len; i++){
        var item = values[i];  
        unionSet.add(item);
      }
      values = otherSet.values();
      for(var i = 0,len = values.length; i < len; i++){
        var item = values[i];  
        unionSet.add(item);
      }
      return unionSet;
    }

    // 交集
    Set.prototype.intersection = function(otherSet){
      var intersectionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i<len;i++){
        var item = values[i];  
        if(otherSet.has(item)){
            intersectionSet.add(item);
        }
      }
      return intersectionSet;
    }

    // 差集
    Set.prototype.difference = function(otherSet){
       var differenceSet = new Set();
       var values = this.values();
       for(var i = 0,len = values.length; i < len; i++){
           var item = values[i];
           if(!otherSet.has(item)){
               differenceSet.add(item);
           }
       }
       return differenceSet;
    }

    Set.prototype.subset = function(otherSet){
        var values = this.values();
        for(var i = 0,len = values.length; i < len; i++){
            var item = values[i];
            if(!otherSet.has(item)) return false;
        }
        return true;
    }
}
 * 
 * 
 * 88888888888888888888888888888888888888888888888888888888
 * 
 * function Set(){
    this.items = {};

    Set.prototype.has = function(value){
       return this.items.hasOwnProperty(value);
    }

    Set.prototype.add = function(value){
       if(this.has(value)) return false;
        this.items[value] = value;
        return true;
    }

    Set.prototype.remove = function(value){
       if(!this.has(value)) return false;
       delete this.items[value];
       return true;
    }

    Set.prototype.size = function(){
        return Object.keys(this.items).length;
    }

    Set.prototype.clear = function(){
       this.items = {};
    }

    Set.prototype.values = function(){
       return Object.keys(this.items);
    }

    // 并集
    Set.prototype.union = function(otherSet){
      var unionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len;i++){
          unionSet.add(values[i]);
      }
      values = otherSet.values();
      for(var i = 0,len = values.length; i < len;i++){
        unionSet.add(values[i]);
      }
      return unionSet;
    }

    // 交集
    Set.prototype.intersection = function(otherSet){
      var intersectionSet = new Set();
      var values = this.values();
      for(var i =0,len = values.length; i < len; i++){
        var item = values[i];
        if(otherSet.has(item)) intersectionSet.add(item);
      }
      return intersectionSet;
    }

    // 差集
    Set.prototype.difference = function(otherSet){
       var differenceSet = new Set();
       var values = this.values();
       for(var i = 0,len = values.length; i < len;i++){
           var item = values[i];
           if(!otherSet.has(item)) differenceSet.add(item);
       }
       return differenceSet;
    }

    Set.prototype.subset = function(otherSet){
        var values = this.values();
        for(var i = 0,len = values.length; i < len; i++){
            if(!otherSet.has(values[i])) return false;
        }
        return true;
    }
}
 * 
 * 
 * 9999999999999999999999999999999999999999999999999999999999999999999999
 * 
 * 
 * function Set(){
    this.items = {};

    Set.prototype.has = function(value){
       return this.items.hasOwnProperty(value);
    }

    Set.prototype.add = function(value){
       if(this.has(value)) return false;
       this.items[value] = value;
       return true
    }

    Set.prototype.remove = function(value){
       if(!this.has(value)) return false;
       delete this.items[value]
       return true;
    }

    Set.prototype.size = function(){
      return Object.keys(this.items).length;
    }

    Set.prototype.clear = function(){
      this.items = {};
    }

    Set.prototype.values = function(){
       return Object.keys(this.items);
    }

    // 并集
    Set.prototype.union = function(otherSet){
      var unionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len;i++){
          unionSet.add(values[i]);
      } 
      values = otherSet.values();
      for(var i = 0,len = values.length; i < len;i++){
        unionSet.add(values[i]);
      }
      return unionSet;
    }

    // 交集
    Set.prototype.intersection = function(otherSet){
      var insersectionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len;i++){
        var item = values[i];
        if(otherSet.has(item))
        insersectionSet.add(values[i]);
      }
      return insersectionSet;
    }

    // 差集
    Set.prototype.difference = function(otherSet){
        var differenceSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len;i++){
        var item = values[i];
        if(!otherSet.has(item))
        differenceSet.add(values[i]);
      }
      return differenceSet;
    }

    Set.prototype.subset = function(otherSet){
        var values = this.values();
        for(var i = 0,len = values.length; i < len;i++){
          var item = values[i];
          if(!otherSet.has(item))
          return false;
        }
        return true;
    }
}
 * 
 * 
 * 
 * 10000000000000000000000000000000000000000000000000000000000000000
 * 
 * 
 * function Set(){
    this.items = {};

    Set.prototype.has = function(value){
       return this.items.hasOwnProperty(value);
    }

    Set.prototype.add = function(value){
       if(this.has(value)) return false;
       this.items[value] = value;
       return true;
    }

    Set.prototype.remove = function(value){
       if(!this.has(value)) return false;
       delete this.items[value];
       return true;
    }

    Set.prototype.size = function(){
        return Object.keys(this.items).length;
    }

    Set.prototype.clear = function(){
      this.items = {};
    }

    Set.prototype.values = function(){
       return Object.keys(this.items);
    }

    // 并集
    Set.prototype.union = function(otherSet){
      var unionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len; i++){
        unionSet.add(values[i]);
      }
      values = otherSet.values();
      for(var i = 0,len = values.length; i < len; i++){
        unionSet.add(values[i]);
      }
      return unionSet;
    }

    // 交集
    Set.prototype.intersection = function(otherSet){
      var intersectionSet = new Set();
      var values = this.values();
      for(var i = 0,len = values.length; i < len;i++){
        var item = values[i];  
        if(otherSet.has(item))
        intersectionSet.add(item)
      }
      return intersectionSet;
    }

    // 差集
    Set.prototype.difference = function(otherSet){
       var differenceSet = new Set();
       var values = this.values();
       for(var i = 0,len = values.length; i < len; i++){
        var item = values[i]; 
        if(!otherSet.has(item)) differenceSet.add(item);
       }
       return differenceSet;
    }

    Set.prototype.subset = function(otherSet){
        var values = this.values();
        for(var i = 0,len = values.length; i < len; i++){
         var item = values[i]; 
         if(!otherSet.has(item)) return false;
        }
        return true;
    }
}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */