const user = {
    email: "abc@gmail.com",
    fullName: {
        userFullname: {
            firstName: " Ashish ",
            lastName: "Maurya",
        }
    }
}

console.log(user.fullName)
console.log(user.fullName.userFullname.firstName)