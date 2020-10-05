function setZeroes(matrix) {
    const rowLength = input.length;
    const colLength = input[0].length;
    const newMatrix = [...matrix];
    for (i = 0; i < rowLength; i++) {
        for (j = 0; j < colLength; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                break;
            }
        }
    }
    for (i = 0; i < colLength; i++) {
        for (j = 0; j < rowLength; j++) {
            if (matrix[j][i] == 0) {
                matrix[0][i] = 0;
                break;
            }
        }
    }
    for (i = 0; i < rowLength; i++) {
        for (j = 0; j < colLength; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                newMatrix[i][j] = 0;
            }
            else {
                newMatrix[i][j] = matrix[i][j];
            }
        }
    }
    matrix = newMatrix;
    return matrix;

};
const input = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
const res = setZeroes(input);
for (i = 0; i < input.length; i++) {
    for (j = 0; j < input[i].length; j++) {
        console.log((res[i][j]));
    }
    console.log("\n");
}
