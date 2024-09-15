
function clculateCartPrice(num1) {
    return num1
}

console.log(clculateCartPrice(12));

console.log(clculateCartPrice(13,24,52,52))  // VO MULTIPLE INPUT NHI LE SAKTA 


function clculateMultipleCartPrice(...num1) {
    return num1
}
// =======   ... is called rest operator isse app function mai kitne bhi valuse pass kar sakte ho
console.log(clculateMultipleCartPrice(13,24,52,52))



// ========  PSAAING OBJECT IN FUNCTION ======
const user = {
    name: "Ashish",
    price: 99999,
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.name} and prise is ${anyobject.prise}`);
}

handleObject(user)

// ======= or you can directly pass object =====

handleObject({
    name: "maurya",
    prise: "123335566"
})

//   PASSING ARRAYS IN FUNCTION =======

const myArray = [1,4,5,3,6]

function returnArray(getarray){
    return getarray[1]
}

console.log(returnArray(myArray))

//  or 

console.log(returnArray([1,3,5,2,5]))