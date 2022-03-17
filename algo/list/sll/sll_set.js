/**
 * SLL - set Exercise
 * 
 * Implement the following on the SinglyLinkedList class
 * 
 * set
 * 
 * This function should accept an index and a value and update the value of the node in the SinglyLinkedList at the index with the new value. It should return true if the node is updated successfully, or false if an invalid index is passed in.
 * 

 */
 class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    constructor(val){
        this.val = val
        this.next = null;      
    }
    push(val){
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
            this.length++;
        
        return this;
    }
    set(val, index){
        let cur = this.head;
        let counter = 0;
        while(counter != index){
            cur = cur.next;
            counter++;
        }
        cur.val = val;
    }
}

// Examples

// (Note: you don't need to re-implement push, the tests will be provided with it)

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.set(0,10) // true
singlyLinkedList.set(1,2) // true
singlyLinkedList.length // 2
singlyLinkedList.head.val // 10
singlyLinkedList.set(10,10) // false
singlyLinkedList.set(3,100) // true
singlyLinkedList.head.next.next.next.val; // 10