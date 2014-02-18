// Example buzz_set:
var mySet = [
  [3, 'Fizz'],
  [5, 'Buzz'],
  [7, 'Sivv']
]

/*
Your buzz_set should always be an array that holds
a 2 element array, the first element being the number
and the second element being the word
*/
function fizzer( buzz_set, ceiling ) {
  // To store the results for returning and a variable
  // to store and concatenate temporary results
  var results = [],
      temp;

  // iterate through each number up to the ceiling provided
  for( var i = 1; i <= ceiling; i++ ) {
    // reset the temp variable
    temp = "";
    // Test each pair in the buzz_set to see if i is
    // divisible by it evenly, and append temp if true,
    // do nothing if false
    buzz_set.forEach( function( pair ) {
      if( i % pair[0] === 0 ) {
        temp += pair[1];
      }
    });

    // if temp is not an empty string, meaning it found
    // a matching pair, set the element to that value. Otherwise,
    // set the element to the number
    if(temp) {
      results[i] = temp;
    }
    else {
      results[i] = i;
    }
  }

  //remove the first element which should be undefined
  results.shift();
  // return the results
  return results;
}

// 105 should be all three
console.log( fizzer( mySet, 110 ));

// Test another set
var mySet2 = [
  [3, 'Fizz'],
  [5, 'Buzz'],
  [7, 'Sivv'],
  [8, 'Bingo'],
  [35, 'Wowser']
]

console.log( fizzer( mySet2, 100 ));
