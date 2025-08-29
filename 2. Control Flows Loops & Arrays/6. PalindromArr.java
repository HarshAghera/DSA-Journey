// Check if the arr is palindrom or not.

class Main {
    public static void main(String[] args) {
        int[] arr= {1,4,5,4,1};
        int n = arr.length;
        boolean isPalindrom = true;
        for(int i=0;i<=n/2;i++){
            if(arr[i]!=arr[n-i-1]){
                isPalindrom = false;
                break;
            }
        }
        if(isPalindrom){
            System.out.println("Given Arr is Palindrom");
        }else{
            System.out.println("Given Arr is not Palindrom");
        }
    }
}