console.log("Hello world");

// const constVar = "Hello";

// constVar = 123456;

// let, var

// let a = 123456;

// var b = "abcdef";

// console.log(a);
// console.log(b);

// console.log(typeof a);
// console.log(typeof b);


// function aFunc(a, b, c){
//     console.log(a, b, c);
// }

// aFunc(10, "aaaaaaaaaaa", 100000);

// const bFunc = function(){
//     console.log("Hello");
// }

// const cFunc = ()=>{
//     console.log("World");
// }

// bFunc();
// cFunc();

// Function scope

// var a = 100;

// function print(){
//     var b = 50;

//     console.log(a);
//     console.log(b);

// }
// print();

// console.log(a);
// console.log(b);


//let => Block scope

// let a = 100;

// function print(){
//     let b = 50;

//     console.log(a);
//     console.log(b);

// }
// print();

// console.log(a);

// function countDown(num){
//     for(var i = num; i >= 0; i--){
        
//         setTimeout(function(){
//             console.log();
//         }, 1000*(num - i));
//     }
//     console.log(i);
// }

// countDown(5);

console.log("Hello");
function print(onWaitDone){

    setTimeout(function(){
        console.log("World");
        onWaitDone();
    }, 1000);
}
print(function(){
    console.log("!!!!!!!!!!!!!!!!!");
});


// obj2 = {};
// let obj2 = Object.assign({obj});

// console.log(obj2)

// obj2.a = 100;

// console.log(obj)




















