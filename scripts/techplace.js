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
/* right now this code works by printing out q1 and the answers for q1, then over
writing it with q1 + q1 answers + q2 + q2answers, etc. That is inefficient and not
really what I want to happen. If I have time, I want to see if I can fix it.*/

quizBtnEl.addEventListener("click", function(){
  var quizHTML = "";
  for (var i = 0; i < quiz.length; i++) {
    quizHTML += `<li id="">`;
    quizHTML += quiz[i].question;
    quizHTML += `</li>`;
      var multipleHTML = "";
      for (var j = 0; j < quiz[i].options.length; j++) {
        multipleHTML += `<div class="radio">`;
        multipleHTML += `<label>`;
        multipleHTML += `<input type="radio" name="q-${i}" value="${quiz[i].options[j]}">`;
        multipleHTML += `${quiz[i].options[j]}`;
        multipleHTML += `</label>`;
        multipleHTML += `</div>`;
      }
      quizEl.innerHTML = quizHTML += multipleHTML;
  }
});
