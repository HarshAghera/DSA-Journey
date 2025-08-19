// Write a program to find min & max of an array.

class Main {
    public static void main(String[] args) {
        int[] arr = {510,828,974,784,610,456,967};
        int min,max;
        min = max = arr[0];
        for(int i=0;i<arr.length;i++){
            if(arr[i]<min){
                min = arr[i];
            }
            if(arr[i]>max){
                max = arr[i];
            }
        }
        System.out.println("The minimum number in the array is: "+ min);
        System.out.println("The maximun number in the array is: "+ max);
    }
}