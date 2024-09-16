class TrieNode {
  children: Map<string, TrieNode> = new Map();
  isEndOfWord: boolean = false;
}

class Trie {
  private root: TrieNode = new TrieNode();

  insert(word: string): void {
    let current = this.root;
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char)!;
    }
    current.isEndOfWord = true;
  }

  search(word: string): boolean {
    const node = this.traverse(word);
    return node !== null && node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    return this.traverse(prefix) !== null;
  }

  private traverse(str: string): TrieNode | null {
    let current = this.root;
    for (const char of str) {
      if (!current.children.has(char)) {
        return null;
      }
      current = current.children.get(char)!;
    }
    return current;
  }
}

// Example usage
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");

console.log(trie.search("apple"));    // true
console.log(trie.search("app"));      // true
console.log(trie.search("apricot"));  // true
console.log(trie.search("apr"));      // false
console.log(trie.startsWith("app"));  // true
console.log(trie.startsWith("apr"));  // true
console.log(trie.startsWith("b"));    // false