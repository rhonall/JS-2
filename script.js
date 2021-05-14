const correctAnswers = ['B', 'A', 'D', 'C', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const firework1 = document.querySelector('.comment1');
const firework2 = document.querySelector('.comment2');



form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 1;
        }
    });

    scrollTo(0,0);

    result.classList.remove('score');
    

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 100);

    if(score === 6){
        firework1.classList.remove('score');
        firework2.classList.remove('score');
    } 
    
});

