//write a program to do the sum of digits of given integer.

import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter an integer:");
        int n = sc.nextInt();
        int length = String.valueOf(n).length();
        int remainingNumber=n;
        int total = 0;
        for(int i=0;i<length;i++){
            total = total + (remainingNumber%10);
            remainingNumber = remainingNumber/10;
        }
        System.out.println("Total sum of digits = "+total);
    }
}