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
        ans:"ans1"
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
        ans:"ans2"
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
        ans:"ans1"
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
        ans:"ans1"
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
        ans:"ans1"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');


let questionCount = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}   

loadQuestion();