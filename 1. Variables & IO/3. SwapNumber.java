//Swap two numbers without using third variable.

class Main {
  public static void main(String[] args) {
    int a = 5;
    int b = 10;
    b = b+a;
    a=b-a;
    b = b-a;

    System.out.println("a = " + a + " b = " + b);
  }
}