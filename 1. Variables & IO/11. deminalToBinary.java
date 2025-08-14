//Write a program to convert given decimal to binary.

import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a decimal");
        int decimalNum = sc.nextInt();
        String binaryStr = "";
        while(decimalNum!=0){
            binaryStr += decimalNum%2;
            decimalNum = decimalNum/2;
        }
        int i=binaryStr.length();
        while(i!=0){
            System.out.print(binaryStr.charAt(i-1));
            i--;
        }
    }
}