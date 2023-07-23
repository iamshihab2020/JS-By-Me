const myBtn = document.querySelector('.StartQuiz'), 
RulesBox = document.querySelector('.RulesBox'), 
ExitButton = document.querySelector('.ExitButton'), 
ContinueButton = document.querySelector('.ContinueButton'), 
Questions = document.querySelector('.Questions'),
timeCount = document.querySelector('.TimeCount .Seconds'),
timeLine = document.querySelector('.QuestionsHeader .time_lines'),
nextBtn = document.querySelector('.nextBtn'),
result_box = document.querySelector('.result_box'),
restart_quiz = document.querySelector('.restart1'),
quit_quiz = document.querySelector('.quit')



myBtn.addEventListener('click', ()=>{
    RulesBox.classList.add('activeInfo')
})

ExitButton.addEventListener('click', ()=>{
    RulesBox.classList.remove('activeInfo')
})

ContinueButton.addEventListener('click', ()=>{
    RulesBox.classList.remove('activeInfo')
    Questions.classList.add('activeInfo')
    showQuestion(0)
    startTimer(15)
    startTimerLine(0)
})


// counting value of question
let ques_count = 0, counter, timeValue = 15, counterLine, widthValue = 0, userScore = 0


nextBtn.addEventListener('click', ()=>{
    if(ques_count < questions.length - 1){
        ques_count++
        showQuestion(ques_count)
        clearInterval()
        startTimer(timeValue)

        clearInterval(counterLine)
        startTimerLine(widthValue)
        nextBtn.style.display = 'none'
    }
    else{
        console.log('Khatam')
        showResult()
    }
})  


function showQuestion(index){
    const que_text = document.querySelector('.text'),
    option_list = document.querySelector('.MyOptions'),
    total_que = document.querySelector('.total_que')

    // Question
    let que_tag = `<span>${questions[index].numb} . ${questions[index].question} </span>`

    // Option
    let option_tag = `<div class = options> ${questions[index].options[0]} </div>
                    <div class = options> ${questions[index].options[1]} </div>
                    <div class = options> ${questions[index].options[2]} </div>
                    <div class = options> ${questions[index].options[3]} </div>`

    // Question Number
    let que_numb = `<p> ${questions[index].numb} of 5 Questions</p>`

    // Question
    que_text.innerHTML = que_tag
    // Option
    option_list.innerHTML = option_tag
    // Question Number
    total_que.innerHTML = que_numb


    // selection of all options to check ans 
    const option = option_list.querySelectorAll(".options")
    for(let i=0 ; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)")
    }

}



let tickIcon = `<div class="tick icon"><i class="fas fa-check"></i></div>`
let crossIcon = `<div class="cross icon"><i class="fas fa-times"></i></div>`
// Correct ans logic
function optionSelected(answer){
    clearInterval(counter)
    clearInterval(counterLine)
    
    const option_list = document.querySelector('.MyOptions')
    let userAns = answer.textContent
    let correctAns = questions[ques_count].ans
    let allOptions = option_list.children.length
    
    if(userAns.match(correctAns) ){
        answer.classList.add('correct')
        // Showing tick icon if ans ok
        answer.insertAdjacentHTML("beforeend",tickIcon)
        userScore += 1
    }
    else{
        answer.classList.add('incorrect')
        // Showing tick icon if ans not ok
        answer.insertAdjacentHTML("beforeend",crossIcon)
        for(let i = 0; i < allOptions; i++){
            if(option_list.children[i].textContent.match(correctAns)){
                option_list.children[i].setAttribute("class","options correct")
                // Showing tick icon if ans not ok
                option_list.children[i].insertAdjacentHTML("beforeend",tickIcon)
            }
        }
    }
    for(let i = 0; i < allOptions; i++){
        option_list.children[i].classList.add('disabled')
    }
    // console.log(`Total ans = ${total_ans}`);
    nextBtn.style.display = 'block'
}


// setting timer 
function startTimer(time){
    counter = setInterval(timer, 1000)
    function timer(){
        timeCount.textContent = time
        time--
        if(time < 9){
            let addZero = timeCount.textContent
            timeCount.textContent = '0' + addZero
        }
        if(time < 0){
            clearInterval(counter)
            timeCount.textContent = "00"
        }
    }
}


//  setting timeline
function startTimerLine(time){
    counterLine = setInterval(timer, 50)
    function timer(){
        time += 1
        timeLine.style.width = time + 'px'
        if(time > 319){
            clearInterval(counterLine)
        }
    }
}

// showing result on last page
function showResult(){
    RulesBox.classList.remove('activeInfo')
    Questions.classList.remove('activeInfo')
    result_box.classList.add('activeResult')
    const scoreText = document.querySelector('.score_text')
    let scoreTag = `<span>Carry on 🤞 You got <p> ${userScore} </p> out of <p> ${questions.length} </p> </span>`
    scoreText.innerHTML = scoreTag
}



// quit and replay button of the last page
quit_quiz.addEventListener('click', ()=>{
    window.location.reload()
})
restart_quiz.addEventListener('click', ()=>{
    window.location.reload()
})
