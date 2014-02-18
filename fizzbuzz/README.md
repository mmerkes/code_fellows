#Welcome to the best FizzBuzz ever!

`fizzbuzz.js` is a basic set of functions that take a number and will FizzBizz all numbers up to that number.

`fizzer_advanced` provides a function called `fizzer` that accepts an array of pairs `[number, word]` and constructs results based off of the pair. I originally considered using an object to store the pairs as they almost keys and values, but say the customer wanted have two results for the same number or wanted the results in an order that JavaScript wouldn't naturally order the object, you wouldn't be able to control that.

The easiest way to test all of the client's requirement was to accept an array with the pairs, and go through each number and test each pair individual. If there was a match, append a variable that save the current state. I used `forEach` to iterate through the set of pairs because it looks a little cleaner than a for loop. I originally tried creating this with `reduce`, but that wasn't a clean since the first element would not get processed and I'd have to listen for that to change it. `forEach` was more straightforward, and I could have used `map` and concatenated the result, but that didn't look as clean either.

In the end, the result actually looks pretty straightforward.
