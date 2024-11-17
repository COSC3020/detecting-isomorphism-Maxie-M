// code.js 
// Maxie Machado 
// Detecting Isomorphism 

function are_isomorphic(graph1, graph2) {
    if (graph1[0].length !== graph[0].length || graph[1].length !== graph2[1].length) {
        return false;
    }
    
    const adjMatrix1 = undirectedGraphToAdjMatrix(graph1);
    const vert2 = graph2[0];
    const edges2 = graph[1];

    const vertexPermutations = generatePermutations(vert2);

    for (const permutedVertices of vertexPermutations) {
        const permutedGraph2 = [permutedVertices, edges2];
        const adjMatrix2 = undirectedGraphToAdjMatrix(permutedGraph2);

        if (matrixEquality(adjMatrix1, adjMatrix2)) {
            return true;
        }
    }
    return false;
}

function generatePermutations(array) {
    if (array.length <= 1) return [array];
    const permutations = [];

    for (let i = 0; i < array.length; i++) {
        const rest = array.slice(0, i).concat(array.slice(i + 1));

        for (const perm of generatePermutations(rest)) {
            permutations.push([array[i]].concat(perm));
        }
    }
    return permutations;
}

function undirectedGraphToAdjMatrix(graph) {
    const [vertices, edges] = graph;
    const n = vertices.length;
    const adjMatrix = Array.from({ length: n }, () => Array(n).fill(0));

    edges.forEach(([u, v]) => {
        const indexU = vertices.indexOf(u);
        const indexV = vertices.indexOf(v);

        adjMatrix[indexU][indexV] = 1;
        adjMatrix[indexV][indexU] = 1;
    });
    return adjMatrix;
}

function matrixEquality(matrix1, matrix2) {
    if (matrix1.length !== matrix2.length) return false; 

    for (let i = 0; i < matrix1.length; i++) {

        for (let j = 0; j < matrix1[i].length; j++) {
            if (matrix1[i][j] !== matrix2[i][j]) return false;
        }
    }
    return true;
}
