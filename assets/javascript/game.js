
const myTrivia = [
  {
  question: "Question 1: Who is the All-Time Scoring leader in the NBA?",
  answers: {
    a: "Kobe Bryant",
    b: "Michael Jordan",
    c: "Karl Malone",
    d: "Kareem Abdul-Jabbar"
  },
  correctAnswer: "d"
},
{
  question: "Question 2: Hakeem Olajuwon has the most blocks ever in NBA history, how many blocks does he have?",
    answers: {
      a: "3,820",
      b: "3,800",
      c: "3,810",
      d: "3,825"
    },
    correctAnswer: "a"
},
{
  question: "Question 3: What team won the very first NBA game?",
    answers: {
      a: "Tornoto Huskies",
      b: "Chicago Stags",
      c: "New York Knicks",
      d: "Denver Nuggets"
    },
    correctAnswer: "c"
},
{
  question: "Question 4: Shaquille O'Neal was known to have one of the worst FT% of NBA history until which player took his rank?",
    answers: {
      a: "Wilt Chamberlain",
      b: "Ben Wallace",
      c: "Andre Drummond",
      d: "Deandre Jordan"
    },
    correctAnswer: "c"
  },
  {
  question: "Question 5: What year was the National Basketball Association first established?",
    answers: {
      a: "1958",
      b: "1946",
      c: "1943",
      d: "1940",
  },
    correctAnswer: "b"
  },
  {
  question: "Question 6: Michael Jordan was drafted third overall in 1984. Which two players were selected ahead of him?",
    answers: {
      a: "Patrick Ewing & Hakeem Olajuwon",
      b: "Hakeem Olajuwon & Sam Bowie",
      c: "Karl Malone & Sam Bowie",
      d: "Charles Barkley & Hakeem Olajuwon"
    },
    correctAnswer: "b"
  },
  {
  question: "Question 7: When was the last time Denver Nuggets won the NBA Championships?",
    answers: {
      a: "1960",
      b: "1965",
      c: "1962",
      d: "none"
    },
    correctAnswer: "d"
  },
  {
  question: "Question 8: Who retired July 16, 2016 before Kobe Bryant and Tim Duncan?",
    answers: {
      a: "Shawn Marion",
      b: "Elton Brand",
      c: "Amar'e Stoudemire",
      d: "Kenyon Martin"
    },
    correctAnswer: "c"
  },
  {
  question: "Question 9: At the end of 2015-2016 NBA season. Who led the league in total rebounds?",
    answers: {
      a: "Andre Drummond",
      b: "Anthony Davis",
      c: "Deandre Jodan",
      d: "Hassan Whiteside"
    },
    correctAnswer: "a"
  },
  {
  question: "Question 10: Which of these NBA taems did not have a total of four All-Stars on their during a certain year?",
    answers: {
      a: "13-14' Atlanta Hawks",
      b: "16-17' Golden State Warriors",
      c: "82-83' Philadelphia 76ers",
      d: "10-11 Boston Celtics"
    },
    correctAnswer: "d"
  }
];

function startTimer(duration, display) {
  var timer = duration,
    minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      stop();
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 8,
    display = document.querySelector('.timer');
  startTimer(fiveMinutes, display);
};

var triviaContainer = $('#question');
var results = $('#results');
var playBtn = $('#btn');

(function() {
function startTrivia () {
  var output = [];

  trivia.forEach((currentQuestion, questionNumber) => {
    //
    var answers = [];

    for(letter in currentQuestion.answers) {
      //adding an HTML radio button
      answers.push(
        `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
      );
      }
       // add this question and its answers to the output
       output.push(
       `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
       );
       return();
    });

