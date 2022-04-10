

const quizDB = [
    {
        question : "1. Who is often called as Hindu Luther of Northern India ?",
        a:  "Dayanand Saraswati",
        b: "Ishwar Chandra Vidyasagar",
        c: "Radhakant Dev",
        d: "Keshav Chandra Sen",
        ans: "ans2"

    },
    {
        question : "2. Which among the following was the first registered Trade Union of India ?",
        a:  "Hindu Mazdoor Sabha",
        b: "Bhartiya Mazdoor Sangh",
        c: "Madras Labour Union",
        d: "United Trade Union Congress",
        ans: "ans3"
    },
    {
        question : "3.Who among the following was the first Indian woman president to chair the Indian National Congress at Kanpur session of 1925?",
        a:  "Sarojini Naidu",
        b: "Annie Beasant",
        c: "Nellie Sengupta",
        d: "Indira Gandhi",
        ans: "ans1"
    },
    {
        question : "4.Which among the following marks Mahatma Gandhi first fast unto death?",
        a:  "Kheda Satyagraha",
        b: "Champaran Satyagraha",
        c: "Ahmedabad Mill Strike",
        d: "Ahmedabad Mill Strike",
        ans: "ans3"
    },
    {
        question : "5. The play ‘Neeldarpan’ is associated with which among the following revolts?",
        a:  " Santhal Revolt",
        b: "Pabna Riots",
        c: "Indigo Revolts",
        d: "Champaran Satyagraha",
        ans: "ans3"
    }
];







const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const next = document.querySelector('#next');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score=0;


const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}


loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
}

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


next.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length){
        loadQuestion();
    }
    else{

        showScore.innerHTML = `
            <h3> Your Score is ${score}/${quizDB.length} 🏆</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');

    }

})

submit.addEventListener('click',() => {

    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();




    showScore.innerHTML = `
            <h3> Your Score is ${score}/${quizDB.length} 🏆</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
})






