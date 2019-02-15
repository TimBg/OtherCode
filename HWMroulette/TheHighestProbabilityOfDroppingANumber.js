let fs = require('fs');
let file = fs.readFileSync('Data.txt', 'utf8');
let arr = file.split('\n'), newArr = [], numbers = [], values = ['00', '0'];

for(let i = 0; i < 4464; ++i) newArr[i] = arr[i][25] != ' ' ? arr[i][25] + '' + arr[i][26] : '' + arr[i][26];

for(let i = 0; i < 38; ++i) numbers[i] = [];

for(let i = 0; i < 38; ++i) for(let j = 0; j < 38; ++j) numbers[i][j] = 0;

for(let i = 2; i < 38; ++i) values[i] = String(i - 1);

for(let i = 1; i < 4464; ++i) numbers[values.indexOf(newArr[i])][values.indexOf(newArr[i - 1])]++; 

for(let i = 0; i < 38; ++i) for(let j = 0; j < 38; ++j) if(Number(numbers[i][j]) >= 6) console.log((i - 1) + ' after ' + (j - 1) + '\n');