'use strict'

function sort(input) {

  for(var i = input.length - 1; i >=0; i--){
    for (var n = 1; n <= i; n++){
      if( input[n-1] > input[n]){
        var temp = input[n-1];
        input[n -1] = input[n];
        input[n] = temp;
      }
    }  
  }
  return input;
  // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
}

module.exports = sort
