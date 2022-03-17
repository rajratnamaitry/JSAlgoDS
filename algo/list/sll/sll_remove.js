/**
SLL - remove Exercise
 * 
 * Implement the following on the SinglyLinkedList class
 * 
 * remove
 * 
 * This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.
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
    push(){
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
    remove(){
        
    }
}

// Examples

// (Note: you don't need to re-implement push, the tests will be provided with it)

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.remove(2).val; // 15
singlyLinkedList.remove(100); // undefined
singlyLinkedList.length // 3
singlyLinkedList.head.val // 5
singlyLinkedList.head.next.val // 10
singlyLinkedList.head.next.next.val // 20