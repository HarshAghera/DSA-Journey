// write an program to find the GCD of two given integers;

import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first integer");
        int a = sc.nextInt();
        System.out.println("Enter second integer");
        int b = sc.nextInt();
        int max = Math.max(a,b);
        while(max>0){
            if(a%max == 0 && b%max ==0){
                System.out.println("Greatest Common Divisor is: "+ max);
                break;
            }
            max--;
        }
        sc.close();
    }
}