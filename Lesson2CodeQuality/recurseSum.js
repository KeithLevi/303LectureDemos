/* eslint-disable  */
function recurseSum(array) {

    if (array.length === 1) {
        return array[0];
    } else {
        return array.pop() + recurseSum(array);
    }

    
}

console.log(recurseSum([1,2,3,4]));