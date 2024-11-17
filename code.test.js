// code.test.js 
// Maxie Machado 
// Detecting Isomorphism 

const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const pentagon = [
    [0, 1, 2, 3, 4],
    [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 0]
    ]
];

const star = [
    [0, 1, 2, 3, 4],
    [
        [0, 2],
        [2, 4],
        [4, 1],
        [1, 3],
        [3, 0]
    ]
];

const empty = [[], []];
const line = [[0, 1, 2], [[0, 1], [1, 2]]];

const square = [
    [0, 1, 2, 3],
    [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0]
    ]
];

const hourglass = [
    [0, 1, 2, 3],
    [
        [0, 2],
        [2, 3],
        [3, 1],
        [1, 0]
    ]
];

const G = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [
        [0, 1],
        [0, 3],
        [0, 5],
        [1, 2],
        [1, 4],
        [2, 3],
        [2, 7],
        [3, 6],
        [4, 5],
        [4, 7],
        [5, 6],
        [6, 7]
    ]
];

const H = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 4],
        [6, 2],
        [1, 5],
        [7, 3],
        [4, 0]
    ]
];

if (!are_isomorphic(pentagon, star)) throw new Error("Failed for pentagon & star");
if (are_isomorphic(empty, line)) throw new Error("Failed for empty and line");
if (are_isomorphic(pentagon, line)) throw new Error("Failed for pentagon & line");
if (!are_isomorphic(square, hourglass)) throw new Error("Failed for square and hourglass");
if (are_isomorphic(square, pentagon)) throw new Error("Failed for square and pentagon");
if (!are_isomorphic(G, H)) throw new Error("Failed for G and H");
if (!are_isomorphic(G, G)) throw new Error("Failed for G and G");
