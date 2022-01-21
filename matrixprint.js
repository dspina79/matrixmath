function printMatrix(arr) {
    var output = "";
    const totalVolume = arr.length * arr[0].length;
    const innerOffset = arr[0].length;
    var linearRepresentation = Array(totalVolume);

    var positionPointer = 0;
    var currentPosition = 0;
    for (var i = 0; i < arr.length; i++) {
        var currentPosition = positionPointer;
        for (var j = 0; j < arr[i].length; j++) {
            linearRepresentation[currentPosition] = arr[i][j];
            currentPosition += innerOffset;
        }
        positionPointer++;
    }

    console.log(linearRepresentation);

    for (var i = 0; i < linearRepresentation.length; i++) {
        if (i > 0 && i % innerOffset == 0) {
            output += '\n\n';
        }

        if (i % innerOffset == 0) {
            output += '| ';
        }
        output += linearRepresentation[i];
        if ((i + 1) % innerOffset != 0) {
            output += "\t";
        } else {
            output += " |";
        }
    }

    console.log(output);
}

var testArray = [[1,4,7],[2,5,8],[3,6,9]];
printMatrix(testArray);

/*
1   2   3
4   5   6
7   8   9

*/