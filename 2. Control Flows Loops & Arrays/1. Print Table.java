//write a program to print the table for given number.

import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        System.out.println("Enter the digit for table");
        Scanner sc = new Scanner(System.in);
        int tableDigit = sc.nextInt();
        for(int i=1;i<=10;i++){
            System.out.println(tableDigit+" * "+i+" = "+tableDigit * i);
        }
    }
}