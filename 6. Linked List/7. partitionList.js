    partitionList(x){
        let dummy1 = new Node(0);
        let dummy2 = new Node(0);
        let prev1=dummy1;
        let prev2=dummy2;
        let curr;
        while(curr!==null){
            if(curr.value < x){
                prev1.next = curr;
                prev1 = prev1.next;
            }else{
                prev2.next = curr;
                prev2 = prev2.next;
            }
            curr=curr.next;
        }
    }