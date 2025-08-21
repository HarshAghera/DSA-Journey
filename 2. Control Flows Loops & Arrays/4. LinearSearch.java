//Write a program to perform linear search on array.

import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        System.out.println("Enter the size of an array");
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int[] inputArr = new int[size];
        System.out.println("Enter the elements of array");
        for(int i=0;i<size;i++){
          inputArr[i]= sc.nextInt();
        }
        System.out.println("Enter the element to search");
        int target = sc.nextInt();
        int result=0;
        for(int i=0;i<size;i++){
            if(inputArr[i]==target){
                result = i;
            }else{
                result = -1;
            }
        }
        System.out.println("index of the target is :"+result);
    }
}