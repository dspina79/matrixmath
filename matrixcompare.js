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