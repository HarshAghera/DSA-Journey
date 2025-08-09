//Reverse the given number;

import java.util.Scanner;
class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a digit to reverse");
        int number = sc.nextInt();
        String temp = String.valueOf(number);
        int length = temp.length();
        
        for(int i=length-1;i>=0;i--){
            System.out.print(temp.charAt(i));
        }
    }
}