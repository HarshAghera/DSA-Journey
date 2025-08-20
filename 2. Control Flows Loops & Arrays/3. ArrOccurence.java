// You are given an integer array nums, an integer array queries, and an integer x.
// For each queries[i], you need to find the index of the queries[i]th occurrence of x in the nums array. If there are fewer than queries[i] occurrences of x, the answer should be -1 for that query.
// Return an integer array answer containing the answers to all queries.

import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        int[] nums = {1,3,1,7};
        int[] queries = {1,3,2,4};
        int x = 1;
        int[] result = new int[queries.length];
        for(int i=0;i<queries.length;i++){
            int count = 0;
                while(count<queries.length){
                    if(nums[i] == x){
                        result[i] = i;
                    }else{
                        result[i]=-1;
                    }
                    count++;
                }
        }
        System.out.println(Arrays.toString(result));
    }
}