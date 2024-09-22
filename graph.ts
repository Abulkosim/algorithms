class Graph<T> {
  private adjacencyList: Map<T, T[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: T, vertex2: T): void {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList.get(vertex1)!.push(vertex2);
    this.adjacencyList.get(vertex2)!.push(vertex1);
  }

  removeEdge(vertex1: T, vertex2: T): void {
    this.adjacencyList.set(vertex1, this.adjacencyList.get(vertex1)!.filter(v => v !== vertex2));
    this.adjacencyList.set(vertex2, this.adjacencyList.get(vertex2)!.filter(v => v !== vertex1));
  }

  removeVertex(vertex: T): void {
    while (this.adjacencyList.get(vertex)!.length) {
      const adjacentVertex = this.adjacencyList.get(vertex)!.pop()!;
      this.removeEdge(vertex, adjacentVertex);
    }
    this.adjacencyList.delete(vertex);
  }

  getVertices(): T[] {
    return Array.from(this.adjacencyList.keys());
  }

  getNeighbors(vertex: T): T[] {
    return this.adjacencyList.get(vertex) || [];
  }

  print(): void {
    for (let [vertex, neighbors] of this.adjacencyList) {
      console.log(vertex, "->", neighbors.join(", "));
    }
  }

  bfs(start: T): T[] {
    const visited: Set<T> = new Set();
    const queue: T[] = [start];
    const result: T[] = [];

    visited.add(start);

    while (queue.length > 0) {
      const vertex = queue.shift()!;
      result.push(vertex);

      for (const neighbor of this.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  dfs(start: T): T[] {
    const visited: Set<T> = new Set();
    const result: T[] = [];

    const dfsHelper = (vertex: T) => {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of this.getNeighbors(vertex)) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };

    dfsHelper(start);
    return result;
  }
}

const graphExample = new Graph<string>();

graphExample.addEdge("A", "B");
graphExample.addEdge("A", "C");
graphExample.addEdge("B", "D");
graphExample.addEdge("C", "D");
graphExample.addEdge("D", "E");
graphExample.addEdge("E", "F");

console.log("Graph structure:");
graphExample.print();

console.log("\nBFS starting from A:", graphExample.bfs("A"));
console.log("DFS starting from A:", graphExample.dfs("A"));