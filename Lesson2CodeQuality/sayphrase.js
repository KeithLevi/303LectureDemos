"use strict";
/**
 * This is the comment  
 * @param {string} name of person to greet
 * @returns {undefined}
 * 
 */
function hello(name) {
    let phrase = `Hello, ${name}!`;
  
    say(phrase);
  }
  
  /**
   * A little helper function 
   * @param {string} phrase some phrase to send to alert
   * @returns {undefined}
   */
  function say(phrase) {
     alert(`** ${phrase} **`);
  }

