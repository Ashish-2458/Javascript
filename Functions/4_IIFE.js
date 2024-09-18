
// immediately invoked Functions Expression (IIFE)

(function chai (){
    console.log(`hello`)
})();

// immediately invoked Functions Expression (IIFE)
// for arrow functions 

(() => {
    console.log(`hello`)
})();

((name) => {
    console.log(`hello ${name}`);
})("Ashish");