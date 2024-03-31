const quizDB =[
    {
        question: "In which one of the following regions was Dhanyakataka, which flourished as a prominent Buddhist centre under the Mahasanghikas, located?",
        e:"",
        f:"",
        g:"",
        h:"",
        i:"",
        j:"",
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
        i:"",
        j:"",
        a:"capital cities",
        b:"ports",
        c:"centres of iron-and-steel making",
        d:"shrines of Jain Tirthankaras",
        ans:"ans2",
        detail:""

    },
    {
        question: "Which one of the following explains the practice of Vattakirutal' as mentioned in Sangam poems?",
        e:"",
        f:"",
        g:"",
        h:"",
        i:"",
        j:"",
        a:"Kings employing women bodyguards.",
        b:"Learned persons assembling in royal courts to discuss religious and philosophical matters",
        c:"Young girls keeping watch over agricultural fields and driving away birds and animals",
        d:"A king defeated in a battle committing ritual suicide by starving himself to death",
        ans:"ans4",
        detail:""
    },
    {
        question: "Consider the following dynasties:",
        e:"",
        f:"1. Hoysala",
        g:"2. Gahadavala",
        h:"3. Kakatiya",
        i:"4. Yadava",
        j:"How many of the above dynasties established their kingdoms in early eighth century AD?",
        a:"Only one",
        b:"Only two",
        c:"Only three",
        d:"None",
        ans:"ans4",
        detail:""
    },
    {
        question: "With reference to ancient Indian History, consider the following pairs:",
        e:"Literary work&emsp; &emsp; &emsp; &emsp; &emsp;Author",
        f:"",
        g:"",
        h:"",
        i:"",
        j:"",
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
const heading = document.querySelector('.heading');
const point1 = document.querySelector('.point1');
const point2 = document.querySelector('.point2');
const point3 = document.querySelector('.point3');
const point4 = document.querySelector('.point4');
const point5 = document.querySelector('.point5');



let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
    heading.innerHTML = questionList.e;
    point1.innerHTML = questionList.f;
    point2.innerHTML = questionList.g;
    point3.innerHTML = questionList.h;
    point4.innerHTML = questionList.i;
    point5.innerHTML = questionList.j;




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
