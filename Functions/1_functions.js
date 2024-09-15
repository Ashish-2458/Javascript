

function MyName (){
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("I")
    console.log("S")
    console.log("H")
}

MyName()

function addTwoNum(num1,num2) {   // ye num1 and num2 ye parameters hia 
    console.log( num1 + num2 )
}

addTwoNum(3, 4)  // ye 3 and 4 arguments hai

function add(n1,n2) {  
    let result = n1 + n2 
    return result

//  =======or====
// return n1 +n2
}

 const ash = add(2,7)
 console.log(ash)

 function loginUserMessage(username) {
    return `${username} just logged in `
 }
 loginUserMessage("Ashish")  //kuch print nhi hoga 

 console.log(loginUserMessage("Ashish"))


 function lyaloginhai(userName = "Guest") {
    return `${userName} ha ho gaya login `
 }

 console.log(lyaloginhai())  // agar kuch pass nhi kiya tho Guest print hoga 
 console.log(lyaloginhai("maurya"))