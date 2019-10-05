/* eslint-disable */
"use strict";

// eslint-disable-next-line require-jsdoc
function sortThis(a, b, c) {
    let result = [];

    if (a < b) {
        if (a > c) {
            result = [c, a, b];
        } else { //a < b and a < c
            if (b < c) {
                result = [a, b, c];
            } else {
                result = [a, c, b];
            }
        }

    } else { //a > b
        if (a < c) {// b < a < c
            result = [b, a, c];
        } else {// c < a  and b < a
            if (c < b) {
                result = [c, b, a];
            } else {
                result = [b, c, a];
            }
        }

    }
    return result;
}

function sortThis2(a, b, c) {
    let result = [];
    if (a < b && b < c) { result = [a, b, c]; }
    if (a < c && c < b) { result = [a, c, b] };
    if (b < a && a < c) { result = [b, a, c] };
    if (b < c && c < a) { result = [b, c, a] };
    if (c < a && a < b) { result = [c, a, b] };
    if (c < b && b < a) { result = [c, b, a] };
    return result;
}


console.log(sortThis(5, 2, 8));
console.log(sortThis2(5, 2, 8));
