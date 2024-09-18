const user = {
    username : "hitesh",
    price : 99999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to the website `);
        
    }  // 'this' is used to refer current context
}
console.log(this)

 user.welcomeMessage()
 user.username = "sam"
 user.welcomeMessage()



 const chai1 = function () {
    console.log("FUNCTION KO AISE BHI DEFINE KAR SAKTE HAI")
 }

 chai1()  //AUR AISE JO NAME DIYA HAI SIDHA USSE CALL KAR SAKTE HAI 

 // ====== ARROW FUNCTIONS ========

 const chai2 = () => {
    console.log("THIS IS ARROW FUNCTION")
 }

 chai2()   // bus vo jo function likh te his usko isse => replace kar do 

// () => {}   this is only arrow function 

/*aap arrow function ko ek name ke andar bhi hold kar sakte hai like ' CONST ADDTWO = () => {} ' 
 aur pareameter chaiye tho bus ( num1, num2) kar do  */



 const addTwo = (num1, num2) => {
    return num1 + num2
 }
 console.log(addTwo(3,5))

//  another way of arrow function know as implicit return 

const addThree = (n1,n2,n3) => n1+n2+n3
console.log(addThree(2,5,3))

// ========== OR =========

const addFour = (n1,n2,n3,n4) => (n1+n2+n3+n4)

/* dekh curly braces use kiya thi retuen keyword
 use kar na hoga but paranthesis use kiya tho
  return likh ne ki koi zarurat nhi hai */