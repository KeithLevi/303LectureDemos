"use strict";

/**
 * 
 * @param {number} num any positive integer
 * @returns {number} fibonacci value of n
 */
function fib(num) {

    return num <= 1 ? num : fib(num - 1) + fib(num - 2);
  }

  /** 
  * @param {number} num any positive integer
  * @returns {number} fibonacci value of n
  */
 function fibSlow(num) {
 
     return num <= 1 ? num : fibSlow(num - 1) + fibSlow(num - 2);
   }
  


/**
 * 
 * @param {function} func is a function to be decorated with caching of results
 * @returns {function} returns the decorated function
 * code from:  https://javascript.info/call-apply-decorators 
 */
  function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
      if (cache.has(x)) {    // if there's such key in cache
        return cache.get(x); // read the result from it
      }
  
      let result = func(x);  // otherwise call func
  
      cache.set(x, result);  // and cache (remember) the result
      return result;
    };
  }
  
  fib = cachingDecorator(fib);
 

  const fib40start = new Date(); // start measuring time
  fibSlow(40);
  const fib40end = new Date(); // end measuring time
  console.log( `The fibSlow40 loop took ${fib40end - fib40start} ms` );

  let fibfast40start = new Date(); // start measuring time
  fib(40);
  let fibfast40end = new Date(); // end measuring time
  console.log( `The fib40 loop took ${fibfast40end - fibfast40start} ms` );

   fibfast40start = new Date(); // start measuring time
   fib(45);
   fibfast40end = new Date(); // end measuring time
   console.log( `The fib45 loop took ${fibfast40end - fibfast40start} ms` );
  

  console.log("fib of 3 is: ", fib(3) ); // 2
  console.log("fib of 7 is: ", fib(7) ); // 13
  console.log("fib of 40 is: ", fib(40) ); // 102334155
  console.log("fib of 45 is: ", fib(45) ); // 1134903170