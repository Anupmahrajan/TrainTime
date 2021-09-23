// // let exampleArray = [1,2,3,4,5];
// // console.log(exampleArray.length);
// // console.log(exampleArray.length - 1);

// // exampleArray[2] = "test";
// // console.log(exampleArray);

// // exampleArray[0] = "k xa khabar";
// // console.log(exampleArray);



// // let array1= ["apple","mango"];
// // let array2 = ["orange","banana"];
// // console.log([...array1, ...array2]);


// // let pushExample = ["apple","banana"];
// // pushExample.push("orange");
// // console.log("pushExample:",pushExample);

// // let popExample =["apple","banana","avocardo"];
// // popExample.pop();
// // console.log ("popExample:",popExample);

// // //shift
// // let shiftExample =["apple","banana","avocardo"];
// // shiftExample.shift();
// // console.log ("shiftExample",shiftExample);


// // let spliceExample = ["apple", "banana", "avacardo","A","B"];
// // spliceExample.splice(1,3, "sala","badar");
// // console.log ("splicEXAMPLE HO LA CHOR", spliceExample);

//let sliceExample = ["apple","banaan","aca","o","k"];
// // let newsliceArray =slcieExample.slice(0,1);
// // console.log("New array:", newsliceArray);
// delete sliceExample[0];
// console.log ("deleted array:", sliceExample);

// let sliceExample = ["apple","banaan","aca","o","k"];
// sliceExample.forEach((value,index)=>{
//     console.log("index is:",index );
//     console.log("value is:",value);
// })

// let numbers =[1,2,3,4,5];
// let numberMulti = numbers.map((value,index) => {
//     return value* 2;
// })
// console.log (numberMulti);





// let name = [ "anup", "anjuli", "krishna","rabi"]
// console.log (name);
// let upperCaseName = name.map ((value,index) => {
//     return value.toUpperCase();
// })
// console.log (upperCaseName);


// let ageArray = [15,20,30,40];
// let aboveTwenty = ageArray.filter((value,index) => {
//     return value > 20;
// });
// console.log (aboveTwenty);

// let arr = [1,2,3,4,5];
// for (let i= 0; i<arr.length; i++){
//     console.log(arr[i]);
    
// }

// let countryArray = ["nepal","Indai", "China", "Japan"];
// for (let country of countryArray) {
//     console.log (country);
// }

let objectExmaple = {
    name: "anup",
    age: 22,
    address: "kathmandu",
}

 console.log (Object.keys(objectExmaple));
for (let obj of objectExmaple) {
   console.log (obj);
  }

