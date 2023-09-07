const paswordBox = document.querySelector('#pass'),
copyNow = document.querySelector('#copy');

const upperCase = ["A","B","C","D","E",
"F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z"];

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
"j", "k", "l", "m", "n", "o", "p", "q", "r", 
"s", "t", "u", "v", "w", "x", "y", "z"];

const numb = [1,2,3,4,5,6,7,8,9,0]

const specialCharacters = ['!', '@',  '#', '$', '%', '^', '&', '*', '(',  ')', '_', '+','-', '=', '[', ']',  '{', '}', ';', "'", ':', '"', '\\', '|', ',', '.', '<', '>', '/', '?',  '~', ']', '/']

function passGenerate(){
    let passLen = 20;
    var passwordFinal = [];
    for(let i = 0; i < passLen; i++){
        passwordFinal += `${upperCase[Math.floor(Math.random() * upperCase.length)]}${numb[Math.floor(Math.random() * numb.length)]}${lowerCase[Math.floor(Math.random() * lowerCase.length)]}${specialCharacters[Math.floor(Math.random() * specialCharacters.length)]}`;
    }
    paswordBox.value = passwordFinal.substring(0, Math.floor(Math.random() * 11) + 6);
    copyNow.addEventListener('click', ()=>{
        paswordBox.select();
        document.execCommand("copy");
    })
}







/*
const alphabet = ["A","B","C","D","E",
"F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z",
"a", "b", "c", "d", "e", "f", "g", "h", "i",
"j", "k", "l", "m", "n", "o", "p", "q", "r", 
"s", "t", "u", "v", "w", "x", "y", "z",1,2,3,4
,5,6,7,8,9,0,'[','`', '!', '@',  '#', '$', '%',
'^', '&', '*', '(',  ')', '_', '+',
'-', '=', '[', ']',  '{', '}', ';',
"'", ':', '"', '\\', '|', ',', '.',
'<', '>', '/', '?',  '~', ']', '/'];
*/

/*
function passGenerate(){
    let passLen = Math.floor(Math.random() * 3) + 8;
    var thePassword = [];
    for (let i = 0; i < passLen; i++) {
        let passIn = Math.floor(Math.random() * alphabet.length) ;
        thePassword += alphabet[passIn];
        console.log(thePassword);
    };
    paswordBox.value= thePassword;

    copyNow.addEventListener('click',()=>{
        paswordBox.select();
        document.execCommand("copy");
    })
}

*/
