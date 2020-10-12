// Variables for password generators
var nums = "123456789"
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~"
var password = ""

// Prompting user for their password preferences
var passLength = prompt("How long does your password need to be? (Enter a number between 1-128)")
if(passLength <= 128){

var hasNums = confirm("Do you need numbers?")
var hasLower = confirm("Do you need lowercase letters?")
var hasUpper = confirm("Do you need uppercase letters?")
var hasSpecial = confirm("Do you need special characters")


// Generate new string based on user responses
var characters = ""

if (hasNums) {
    characters += nums
}
if (hasLower) {
    characters += lower
}
if (hasUpper) {
    characters += upper
}
if (hasSpecial) {
    characters += special
}

// Tester
for (var i = 0; i < passLength; i++) {
    password += generator()
}
console.log(password)


}

function generator() {
    return characters.charAt((Math.floor(Math.random() * characters.length)));
}