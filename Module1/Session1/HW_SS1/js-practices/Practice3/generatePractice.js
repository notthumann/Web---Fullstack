'use strict'
function search(input, target) {
  for (var i = 0; i < input.length; i++){
      if(input[i] == target){
        return i;
      }
  }
  return -1;
}
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

function generate(testLengthArray){
  var arr = [];
  for (let i = 0; i < testLengthArray.length; i ++){
    let obj = {}
    obj.input = [];
    for (var n = 0; n < testLengthArray[i]; n ++){
      obj.input[n] = (Math.floor(Math.random()*100)/100)*10000;
    }
    obj.input=sort(obj.input);
    obj.target = (Math.floor(Math.random()*100)/100)*10000;
    obj.output = search(obj.input,obj.target);
    arr.push(obj);
  }
  return arr;
}

module.exports = generate
