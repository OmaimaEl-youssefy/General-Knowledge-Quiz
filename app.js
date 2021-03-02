
//correct answers
const correctAnswers=['C','D','A','A','C','D','C','A','A','B'];
const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
const finalScore=document.querySelector('#score');

form.addEventListener('submit',e=>{
    e.preventDefault();
    
    let score=1;

    
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value,form.q8.value,form.q9.value,form.q10.value];
    
    // check answers
    userAnswers.forEach((answer,index) => {
        if(answer == correctAnswers[index]){
            score += 10;
        }
    });

    //result
        //scroll to the top of the page
        scrollTo(0,0);

        //remove a class
    result.classList.remove('d-none');

        //show score
        let i=0;
        const timer=setInterval(() => {
            finalScore.textContent=i+"%";
            i++;
            if(i === score){
                clearInterval(timer);
            }
        },20);

    finalScore.textContent=score+"%";


});


