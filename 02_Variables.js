const accountId = 10202               //cannot change const value
let accountEmail = "abc@gmail.com"    //used most
var accountPass = "11223"             //prefer not to use var because of block and functional scope issue
accountCity = "Jaipur"
let accountState;                     //value will be undefined

// accountId = 2                      //this will not execute
accountEmail = "xyz@gmail.com"
accountPass = "000000"
accountCity = "Pune"

console.log(accountId);

console.table([accountId,accountEmail,accountPass,accountCity,accountState])



// Output


// 10202
// ┌─────────┬─────────────────┐
// │ (index) │ Values          │
// ├─────────┼─────────────────┤
// │ 0       │ 10202           │
// │ 1       │ 'xyz@gmail.com' │
// │ 2       │ '000000'        │
// │ 3       │ 'Pune'          │
// │ 4       │ undefined       │
// └─────────┴─────────────────┘