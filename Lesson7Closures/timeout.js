/* eslint-disable strict */
//"use strict";

// eslint-disable-next-line require-jsdoc
/* function sayHi() {
    alert("Hello");
    
  }  */
  
  setTimeout(sayHi(), 5000);
  

  // eslint-disable-next-line require-jsdoc
  function sayHi(phrase, who) {
    alert( phrase + ", " + who );
    return arrowFn;
  }
  //setTimeout(sayHi, 6000, "Hello", "John"); // Hello, John

  function arrowFn() {
    alert("hello from the return of the second sayHi");

  }
  