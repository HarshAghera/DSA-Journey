//Given a 2D integer array matrix, return the transpose of matrix.

//The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

class Solution {
    public int[][] transpose(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        int[][] transposeMatrix = new int[n][m];
                    
        for(int row=0;row<matrix.length;row++){
            for(int col = 0 ; col<matrix[row].length;col++){
                transposeMatrix[col][row] = matrix[row][col];
            }
        }
        return transposeMatrix;
    }
}
