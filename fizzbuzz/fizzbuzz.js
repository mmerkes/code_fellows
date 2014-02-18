function fizzbuzz( num ) {
  if( num % 3 === 0 ) {
    if( num % 5 === 0 ) {
      return 'FizzBuzz';
    }
    return 'Fizz';
  } 
  else if( num % 5 === 0 ) {
    return 'Buzz';
  }
  return num;
}

function fizzer( ceiling ) {
  var results = [];

  for( var i = 1; i <= ceiling; i++ ) {
    results.push( fizzbuzz( i ) );
  }

  return results;
}

console.log( fizzer(100) );
