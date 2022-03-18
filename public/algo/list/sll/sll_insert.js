/**
 * SLL - insert Exercise
 * 
 * Implement the following on the SinglyLinkedList class
 * 
 * insert
 * 
 * This should insert a node at a specified index in a SinglyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).
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
    insert(){
        
    }
}

// Examples

// (Note: you don't need to re-implement push, the tests will be provided with it)

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.insert(2,12); // true
singlyLinkedList.insert(100,12); // false
singlyLinkedList.length // 5
singlyLinkedList.head.val // 5
singlyLinkedList.head.next.val // 10
singlyLinkedList.head.next.next.val // 12
singlyLinkedList.head.next.next.next.val // 15
singlyLinkedList.head.next.next.next.next.val // 20

singlyLinkedList.insert(5,25); // true
singlyLinkedList.head.next.next.next.next.next.val //25
singlyLinkedList.tail.val // 25