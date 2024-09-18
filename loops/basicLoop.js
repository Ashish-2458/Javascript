for (let i = 0; i<= 10; i++) {
    const element = i;
    console.log(element)
}

for (let i = 0; i<=10; i++) {
    console.log(`Outher loop ${i}`)
    for (let j= 0; j<=10; j++) {
        console.log(`Inner loop ${j} and inner loop ${i}`)
    }
}

// ========  loops on array =======

let myArray = ["flash", "spiderman","superman"]
console.log(myArray.length)
for(let index = 0; index<= myArray.length; index++) {
    const element = myArray[index];
    console.log(element);;
}