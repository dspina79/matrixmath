function matrixDimensionsEqual(m1, m2) {
    if (m1.length === m2.length) {
        for (var i = 0; i < m1.length; i++) {
            if (m1[i].length !== m2[i].length) {
                return false;
            }
        }

        return true;
    }

    return false;
}

function isVector(mv) {
    if (Array.isArray(mv) && mv.length > 0) {
        return (!Array.isArray(mv[0]));
    }

    return false;
}

function getDimensions(mv) {
    let arr = [];
    if(isVector(mv)) {
        arr.push(mv.length);
    } else {
        arr.push(mv.length);
        arr.push(mv[0].length);
    }

    return arr;
}

const mdArray = [[1,2], [3,4], [5,6]];
const vect = [1,2,3,4,5];
console.log((typeof mdArray));
console.log(`Is MD Array a vector: ${(isVector(mdArray))}`);
console.log(`Is vect a vector: ${(isVector(vect))}`);
console.log(getDimensions(mdArray));
console.log(getDimensions(vect));