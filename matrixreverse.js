function mirrorVector(v) {
    let newV = [];
    while(v.length > 0) {
        newV.push(v.pop());
    }

    return newV;
}

const v = [1,2,3,4,5];
console.log(mirrorVector(v));