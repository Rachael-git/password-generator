const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let firstPw = ""
let secondPw = ""
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let pwDefaultLenght = 15;

document.getElementById("generateBtn").onclick = function () {
    firstPw = ""
    secondPw = ""
    passwordOne.textContent = firstPw
    passwordTwo.textContent  = secondPw
    let userLenghtInput = document.getElementById("user-length-input").value
   checkInput(userLenghtInput)

}

function checkInput(userLenghtInput) {
   if (userLenghtInput == "" ) {
        generatePassword(pwDefaultLenght)
   } else {
        if (isNaN(userLenghtInput)) {
            document.getElementById("alert-message").textContent = "Must enter only a number between 8 to 20"
        } else {
           
            if (userLenghtInput < 8 || userLenghtInput > 20) {
                document.getElementById("alert-message").textContent = "Please input a number between 8 to 20"
            } else {
                generatePassword(userLenghtInput)
            }
        }
    }
}


function generatePassword (len){
    for(let i = 0; i < len; i++) {
        firstPw += characters[Math.floor(Math.random() * characters.length)]
        secondPw += characters[Math.floor(Math.random() * characters.length)]
    }

    passwordOne.textContent = firstPw + " " + firstPw.length
    passwordTwo.textContent  = secondPw + " " + secondPw.length

    document.getElementById("alert-message").textContent = ""
}