function multiply(mx1, mx2) {
    var productMatrix = [];

    // start simple multiple a m(1,3) by a m(3,1)  matrix
    var prodSum = 0;
    for (var i = 0; i < mx1.length; i++) {
        prodSum += mx1[i] * mx2[0][i];
    }
    productMatrix.push(prodSum);


    return productMatrix;
}

const mx1 = [1, 2, 3];
const mx2 = [[2, 4, 6]];

console.log(multiply(mx1, mx2)); // [28]