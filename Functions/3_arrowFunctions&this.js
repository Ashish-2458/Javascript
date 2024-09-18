const user = {
    username : "hitesh",
    price : 99999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to the website `);
        
    }  // 'this' is used to refer current context
}

 user.welcomeMessage()
 user.username = "sam"
 user.welcomeMessage()