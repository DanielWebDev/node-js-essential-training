// provide tools for working with paths
var path = require('path');

// var hello = 'Hello World from Node js';

// var justNode = hello.slice(17);

//console.log(`Rock on World from ${justNode}`);

// console.log(__dirname);// path to where this module is located

// console.log(__filename);//full path also the file name

// pluck the base filename from a full path ...
console.log(`Rock on World from ${path.basename(__filename)}`);
