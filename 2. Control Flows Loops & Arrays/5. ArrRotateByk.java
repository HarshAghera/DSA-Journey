// Rotate the array by kth position where k>0;
import java.util.Scanner;
import java.util.Arrays;
class Main {
    public static void main(String[] args) {
        int[] arrToRotate = {1,2,3,4,5,6,7};
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value of K:");
        int k = sc.nextInt();
        int size = arrToRotate.length;
        int[] tempArr = new int[size];
        int count=0;
        while(count<k){
            for(int i=0;i<size;i++){
               if(i+1<size){
                    tempArr[i+1] = arrToRotate[i];
                }else{
                    tempArr[0] = arrToRotate[i];
                }
        }
        arrToRotate = tempArr;
        tempArr = new int[size];
        count++;
        }
        System.out.println(Arrays.toString(arrToRotate));
    }
}