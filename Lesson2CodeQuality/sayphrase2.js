"use strict";

/**
 * the hello fn
 * @param {string}  name is person to greet
 * @returns {string} the phrase
 */
 function hello(name) {
 
    let phrase = `Hello, ${name}!`;
  
    say(phrase);
  }
  
/**
 *  say fn 
 * @param {string} phrase is what to alert
 * @returns {undefined}}undefined
 */
  function say(phrase) {
 
    const fred = "john";
    alert(`** ${phrase} **`);
  }