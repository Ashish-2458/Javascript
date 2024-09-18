const name = "ashish"
const repocount = 50 

// console.log(name + repocount + " value")

console.log(`hello my name is ${name} and my repo count is ${repocount}`)

const GameName = new String("ashish")
console.log(GameName[0]);
console.log(GameName.length);
console.log(GameName.toUpperCase())

console.log(GameName.charAt(2));
console.log(GameName.indexOf('h'));

const newString = GameName.substring(0, 3)
console.log(newString);

const anotherString = GameName.slice(-5,3)
console.log(anotherString);

const newStringOne = '      ashish      '
console.log(newStringOne.trim())

const url = "https://ashishmaurya2458.com"
console.log(url.replace('maurya','_'))
