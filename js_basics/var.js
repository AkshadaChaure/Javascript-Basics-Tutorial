const accountId = 144553
let accountEmail = "rutu@google.com"
var accountPassword = "1245@S"
accountCity = "Pune"
let accountState;

accountEmail = "asdf@gmail.com"
accountPassword = "gvhbmjn"
accountCity = "thane"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])