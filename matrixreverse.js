function mirrorVector(v) {
    let newV = [];
    while(v.length > 0) {
        newV.push(v.pop());
    }

    return newV;
}

function mirrorMatrix(m) {
    let newM = [];
    for(var i = 0; i < m.length; i++) {
        newM.push(mirrorVector(m[i]));
    }
    return newM;
}

// [1,2,3], [4,5,6], [7,8,9]

const v = [1,2,3,4,5];
console.log(mirrorVector(v));

const m = [[1,2,3], [4,5,6], [7,8,9]];
console.log(mirrorMatrix(m));