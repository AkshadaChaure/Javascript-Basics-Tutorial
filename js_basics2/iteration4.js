//for of loop does not support object so we can used for -in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    py: "python",
    swift: "swift by apple"
}
// for (const key in myObject) {
//     console.log(myObject[key]);
    
// }
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


//By using array 
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
    // console.log(key);
    
}

//map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
