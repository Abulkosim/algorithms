var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
    return TrieNode;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TrieNode();
    }
    Trie.prototype.insert = function (word) {
        var current = this.root;
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char);
        }
        current.isEndOfWord = true;
    };
    Trie.prototype.search = function (word) {
        var node = this.traverse(word);
        return node !== null && node.isEndOfWord;
    };
    Trie.prototype.startsWith = function (prefix) {
        return this.traverse(prefix) !== null;
    };
    Trie.prototype.traverse = function (str) {
        var current = this.root;
        for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
            var char = str_1[_i];
            if (!current.children.has(char)) {
                return null;
            }
            current = current.children.get(char);
        }
        return current;
    };
    return Trie;
}());
// Example usage
var trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("apricot")); // true
console.log(trie.search("apr")); // false
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("apr")); // true
console.log(trie.startsWith("b")); // false
