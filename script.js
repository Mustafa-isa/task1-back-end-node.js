 function parentFn() {
  var squareRoot = 1;

  var childFn = function() {
    var square = squareRoot * squareRoot;

    
    squareRoot = squareRoot + 1;

    return square;
  };

  return childFn;
}


var getNextSquare = parentFn();
console.log(getNextSquare()); 
console.log(getNextSquare()); 
console.log(getNextSquare()); 



