var LNode = /** @class */ (function () {
    function LNode(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    return LNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
    }
    DoublyLinkedList.prototype.append = function (data) {
        var newNode = new LNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    };
    DoublyLinkedList.prototype.prepend = function (data) {
        var newNode = new LNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    };
    DoublyLinkedList.prototype.delete = function (data) {
        if (this.head === null) {
            return;
        }
        var current = this.head;
        while (current) {
            if (current.data === data) {
                if (current.prev !== null) {
                    current.prev.next = current.next;
                }
                else {
                    this.head = current.next;
                }
                if (current.next !== null) {
                    current.next.prev = current.prev;
                }
                else {
                    this.tail = current.prev;
                }
                return;
            }
            current = current.next;
        }
    };
    DoublyLinkedList.prototype.printList = function () {
        var current = this.head;
        while (current) {
            console.log(' ' + current.data + ' ');
            if (current.next !== null) {
                console.log('↓↑');
            }
            current = current.next;
        }
    };
    DoublyLinkedList.prototype.reversePrintList = function () {
        var current = this.tail;
        while (current) {
            console.log(' ' + current.data + ' ');
            if (current.prev !== null) {
                console.log('↓↑');
            }
            current = current.prev;
        }
    };
    DoublyLinkedList.prototype.search = function (data) {
        var current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    };
    DoublyLinkedList.prototype.insertAfter = function (target, data) {
        if (this.head === null) {
            return;
        }
        var current = this.head;
        while (current) {
            if (current.data === target) {
                var newNode = new LNode(data);
                newNode.prev = current;
                newNode.next = current.next;
            }
        }
    };
    return DoublyLinkedList;
}());
var anotherList = new DoublyLinkedList();
anotherList.append(1);
anotherList.append(2);
anotherList.append(3);
anotherList.append(4);
anotherList.append(5);
anotherList.reversePrintList();
