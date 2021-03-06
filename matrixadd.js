function add(m1, m2) {
    let sumMatrix = Array.from(m1);
    for (var i = 0; i < m1.length; i++) {
        for (var j = 0; j < m1[i].length; j++) {
            sumMatrix[i][j] +=  m2[i][j];
        }
    }
    return sumMatrix;
}

function clearMatrix(m) {
    for (var i = 0; i < m.length; i++) {
        for (var j = 0; j < m[i].length; j++) {
            m[i][j] = null;
        }
    }

    return m;
}

const m1 = [[1,2], [3,4], [5, 6]];
const m2 = [[10, 20], [30,40], [50, 60]];

const result = add(m1, m2);
console.log(result);

const v1 = [1,2,3,4,5];
const v2 = [10,20,30,40,50];
const result2 = add(v1, v2);
console.log(result2);