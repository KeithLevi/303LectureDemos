"use strict";

/*
Write a recursive function, treeModifier, that will take a tree and a modifier 
function as parameters. Walk through the tree and apply the function to each node. 
The function should apply some operation to a node. Write a function that will change 
the value of a node to be all caps. Write another that will change the value to have *** in 
front and behind the node value. Write another that will reverse the string of the node value. 
Call your recursive function with each of these modifier functions. treeModifier(tree, modiferFunc)
*/

/**
 * 
 * @param {*} treeNode is some node in a tree
 * @param {*} modFunc functino to apply to each node
 * @returns {null}
 * This function modifes the value of each node in the tree using the modFunc
 */
function treeModifier(treeNode, modFunc){
    modFunc(treeNode);
    if (treeNode.descendents.length === 0) {
        return undefined;
    } else {  //loop through the array of descendents and recursively call treeModifier
      for (const node of treeNode.descendents) {
          treeModifier(node, modFunc);
      }
    }
}

let a = [];
let b = [];
alert( a === b);



/**
 * 
 * @param {Object} node from simpson tree
 * @returns {undefine}
 * changes the node value to have ***    ***
 */
function starFunction(node){
    node.value = "***" + node.value + "***";
    return undefined;
}

/**
 * 
 * @param {Object} node from simpson tree
 * @returns {undefine}
 * changes the node value to be upper case
 */
function caps(node){
    node.value = node.value.toUpperCase();
}

/**
 * 
 */
class TreeNode {
    /**
     * 
     * @param {string} value is name for simpson character
     */
    constructor(value) {
    this.value = value;
    this.descendents = [];
    }
    }
    // create nodes with values
    const abe = new TreeNode('Abe');
    const homer = new TreeNode('Homer');
    const bart = new TreeNode('Bart');
    const lisa = new TreeNode('Lisa');
    const maggie = new TreeNode('Maggie');
    // associate root with is descendents
    abe.descendents.push(homer);
    homer.descendents.push(bart, lisa, maggie);

    console.log(treeModifier(abe, caps));
    console.log('now tree has stars', abe);

