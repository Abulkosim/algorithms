var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
    }
    SinglyLinkedList.prototype.append = function (data) {
        var newNode = new ListNode(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        var current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    };
    SinglyLinkedList.prototype.prepend = function (data) {
        var newNode = new ListNode(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    };
    SinglyLinkedList.prototype.delete = function (data) {
        if (this.head === null) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        var current = this.head;
        while (current.next !== null && current.next.data !== data) {
            current = current.next;
        }
        if (current.next !== null) {
            current.next = current.next.next;
        }
    };
    SinglyLinkedList.prototype.find = function (data) {
        var current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    };
    SinglyLinkedList.prototype.print = function () {
        var current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    };
    return SinglyLinkedList;
}());
var list = new SinglyLinkedList();
list.append('a');
list.append('b');
list.append('c');
list.prepend('d');
list.print();
console.log(list.find('b'));
