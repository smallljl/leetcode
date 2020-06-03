function doubleLinkedList (){
    function Node(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    this.head = null;
    this.tail = null;
    this.length = 0;

    doubleLinkedList.prototype.append = function(data){
        if(!this.head){
            this.head = new Node(data);
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

    doubleLinkedList.prototype.toString = function(){
        return this.backwardString();
    };

    doubleLinkedList.prototype.backwardString = function(){
        function _backwardString(node,str){
            if(!node){
                return str;
            } else {
                str += node.data+" ";
                return _backwardString(node.next,str)
            }
        }
        return _backwardString(this.head,"");
    };

    doubleLinkedList.prototype.fowardString = function(){
        function _fowardString(node,str){
            if(!node){
                return str;
            } else {
                str += node.data + " ";
                return _fowardString(node.prev,str);
            }
        }
        return _fowardString(this.tail,"");
    };

    doubleLinkedList.prototype.insert = function(position,data){
        if(position < 0 || position > this.length) return false;
        var newNode = new Node(data);
        var current = this.head;
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            if(position === 0){
                this.head.next.prev = null;
                this.head = this.head.next;
            } else if( position === this.length){
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
            } else {
                var index = 0;
                var previous = null;
                while(index++ < position){
                    previous  = current;
                    current = current.next;
                }
                previous.next = newNode;
                newNode.next = current;
                current.prev = newNode;
                newNode.prev = previous;
            }
            this.length++;
            return current.data;
        }
    };

    doubleLinkedList.prototype.get = function (position){
        function _get(node,position,currentIndex){
            if(position < 0 || !node){
                return -1;
            }
            if(currentIndex === position){
                return node.data;
            }else {
                return _get(node.next,position,currentIndex+1);
            }
        }
        return _get(this.head,position,0);
    };

    doubleLinkedList.prototype.indexOf = function(data){
        function _indexOf(node,data,currentIndex){
            if(!node){
               return -1;
            }
            if(node.data === data){
                return currentIndex;
            } else {
                return _indexOf(node.next,data,currentIndex+1);
            }
        }
        return _indexOf(this.head,data,0);
    };

    doubleLinkedList.prototype.updata = function(position, newData){
        function _updata(node,position,data,currentIndex){
            if(!node) return false;
            if(currentIndex === position){
                node.data = data;
                return true;
            }else{
                return _updata(node.next,position,data,currentIndex+1);
            }
        }
        return _updata(this.head,position,newData,0);
    };

    doubleLinkedList.prototype.removeAt = function(position){
        if(position < 0 || position >= this.length) return null;
        var current = this.head;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        } else {
            if(position == 0){
                this.head.next.prev = null;
                this.head = this.head.next;
            } else if(position == this.length-1){
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
            } else {
                var index = 0;
                var previous = null;
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.length--;
            return true;
        }
    };

    doubleLinkedList.prototype.remove = function(data){
        var index = this.indexOf(data);
        return this.remove(index);
    };

    doubleLinkedList.prototype.isEmpty = function(){
        return this.length === 0;
    };

    doubleLinkedList.prototype.size = function(){
        return this.length;
    };

    doubleLinkedList.prototype.getHead = function(){
        return this.head.data;
    };

    doubleLinkedList.prototype.getTail = function(){
        return this.tail.data;
    };
}