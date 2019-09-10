
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

let list = new LinkedList();
console.log("The list will be::", list);


LinkedList.prototype.insertAtBeginning = function (data) {
    //creating a new Node Obj.
    let newNode = new Node(data);
    //The pointer next is assigned head property so that both pointers now point at the same node.
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
}

LinkedList.prototype.insertAtEnd = function (data) {
    let newNode = new Node(data);

    if (!this.head) {
        this.head = newNode;
        return this.head;
    }

    let tail = this.head;
    while (tail.next !== null) {
        tail = tail.next;
    }

    tail.next = newNode;
    return this.head;
}

list.insertAtBeginning(22);
list.insertAtEnd(44);

LinkedList.prototype.getAt = function (index) {
    let counter = 0;
    let node = this.head;
    while (node) {
        if (counter === index) {
            return node;
        }
        counter++;
        node = node.next;
    }
    return null;
}

LinkedList.prototype.insertAt = function (data, index) {
    // if the list is empty i.e. head = null
    if (!this.head) {
        this.head = new Node(data);
        return;
    }
    // if new node needs to be inserted at the front of the list i.e. before the head. 
    if (index === 0) {
        this.head = new Node(data, this.head);
        return;
    }
    // else, use getAt() to find the previous node.
    const previous = this.getAt(index - 1);
    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;

    return this.head
}

list.insertAt(11, 1);
list.insertAt(12, 2);

LinkedList.prototype.traverse = function () {
    let arr = [];
    let node = this.head;
    while (node) {
        arr.push(node.data);
        node = node.next;
    }
    return arr;
}

console.log("traverse", list.traverse());