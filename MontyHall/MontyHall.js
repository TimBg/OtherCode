let probability = 0;

let experiments = new Array(1000000).fill([]).map(item => {
    let arr = [randomInteger(1, 2)];

    if (arr[0] === 2) {
        arr.push(1);
        arr.push(1);
    } else {
        arr.push(randomInteger(1, 2));
        if (arr[1] === 2) {
            arr.push(1);
        } else {
            arr.push(2);
        }
    }

    return arr;
}).map(item => MontyHall(item));

experiments.forEach(item => { if (item === 2) probability++ });

probability = probability / experiments.length;

// console.log(probability); // 0.666023

function MontyHall(arr) {
    let select = randomInteger(0, 2);
    if (select === 0) {
        if (arr[1] === 1) {
            return arr[2];
        } else if (arr[1] === 2) {
            return arr[1];
        }
    } else if (select === 1) {
        if (arr[0] === 1) {
            return arr[2];
        } else if (arr[0] === 2) {
            return arr[0]
        }
    } else if (select === 2) {
        if (arr[0] === 1) {
            return arr[1];
        } else if (arr[0] === 2) {
            return arr[0];
        }
    }
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}