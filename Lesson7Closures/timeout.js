/* eslint-disable strict */
//"use strict";

// eslint-disable-next-line require-jsdoc
function sayHi() {
    alert("Hello");
    
  }
  
  setTimeout(sayHi(), 5000);
  

  // eslint-disable-next-line require-jsdoc
  function sayHi(phrase, who) {
    alert( phrase + ", " + who );
    return () => alert("hello from the return of the second sayHi");
  }
  setTimeout(sayHi, 5000, "Hello", "John"); // Hello, John
  