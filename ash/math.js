const score = 400
console.log(score);

score;

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(typeof(balance))

const num = 123434.83443

console.log(num.toPrecision(4))
console.log(num.toLocaleString())
console.log(num.toLocaleString('en-IN'))

// ============  Maths library  ===============

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4,5,1,5,8))
console.log(Math.max(24,54,3463,53))

// =============  Math.random (will give value between zero and one )  ===========================

console.log(Math.random())

// so to get number btn 0 to 10 we multiply by 10

console.log(Math.random()*10)

console.log(Math.floor(Math.random()*10))  // to get a single digit value

const min = 10
const max = 40 
console.log(Math.floor(Math.random() *(max-min +1))+min)


