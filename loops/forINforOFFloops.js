
// for of loops

/*

["","",""]  // arramy of strings 

[{},{},{}]  // arrray of objects 

*/

 // ===== for...in: Iterates over the keys/indexes of an object or array.

const arr = [10, 20, 30];
for (const index in arr) {
    console.log(index);  // Outputs: 0, 1, 2 (indexes)
}


// ==== for...of: Iterates over the values of an iterable (like arrays, strings, etc.).

const arr1 = [10, 20, 30];
for (const value of arr1) {
    console.log(value);  // Outputs: 10, 20, 30 (values)
}


// So, for...in gives you indexes/keys, and for...of gives you values.

// =====   MAPS =======

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")

console.log(map)