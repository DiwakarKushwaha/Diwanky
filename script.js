const quizDB =[
    {
        question: "In which one of the following regions was Dhanyakataka, which flourished as a prominent Buddhist centre under the Mahasanghikas, located?",
        e:"",
        f:"",
        g:"",
        h:"",
        a:"Andhra",
        b:"Gandhara",
        c:"Kalinga",
        d:"Magadha",
        ans:"ans1",
        detail:"<hr> hghjggggggggggggggggggggggggggggggggggggggggggggggggggk,,,,,,"
    },
    {
        question: "With reference to ancient South India, Korkai, Poompuhar and Muchiri were well known as",
        e:"",
        f:"",
        g:"",
        h:"",
        a:"capital cities",
        b:"ports",
        c:"centres of iron-and-steel making",
        d:"shrines of Jain Tirthankaras",
        ans:"ans2",
        detail:""

    },
    {
        question: "In which one of the following regions was Dhanyakataka, which flourished as a prominent Buddhist centre under the Mahasanghikas, located?",
        e:"",
        f:"",
        g:"",
        h:"",
        a:"Andhra",
        b:"Gandhara",
        c:"Kalinga",
        d:"Magadha",
        ans:"ans1",
        detail:""
    },
    {
        question: "In which one of the following regions was Dhanyakataka, which flourished as a prominent Buddhist centre under the Mahasanghikas, located?",
        e:"",
        f:"",
        g:"",
        h:"",
        a:"Andhra",
        b:"Gandhara",
        c:"Kalinga",
        d:"Magadha",
        ans:"ans1",
        detail:""
    },
    {
        question: "In which one of the following regions was Dhanyakataka, which flourished as a prominent Buddhist centre under the Mahasanghikas, located?",
        e:"",
        f:"",
        g:"",
        h:"",
        a:"Andhra",
        b:"Gandhara",
        c:"Kalinga",
        d:"Magadha",
        ans:"ans1",
        detail:""
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const detailAnswer = document.querySelector('#detailAnswer');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');


let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}   

loadQuestion();

const getCheckAnswer= ()=>{
    let answer;
    answers.forEach((curAnsEle)=>{
        if(curAnsEle.checked){
            answer = curAnsEle.id;
        }
    });
    return answer;
};

const deselectAll = ()=>{
    answers.forEach((curAnsEle) => curAnsEle.checked = false );
}

submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);

if(checkedAnswer == quizDB[questionCount].ans){
    score++;
};


questionCount++;

deselectAll();

if(questionCount < quizDB.length){
    loadQuestion(); 
}else{

    showScore.innerHTML = `
    <h3>You Scored ${score}/${quizDB.length} </h3>
    <button class="btn" onclick="location.reload()">Retry</button>
    `;
    showScore.classList.remove('scoreArea');

}


});



detailAnswer.addEventListener('click',()=>{
    const questionList = quizDB[questionCount];
    description.innerHTML =  questionList.detail;
});
