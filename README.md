# Dijkstra's Algorithm in JavaScript

## Overview
This project implements **Dijkstra's Algorithm** in JavaScript to find the **shortest path** in a weighted graph.  
It calculates the minimum distance from a **starting vertex** to all other vertices using a **graph represented as an object**.

---

## Features
- Calculate shortest distances from a start vertex to all other vertices.
- Works with any weighted graph (positive weights only).
- Implements Dijkstra’s algorithm with a simple priority selection method.

---

## How It Works
1. Initialize all vertex distances to infinity, except the start vertex which is 0.
2. Maintain a set of **visited vertices**.
3. At each step:
   - Select the unvisited vertex with the **smallest distance**.
   - Update distances to all of its neighbors if a **shorter path** is found.
4. Repeat until all vertices have been visited.

---

## Usage

### Example Graph
```javascript
const graph = {
   'A': { 'B': 4, 'C': 2 },
   'B': { 'A': 4, 'C': 5, 'D': 10 },
   'C': { 'A': 2, 'B': 5, 'D': 3 },
   'D': { 'B': 10, 'C': 3 }
};

Running the Algorithm
const distances = dijkstra(graph, 'A');
console.log(distances);
Expected Output
{
  A: 0,
  B: 4,
  C: 2,
  D: 5
}
