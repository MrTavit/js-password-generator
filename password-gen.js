// Variables for password generators
var nums = "123456789"
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!\"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~"


// Returns a random character from an array baseed on the length of it
function randomIndex(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

// Will generate a password for a user based on their 
// password preferences
function generator() {
    // Prompting user for password length
    var passLength = prompt("Welcome to the password generator.\nHow long does your password need to be? (Enter a number between 8-128)")
    var password = []
    var guaranteed = []
    if (passLength <= 128 && passLength >= 8) {
        
        // Prompting user for their password preferences
        var hasUpper = confirm("Do you need capital letters?")
        var hasNums = confirm("Do you need numbers?")
        var hasSpecial = confirm("Do you need special characters?")


        // Generate new string based on user responses
        // Lowercase letters are included by default
        var characters = lower

        // Guaranteed will hold 1 character per selection
        // They will be inserted onto the password in order to guarantee at least 1 per selection is in the final password
        guaranteed.push(randomIndex(lower))

        if (hasNums) {
            characters = characters.concat(nums)
            guaranteed.push(randomIndex(nums))
        }
        if (hasUpper) {
            characters = characters.concat(upper)
            guaranteed.push(randomIndex(upper))
        }
        if (hasSpecial) {
            characters = characters.concat(special)
            guaranteed.push(randomIndex(special))
        }
        // Convert final string into an array to allow for easier replacement of guaranteed characters
        var charArray = characters.split("")

        for (var i = 0; i < passLength; i++) {
            password.push(randomIndex(charArray))
        }
        // Will replace the first few characters of the final password with the guaranteed set
        for(var i = 0; i < guaranteed.length; i++){
            password[i] = guaranteed[i]
        }
        return password.join('')
        
    } else {
        alert("Input contains invalid characters")
        alert("Here is your new password: " + generator())
    }
}

//Calls the password generator function as well as alerts the user with their new password
alert("Here is your new password: " + generator())