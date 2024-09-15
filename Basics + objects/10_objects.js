const user = {
    email: "abc@gmail.com",
    fullName: {
        userFullname: {
            firstName: " Ashish ",
            lastName: "Maurya",
        }
    }
}

console.log(user.fullName)
console.log(user.fullName.userFullname.firstName)


// =========  how to join 2 object ========
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}


//const obj3 = Object.assign (obj1,obj2)
//console.log(obj3);

//=============OR=======

const obj3 ={...obj1, ...obj2}
console.log(obj3);


const tinderUser = {}

tinderUser.id = "12340",
tinderUser.name = "zzz",
tinderUser.islogged = false

console.log(tinderUser)


// ====== array of bojects =======
const users = [
    {
        id: 1,
        name: "maurya"
    },
    {
        id: 1,
        name: "ashish"
    },
    {
        id: 1,
        name: "ashish"
    },
    {
        id: 1,
        name: "ashish"
    },
]

users[1].name
console.log(tinderUser)

console.log(Object.keys(tinderUser))   //  TO GET KEYS OF ANY OBJECT THE OUTPUT WILL BE IN ARRAY SO YOU CAN APPLY LOOPS 
console.log(Object.values(tinderUser))  // you can also get valuse 


const course = {
    Cname : "js tutorial",
    Cprise: "9999",
    Cinstructor: "Ashish"
}

const {Cinstructor} = course  // destructuring 
console.log(Cinstructor)

const {Cinstructor: ash} = course
console.log(ash)



