let currentQuestionNumber = 1
document.querySelectorAll('.next-btn').forEach(el=>{
    el.addEventListener("click",()=>{
        let currentQuestion = document.querySelector('.current-question')
        
        //shows equipment link if equipment input checked
        if(document.querySelector('.current-question input:checked').value == "equipment" ){
            currentQuestion.style.display = "none"
            document.querySelector('#result-equipment').style.display = "block"
            return
        }
        //looks for the checked color and replaces the link
        if(currentQuestionNumber == 3){
            currentQuestion.style.display = "none"
            let color = document.querySelector('#question-3 input:checked').value
            let resultLink = document.querySelector('#result a')
            switch (color) {
                case 'Black':
                    resultLink.href = '/products/black-mountain-bike'
                    break;
                case 'Blue':
                    resultLink.href = '/products/blue-mountain-bike'
                    break;
                case 'Yellow':
                    resultLink.href = '/products/yellow-mountain-bike'
                    break;
                default:
                    resultLink.href = '/products/red-mountain-bike'
                    break;
            }
            document.querySelector('#result').style.display = "block"
            return
        }
        let nextQuestion = document.querySelector(`#question-${currentQuestionNumber+1}`)
        
        // Hidden current question
        currentQuestion.classList.remove('current-question')
        currentQuestion.style.display ='none'

        //Show next question
        nextQuestion.classList.remove('hidden-question')
        nextQuestion.classList.add('current-question')

        //increment question counter
        currentQuestionNumber += 1
    })
})

//hides the intro text and shows the first question
document.querySelector('.intro-btn').addEventListener("click",()=>{
    document.querySelector('.intro').style.display = "none"
    document.querySelector('#question-1').classList.add('current-question')
    document.querySelector('#question-1').classList.remove('hidden-question')
})

//disables the buttons until we choose an option
document.querySelectorAll('.next-btn').forEach(el=>{
    el.disabled=true
})

// Enable the next button once we check an option
document.querySelectorAll('.quiz input').forEach(el=>{
    el.addEventListener("click",()=>{
        document.querySelector('.current-question button').disabled = false
    })
})