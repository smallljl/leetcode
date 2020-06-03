function LinkedList (){
    function Node(data){
        this.data = data;
        this.next = null;
    }

    this.head = null;
    this.length = 0;

    // 1.追加方法
    LinkedList.prototype.append = function(data){
        if(!this.head){
            node = new Node(data);
            this.length++;
            return true;
        }
        function _append(node,data){
            if(!node.next){
                node.next = new Node(data);
                return true
            }
            return _append(node.next,data);
        }
        return _append(this.head,data,0) ? Boolean(this.length++):false ;

    };

    LinkedList.prototype.toString = function(){
        function _toString(node,str){
            if(!node){
                return str;
            } else {
                str += node.data + " ";
                return _toString(node.next,str);
            }
        }
        return _toString(this.head,"");
    };

    // 3.insert方法
    LinkedList.prototype.insert = function(position,data){
        function _insert(node,position,data,currentIndex){
            if(position < 0) return false;
            if(!node && position === 0){
                node = new Node(data);
                return true;
            }
            if(currentIndex === position-1){
                if(position === 0){
                    new Node(data).next= node;
                    return true;
                } else {
                    var newNode = new Node(data);
                    var nextNode = node.next;
                    node.next = newNode;
                    newNode.next = nextNode;
                    return true;
                }
            } else {
                return _insert(node.next,position,data,currentIndex+1);
            }
        }
        return _insert(this.head,position,data,0) ? Boolean(this.length++) : false;
    };

    LinkedList.prototype.removeAt = function(position){
        function _removeAt(node,position,currentIndex){
            if(!node || position<0) return false;
            if(currentIndex === position-1){
                node.next = node.next.next;
                return true;
            }else {
                return _removeAt(node.next,position,currentIndex+1)
            }
        }
        return _removeAt(this.head,position,0) ?  Boolean(this.length--) : false
    };


    LinkedList.prototype.update = function(position,data){
        function _update(node,position,data,currentIndex){
            if(!node || position <0 ) return false;
            if(currentIndex === position){
                node.data = data;
                return true;
            } else {
                return _update(node.next,position,data,currentIndex+1);
            }
        }
        return _update(this.head,position,data,0);
    };

    LinkedList.prototype.get = function(position){
        function _get(node,position,curIndex){
            if(position < 0 || !node) return null;
            if(curIndex === position){
                return node.data;
            } else {
                return _get(node.next,position,curIndex+1);
            }
        }
        return _get(this.head,position,0);
    };


    LinkedList.prototype.indexOf = function(data){
        function _indexOf(node,data,currentIndex){
            if(!node) return -1;
            if(node.data === data){
                return currentIndex;
            } else {
                return _indexOf(node.next,data,currentIndex+1);
            }
        }
        return _indexOf(this.head,data,0);
    };

    LinkedList.prototype.remove = function(data){
        return this.removeAt(this.indexOf(data));
    };

    LinkedList.prototype.isEmpty = function(){
        return this.length === 0;
    };

    LinkedList.prototype.size = function(){
        return this.length;
    };

    LinkedList.prototype.reverse = function(){
        function _reverse(node){
            if(!node || !node.next) return node;
            if(!node.next.next){
                var temp = node.next;
                temp.next = node;
                node.next = null;
                return temp;
            } else {
                var temp = _reverse(node.next);
                node.next.next = node;
                node.next = null;
                return temp;
            }
        }
        return _reverse(this.head)
    }
}