const paswordBox = document.querySelector('#pass'),
copyNow = document.querySelector('#copy'),
generateBtn = document.querySelector('.generate');
console.log(generateBtn);

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",1,2,3,4,5,6,7,8,9,0,'[','`', '!', '@',  '#', '$', '%',
'^', '&', '*', '(',  ')', '_', '+',
'-', '=', '[', ']',  '{', '}', ';',
"'", ':', '"', '\\', '|', ',', '.',
'<', '>', '/', '?',  '~', ']', '/'];



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


