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
        let current = this.start 
        //it is compulsasry  to copy this.start to current because , this.start will be destroyed completely if used insted of current

        while(current !== null){
            console.log(current.item);
            current = current.next;
        }

        // for(let current = this.start ; current !== null ; current = current.next){
        //     console.log(current.item);
        // }

       
    }
}

const list = new SLL();
list.insert(5);
list.insert(6);
list.insert(8);
list.display();
