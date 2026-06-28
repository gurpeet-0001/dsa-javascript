class Node {
    constructor(item , next){
        this.item = item ;
        this.next = next;
    }
}

class SLL {
    constructor(start = null){
        this.start = start;
    }
    insert(data){
        const node = new Node(data , this.start);
        this.start = node;
    }

    insertLast(data){
        const node = new Node(data , null);
        let current = this.start ;
        //keep going as long as current.next is notEmpty
        while(current.next !== null){ 
            current = current.next
        }

        current.next = node ; 
    }
    display(){
        let current = this.start;
        while(current !== null){
            console.log(current.item);
            current = current.next
        }
    }
}

const list = new SLL();
list.insert('firstItem');
list.insert('secondItem');
list.insert('thirdItem');
list.insertLast('forthItem');
list.display();
 