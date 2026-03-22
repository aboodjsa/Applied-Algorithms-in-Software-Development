// algorithmndj.js

/**
 * Dijkstra's Algorithm
 * Finds the shortest distances from a start vertex to all other vertices
 * in a weighted graph represented as an adjacency object.
 */

function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();

    // Initialize all distances to Infinity, start vertex to 0
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;

    while (visited.size < Object.keys(graph).length) {
        // Select the unvisited vertex with the smallest distance
        let currentVertex = null;
        let smallestDistance = Infinity;

        for (let vertex in distances) {
            if (!visited.has(vertex) && distances[vertex] < smallestDistance) {
                smallestDistance = distances[vertex];
                currentVertex = vertex;
            }
        }

        if (currentVertex === null) break; // Remaining vertices are inaccessible

        // Update distances to neighbors
        const neighbors = graph[currentVertex];
        for (let neighbor in neighbors) {
            if (!visited.has(neighbor)) {
                const newDist = distances[currentVertex] + neighbors[neighbor];
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                }
            }
        }

        // Mark vertex as visited
        visited.add(currentVertex);
    }

    return distances;
}

// -----------------------------
// Test Example
// -----------------------------

const graph = {
   'A': { 'B': 4, 'C': 2 },
   'B': { 'A': 4, 'C': 5, 'D': 10 },
   'C': { 'A': 2, 'B': 5, 'D': 3 },
   'D': { 'B': 10, 'C': 3 }
};

console.log("Shortest distances from vertex 'A':");
console.log(dijkstra(graph, 'A'));

/* Expected Output:
Shortest distances from vertex 'A':
{ A: 0, B: 4, C: 2, D: 5 }
*/