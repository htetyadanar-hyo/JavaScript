console.log("Function Declaration----------")
//Function Declaration
function square(num){
    return num * num;
}
console.log(2);


//Function Expression
console.log("Function Expressionn----------")
const square2 = function(num){
    return num * num;
}
console.log(square2(2));
console.log(typeof square, typeof square2);

//Arrow Function
console.log("Arrow Function----------")
const square3 = num => num * num;
console.log(square3(2));
console.log(typeof square3);

const isEven = (n1,n2) => {
    if(n1 % 2 == 0 && n2 %2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(2,4));

//General Knowledge
console.log("----------------");
function sum(n1,n2){
    return n1 + n2;
}
console.log(sum());
console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum("hello"));

//Overload only the last one
console.log("----------------");
function log(){
    console.log("No arguments!");
}
function log(x){
    console.log("One Arguemnt");
}
function log(x,y){
    console.log("Two Arguemnt");
}
log();
log('hello');
log('hello','world');
log('hello','world','!!!');

//By using js arguments
console.log("----------------");
function addTwo(){
    //console.log(arguments);
    let result = 0;
    for(let i=0; i<arguments.length; i++){
        result += arguments[i];
    }
    console.log(result);
}
addTwo();
addTwo(1,2);
addTwo(1,2,3);
addTwo('hello');

//Using Rest
console.log("----------------");
function add(x,y,...rest){
    console.log(x,y,rest);
}
add();
add(1);
add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 9, 8, 7, 6);
