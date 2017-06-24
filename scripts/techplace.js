//Javascript

//function to reveal techEtiquette101 Video and take the quiz button//
document.querySelector("#videoBtn").addEventListener("click", function(){
    document.querySelector("#techEtiquette101").style.display = "block"
  });
  // Important Elements
  var quizBtnEl = document.querySelector('#officeQuiz');
  var quizEl = document.querySelector('#quizQuestions');

//Array of test questions
var quiz = [
  {
    id: 1,
    question: "Is Michael Scott the world\'s best boss?",
    options: [
      "Yes",
      "Who is Michael Scott?",
      "No",
      "I don't know"
    ],
    answer: "No"
  },
  {
    id: 2,
    question: "Why aren\'t there more funny office etiquette videos on YouTube?",
    options: [
      "No idea",
      "Office etiquette isn't funny",
      "All the good ones are proprietary"
    ],
    answer: "All the good ones are propriatary"
  },
  {
    id: 3,
    question: "Did Michael Scott learn anything from sensitivity training?",
    options: [
      "Clearly, yes",
      "Clearly, no",
      "I didn't watch the video",
      "No idea"
    ],
    answer: "Clearly, yes"
  }
];


quizBtnEl.addEventListener("click", function(){
  var quizHTML = "";
  for (var i = 0; i < quiz.length; i++) {
    quizHTML += `<li id="">`;
    quizHTML += quiz[i].question;
    quizHTML += `</li>`;
    quizHTML += `<div class="radio">`;
    quizHTML += `<label>`;
    quizHTML += `<input type="radio" name="q-${i}" value="${quiz[i].options[0]}">`;
    quizHTML += `${quiz[i].options[0]}`;
    quizHTML += `</label>`;
    quizHTML += `</div>`;
    quizHTML += `<div class="radio">`;
    quizHTML += `<label>`;
    quizHTML += `<input type="radio" name="q-${i}" value="${quiz[i].options[1]}">`;
    quizHTML += `${quiz[i].options[1]}`;
    quizHTML += `</label>`;
    quizHTML += `</div>`;
    quizHTML += `<div class="radio">`;
    quizHTML += `<label>`;
    quizHTML += `<input type="radio" name="q-${i}" value="${quiz[i].options[2]}">`;
    quizHTML += `${quiz[i].options[2]}`;
    quizHTML += `</label>`;
    quizHTML += `</div>`;
    quizHTML += `<div class="radio">`;
    quizHTML += `<label>`;
    quizHTML += `<input type="radio" name="q-${i}" value="${quiz[i].options[3]}">`;
    quizHTML += `${quiz[i].options[3]}`;
    quizHTML += `</label>`;
    quizHTML += `</div>`;
      quizEl.innerHTML = quizHTML;
  }
});
