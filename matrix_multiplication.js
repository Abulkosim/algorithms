function matrixMultiply(A, B) {
    let m = A.length,
        n = A[0].length,
        p = B[0].length;
    let C = [];

    for (let i = 0; i < m; i++) {
        C[i] = [];
        for (let j = 0; j < p; j++) {
            C[i][j] = 0;
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < p; j++) {
            for (let k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return C;
}