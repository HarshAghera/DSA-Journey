//Write a program to check if given number is an armstrong number

import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Please enter an integer:");
        int number = sc.nextInt();
        String numStr = String.valueOf(number);
        int sum = 0;
        for(int i=0;i<numStr.length();i++){
            int temp = 1;
            int count=0;
            while(count<numStr.length()){
                temp *=  Character.getNumericValue(numStr.charAt(i));
                count++;
            }
            sum += temp;
        }
        if(sum == number){
            System.out.println("Given number is Armstrong number");
        }else{
            System.out.println("Given number is not an Armstrong number");
        }
    }
}