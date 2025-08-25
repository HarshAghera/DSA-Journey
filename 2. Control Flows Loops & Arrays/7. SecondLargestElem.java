//find the second largest element in the array.
//used bubble sort initially.
//Need to improve with other algos as learned.

import java.util.Arrays;
class Main {
    public static void main(String[] args) {
        int[] unsortedArr = {1,4,9,7,5,6,8};
        int size = unsortedArr.length;
        int temp=0;
        for(int i=0;i<size-1;i++){
            for(int j=0;j<size-i-1;j++){
                if(unsortedArr[j]>unsortedArr[j+1]){
                    temp = unsortedArr[j];
                    unsortedArr[j] = unsortedArr[j+1];
                    unsortedArr[j+1] = temp;
                }
            }
        }
         System.out.println(unsortedArr[size-2]);
    }
}