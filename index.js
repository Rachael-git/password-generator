
// Password generator 
// - Ability to set password length -> DONE
// - Toggle " symbols" and  "numbers" on/off -> DONE
// - Add copy - on - click

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const symbolArray = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")
const userLenghtInput = document.getElementById("user-length-input")

const symbolChkBx = document.getElementById("symbol-chk-box")
const numberChkBx = document.getElementById("number-chk-box")


let firstPw = ""
let secondPw = ""

document.getElementById("generateBtn").addEventListener('click', () => {
    
    firstPw = ""
    secondPw = ""
    
    let passwordLength = checkLenghtInput(userLenghtInput.value)

    if (!symbolChkBx.checked && numberChkBx.checked) {
        
        generatePassword(passwordLength, noSymRequest())

    } else if (!numberChkBx.checked && symbolChkBx.checked ) {
        
        generatePassword(passwordLength, noNumRequest())
        
    } else if (!symbolChkBx.checked && !numberChkBx.checked){
       
        generatePassword(passwordLength,noSymAndNumRequest() )

    } else {

        generatePassword(passwordLength,characters)
        
    }

})

function checkLenghtInput(userLenghtInput) {
    if (userLenghtInput == "" ) {
        return 15
    } else {
         if (isNaN(userLenghtInput) || userLenghtInput < 8 || userLenghtInput > 20 ) {
            document.getElementById("alert-message").style.visibility = "visible"
           
        } else {
            document.getElementById("alert-message").style.visibility = "hidden"
            return userLenghtInput
        }
    }
}

 //not include symbols into passwords//
function noSymRequest(){
    let noSymbols = []
    for (let i = 0; i < characters.length; i++ ){
        if (!symbolArray.includes(characters[i])) {
        noSymbols.push(characters[i])
        }
    }
    return noSymbols   
}

//not include numbers into passwords//
function noNumRequest() {

    let noNums = []
    for (let i = 0; i < characters.length; i++ ){
        if (isNaN(characters[i])) {
         noNums.push(characters[i])
        }
    }
    return noNums
}

//not include symbols and numbers into passwords//
function noSymAndNumRequest() {
    let noSymsAndnum = []
    for (let i = 0; i < characters.length; i++) {
        if (isNaN(characters[i]) && !symbolArray.includes(characters[i])) {
            noSymsAndnum.push(characters[i])
        }
    }
    return noSymsAndnum
}

function generatePassword (passwordLen, charArray ) {
    for(let i = 0; i < passwordLen; i++){
        firstPw += charArray[Math.floor(Math.random() * charArray.length)]
        secondPw += charArray[Math.floor(Math.random() * charArray.length)]
    }
    passwordOne.textContent = firstPw
    passwordTwo.textContent = secondPw
}

// to clear input value when focusihg on input text //
document.getElementById("user-length-input").addEventListener("focus", () => {
    // document.getElementById("alert-message").style.visibility = "hidden"
    userLenghtInput.value = ""
})

    

