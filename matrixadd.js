function add(m1, m2) {
    var sumMatrix = [...m1];
    sumMatrix = clearMatrix[sumMatrix];

    for (var i = 0; i < m1.length; i++) {
        for (var j = 0; j < m1[i].length; j++) {
            sumMatrix[i][j] = m1[i][j] + m2[i][j];
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