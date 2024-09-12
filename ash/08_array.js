// video no 14 
// arrays (it is a collection of different items in single variable )
const myArr= [0,1,3,2,4,5]
console.log(myArr[1]);

// array methods 

myArr.push(8)
myArr.push(9)
myArr.pop()  // issme koi argument dene ki zarurat nhi hai because ye automatically last element ko pop kar dega 
console.log(myArr) 

myArr.unshift(7)
myArr.shift(7)
console.log(myArr)
console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

// ====================  part 2 of arrays  =================

const marvel_heros = ["thor","doctor strange","spiderman"]
const dc_heros = ["superman","flash","haha"]

allHeros = marvel_heros.concat(dc_heros)  // so agar marvel print kiya tho vo old wala array hi mile ga concat wala nhi milega so print so concat wale array ko ek new name deke print karwao

console.log(allHeros)