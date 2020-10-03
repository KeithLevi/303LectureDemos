"use strict";

const peopleArray = [{
    name: "Sam",
    age: 15
  }, {
    name: "William",
    age: 6
  }, {
    name: "Lucy",
    age: 13
  }, {
    name: "Barney",
    age: 80
  }];
  
  //use a chain of map filter reduce to find the average age of people with even number ages
  
  const ageArray = peopleArray.map(pullAge);
  
  console.log(ageArray);
  
  /**
   * 
   * @param {Object} person person node
   * @return {number} persons age
   */
  function pullAge(person) {
    return person.age;
  }
  
  const evenArray = ageArray.filter(findEven);
  console.log("evenarray: ", evenArray);
  
  //return true if the number is even
  /**
   * 
   * @param {*} number is just a number
   * @return {boolean} true if number is even else false
   */
  function findEven(number){
   if (number % 2 === 0){
    return true;
   } else {
    return false;
   }
  }
  
  console.log("first chain: ", peopleArray.map(pullAge).filter(findEven));
  
  
  evenArray.reduce(sum, 0);
  /**
   * 
   * @param {*} accum is accumulator of the sum
   * @param {*} current value being reduced
   * @return {number}  sum of array values
   */
  function sum(accum, current){
    return accum + current;
  }

  console.log("first chain: ", peopleArray.map(pullAge).filter(findEven).reduce(sum, 0));

  const evArr = peopleArray.map(pullAge).filter(findEven);
 console.log("average of even ages is: ", evArr.reduce(sum,0)/evArr.length);