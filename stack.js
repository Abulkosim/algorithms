var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.print = function () {
        console.log(this.items);
    };
    Stack.prototype.clear = function () {
        this.items = [];
    };
    return Stack;
}());
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
