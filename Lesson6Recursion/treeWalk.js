"use strict";

let node4 = {
    name: "label",
    value: "Name",
    children: null
};

let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};

let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};

let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};

//eslint-disable-next-line require-jsdoc
function treeWalk(node) {
    console.log(node.name + ":  " + node.value);
    let childNodes = node.children;
    if (childNodes) {

        childNodes.forEach(treeWalk); //loop through all children

    }
}

treeWalk(node1);



/**
* helper for treWalkReduct.  Modifies the accumulator array
* @param {Object} node is a treenode
* @param {Array} accumulator holds current list of names
* @returns {undefined}
*/
function treeWalkAccum(node, accumulator) {
    console.log(node.name + ":  " + node.value);
    accumulator.push(node.name);
    let childNodes = node.children;
    if (childNodes) {
        for (const childNode of childNodes) { //loop through all children
            treeWalkAccum(childNode, accumulator);
        }
    }
}

/**
 * collects all names from tree into an array
 * @param {Object} node is a treenode
 * @returns {array} of all the names in the tree
 */
function treeWalkReduct(node) {
    const nameArray = [];
    treeWalkAccum(node, nameArray);
    return nameArray;
}

console.log(treeWalkReduct(node1));


/**
 *  iterative version of tree traversal
 * @param {object} node is part of tree
 * @returns {undefined} just prints out nodes
 * IMPORTANT NOTE (9/22/2020kl) I put this at the end of the file since it apparently changes the structure of the tree.
 * Probably with the shift operation.  This means anything coming after this point in the file will not have the 
 * expected structure of the tree at the top of the file.  Need a deep clone. The JSON.parse.stringify hack works for this tree
 * Good illustration of the danger of destructive functions versus pure functions.
 * https://medium.com/@pmzubar/why-json-parse-json-stringify-is-a-bad-practice-to-clone-an-object-in-javascript-b28ac5e36521 
 */
function treeIteration(node) {
    console.log(node.name + ":  " + node.value);
    let childNodes = node.children;
    while (childNodes && childNodes.length !== 0) {
        let nextNode = childNodes.shift();  //remove the first node
        console.log(nextNode.name + ":  " + nextNode.value);
        if (nextNode.children !== null) {
            /* get all children of nextNode and also node children other than nextNode */
            const childNodes2 = childNodes.concat(nextNode.children); //2 ways of concatenating array elements into a single array
            childNodes = [...childNodes, ...nextNode.children];
        }
    }
}

console.log("iterative version");
const node1Clone = JSON.parse(JSON.stringify(node1));
treeIteration(node1Clone);
console.log("node1 after iterative version: ", node1);

/* sketch for making a deep clone  of tree 
 * if has no children objects then make a shallow clone (spread operator for any arrays) -- assume the children property (?)
 * if has property that is an object then the value of that property will be what is returned by a recursive call to deep clone (assume no children property?)
 * children property must hold other tree nodes
 * recursively call treeclone on each of them and add what they return to the cloned children property array 
 * ???
 */