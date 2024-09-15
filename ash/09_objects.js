// sinngleton 

//  object litrels 

const jsUser = {
    name: "ashish",
    age: 22,
    location: "jaipur",
    email: "maurya21ashish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","Sunday"]
}

console.log(jsUser.email)

 jsUser.email = "abc@gmail.com"
 console.log(jsUser)

 // adding functions in object 

 jsUser.greeting = function(){
    console.log("hello js user ")
 }

 console.log(jsUser.greeting)

 // ye function wala fir se kar na hai 