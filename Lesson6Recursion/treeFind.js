class TreeNode {
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

function treeWalk(node) {
    console.log(node.value);
    let childNodes = node.descendents;
    if (childNodes) {

        childNodes.forEach(treeWalk); //loop through all children

    }
}
treeWalk(abe);

/**
 * Searches through tree until find the target as the value of a node
 * @param {object} node that is the root of a tree or subtree
 * @param {string} target value that i am searching for in the tree
 * @returns {boolean} true if the target is in the tree, else false
 */
function treeFind(node, target) {

    if (node.value === target) {
        return true;
    };
    if (node.descendents === null) {
        return false;
    } else {
        let childNodes = node.descendents;
        for (anode of childNodes) {
            if (treeFind(anode, target)) {
                return true;
            };
        }
    }
    return false;
}

console.log(treeFind(abe, "Lisa"));
console.log(treeFind(abe, "Crusty"));


/* solution from Sophia */
function isValueInTree(treeNode, searchValue) {
    if (treeNode.value === searchValue) {
        return true;
    }
    if (treeNode.descendents.length == 0) {
        return false;
    } else {
        // eslint-disable-next-line id-length
        for (let i = 0; i < treeNode.descendents.length; i++) {
            if (isValueInTree(treeNode.descendents[i], searchValue)) {
                return true;
            }
        }
    }
    return false;
}
/**
 * Helper function to test exercise
 * @returns {undefined}
 */
function runIsValueInTree() {
    console.log(`Lisa is in the tree: ${isValueInTree(abe, "Lisa")}`);
    console.log(`Crusty is in the tree: ${isValueInTree(abe, "Crusty")}`);
}

runIsValueInTree();