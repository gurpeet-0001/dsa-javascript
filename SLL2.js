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

    }
    display(){
        console.log(this.start);
    }
}

const list = new SLL();
list.insert('firstItem');
list.insert('secondItem');
list.insert('thirdItem');
list.display();