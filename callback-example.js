// const makeStringUpperCase = (String) => {
//     return String.toUpperCase();
// };

// const makeStringLowerCase =(String) => {
//     return String.toLowerCase();
// };

// const passUserInput = (input,callback) => {
//  input = "Hello" + input;
//  return callback(input);
// }

// console.log(passUserInput("IIMS",makeStringLowerCase))
// console.log(passUserInput("iims", makeStringUpperCase));

const add = (a,b) => {
 return (a+b);
}
const substract = (a,b) => a-b;
const multiply = (a,b) => a*b;

const callBackExample = (a,b, mathCallBack) => {
    console.log(mathCallBack(a,b)); 
}

 callBackExample(2,2,add);
 callBackExample(2,2, multiply);
 callBackExample(2,2, substract);
    
