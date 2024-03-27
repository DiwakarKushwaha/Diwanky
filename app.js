/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "In which one of the following regions was Dhanyakataka, which flourished as a prominent Buddhist centre under the Mahasanghikas, located?",
    "options": [
    {
    "a": "&lt;Andhra&gt;",
    "b": "&lt;Gandhara&gt;",
    "c": "&lt;Kalinga&gt;",
    "d": "&lt;Magadha&gt;"
    }
    ],
    "answer": "Andhra;",
    "score": 0,
    "detail": "Dhanyakataka (also known as Dharanikota) is located in the present-day Andhra Pradesh state of India. It was a prominent Buddhist center under the Mahasanghikas. It is also believed that the Great Stupa at Amaravati, which is one of the most significant Buddhist monuments in India, was situated in the same region.This monument is a fine example of Buddhist art and architecture, further emphasizing the importance of this region as a Buddhist center. In contrast, Gandhara, located in present-day Pakistan and Afghanistan, was also a major center of Buddhist art and culture, but it is not the region where Dhanyakataka was located. Gandhara is especially known for the Gandhara style of Buddhist art, which incorporated influences from Greek and Roman art."
    "status": ""
    },
    {
    "id": 2,
    "question": "Where is the correct place to insert a JavaScript?",
    "options": [
    {
    "a": "The &lt;head&gt; section",
    "b": "The &lt;body&gt; section",
    "c": "Both the &lt;head&gt; section and the &lt;body&gt; section are correct"
    }
    ],
    "answer": "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
    "score": 0,
    "status": ""
    },
    ]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div><b>Detail answer:</b> &nbsp;' + quiz.JS[j].detail + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res + 
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });
