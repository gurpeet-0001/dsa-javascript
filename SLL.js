//singly linked list 

//this is node : [item,nextAdr]
class Node {
    constructor(item = null , next =null){
        this.item = item;
        this.next = next ;
    }
}

class SLL {
    constructor(start = null ){
        this.start = start
    }

    insert(data){
        const n = new Node(data , this.start);
        this.start = n ;
    }

    display(){
        console.log(this.start.item);
        console.log(this.start.next.item);
        console.log(this.start.next.next.item);

       
    }
}

const list = new SLL();
list.insert(5);
list.insert(6);
list.insert(8);
list.display();
