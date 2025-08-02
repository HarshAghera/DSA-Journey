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
