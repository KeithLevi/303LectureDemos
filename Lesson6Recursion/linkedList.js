"use strict";

let el3 = {
    value: 3,
    next: null
};

let el2 = {
    value: 2,
    next: el3
};

let list = {
    value: 1,
    next: el2
};

printList(list);
printListLoop(list);



/**
 * recusive print of list
 * @param {list} list to be printed
 * @returns {undefined} undefined
 */
function printList(list) {
    if (list.next === null) {
        console.log(list.value);
        return;
    } else {
        console.log(list.value);
        printList(list.next);
    }
}

/**
 * loop print of list
 * @param {list} list to be printed
 * @returns {undefined} undefined
 */
function printListLoop(list) {

    //console.log(list.value);
    //for (;;) {
    while (list) {
        console.log(list.value);
        list = list.next;
        //if (list===null) break;
    }

    return undefined;

}

// eslint-disable-next-line require-jsdoc
function contains(node, target) {
    //debugger;
      if (node.value === target) {
        return true;
      } else {
        if (node.next === null) {
          return false;
        } else {
          contains(node.next, target);
        }
      }
    }
    

    
    console.log("contains 1? " + contains(list, 1));
    console.log("contains 333? " + contains(list, 333));