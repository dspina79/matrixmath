function addScalar(m, s) {
    if (Array.isArray(m) && Array.isArray(m[0])) {
        return m.map( (e) => {
             return e.map( (i) => i + s);
        });
    } else {
        return m.map( (i) => i + s);
    }
}
   
let v3 = [1,2,3,4,5];
let m3 = [[1,2,3], [4,5,6], [7,8,9]];

v3 = addScalar(v3, 10);
m3 = addScalar(m3, 20);
console.log(v3);
console.log(m3);