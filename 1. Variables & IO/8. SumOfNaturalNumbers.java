//write a program to print the sum of first n natural numbers

import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the integer n: ");
        int n = sc.nextInt();
        int sum = (n*(n+1))/2;
        System.out.println("Sum of first n natural number is :"+sum);
    }
}