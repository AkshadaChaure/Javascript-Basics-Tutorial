// for of loop

// [{},{},{}]
//["","",""]
const arr = [1, 2, 3, 4, 5]
 for (const num of arr) {
    // console.log(`${num}`);
    
 }

 const greetings="Hello Js"
 for (const greet of greetings) {
    if (greet === " ") {
        // console.log("Space is skipped");
        
        continue;
    }
    console.log(`Each char is ${greet}`)
      
 }

 //Maps =>"map creates a new array by applying a function on each element of the original array without modifying it"
// it has unique values, duplicate not allowed, key value pair
 const map=new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);

for (const [key,value] of map) {
     console.log(key,value);
     
}
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
 