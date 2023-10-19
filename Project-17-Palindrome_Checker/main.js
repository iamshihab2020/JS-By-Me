const mainInput = document.querySelector('.mainInput'),
checkBtn = document.querySelector('.check'),
yesBtn = document.querySelector('.yes'),
noBtn = document.querySelector('.no'),
reloadButton = document.querySelector(".reload");

checkBtn.addEventListener('click', ()=>{
    var word = mainInput.value;

    if (typeof word === 'string') {
        function isPalindrome(mainWord) {
            mainWord = mainWord.toLowerCase().replace(/ /g, '');
            // Reverse the mainWord
            var reversedWord = mainWord.split('').reverse().join('');
            // Check if the original mainWord is equal to the reversed mainWord
            return mainWord === reversedWord;
        }
    }
    else{
        function isPalindromeNumber(number) {
            // Convert the number to a string
            number = number.toString();
            // Reverse the number as a string
            var reversedNumber = number.split('').reverse().join('');
            // Check if the original number is equal to the reversed number
            return number === reversedNumber;
        }
    }

    if (isPalindrome(word)) {
        console.log(word + " is a palindrome.");
        yesBtn.classList.add('active');
        noBtn.classList.add('inActive');
    } else {
        console.log(word + " is not a palindrome.");
        noBtn.classList.add('active');
        yesBtn.classList.add('inActive');
    }

    reloadButton.classList.add('dis');
    mainInput.disabled = true;

    reloadButton.addEventListener("click", function() {
        location.reload();
    });    
});




