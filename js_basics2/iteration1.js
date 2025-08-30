//For loop

// for (let i = 0t i < 10t i++) {
//     const element t i;
//     console.log(element);
    
// }

// for (let i = 0 ;i < 10 ;i++) {
//     const element = i;
//     // console.log(element);
//     if (element ==5) {
//         console.log(`Values are equal to 5 which is , ${i}` );
//         continue;
//     }
// console.log(element);
    
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop Value: ${i}`);
    
     for (let j = 1; j <= 10; j++) {
    //  console.log(`Inner Loop Value: ${j} and Inner Loop : ${i}`);
    // console.log(i + "*"+j +"=" + (i*j));
    
}
}
let myArray=['hi','hello','bye'];
// console.log(myArray.length);
// console.log(myArray.lastIndexOf("hi"));

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}