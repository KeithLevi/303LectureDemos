/* eslint-disable */
let node4 = { val: 1099, next: null };
let node3 = { val: 109, next: node4 };
let node2 = { val: 1, next: node3 };

let head = { val: 10, next: node2 };

//remove node3 from the list
//node2.next = node4;

//put node3 back in
//node2.next = node3;

//find with value target starting at the head
function  findNode(head, target) {
    let currentNode = head;
    while (currentNode) {
        if (currentNode.val === target) {
            return currentNode;
        } else {
            if (currentNode.next === null) {return null;}
            currentNode = currentNode.next;
        }

    }
}
console.log('findNode finds: ', findNode(head, 555));

