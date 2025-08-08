//Write a program to find if given number is prime.
import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the integer to check if its prime.");
        int number = sc.nextInt();
        double sqrt = Math.sqrt(number);
        boolean isPrime = true;
        for(int i=2;i<=sqrt;i++){
            if(number%i == 0){
                isPrime = false;
                break;
            };
        }
        System.out.println("Given number is prime==> "+isPrime);
    }
}