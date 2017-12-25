//New variables to grab onto html
var questionsContainer = document.getElementById('questions');
var resultsContainer = document.getElementById('reslts');
var submitButton = document.getElementById('btn');

//Functions to build the trivia

function buildQuestions() {}

function showResults() {}

//show questions immedidately

buildQuestions();

//on submit, show results
submitButton.addEventListener('click', showResults);

//   question: "When was the last time Denver Nuggets won the NBA Championships?",
//   answers: ["1970", "1975", "1976", "None"],
//   correct: "None"
// }, {
//   question: "Question 8: Who retired July 16, 2016 before Kobe Bryant and Tim Duncan?",
//   answers: ["Shawn Marion", "Elton Brand", "Amar'e Stoudemire", "Kenyon Martin"],
//   correct: "Amar'e Stoudemire"
// }, {
//   question: "At the end of the 2015-2016 NBA season. Who led the league in total rebounds?",
//   answers: ["Andre Drummond", "Anthony Davis", "Deandre Jordan", "Hassan Whiteside"],
//   correct: "Andre Drummond"
// }, {
//   question: "Question 10: Which of these NBA teams did not have a total of four all-stars on their team during a certain year?",
//   answers: ["2013-2014 Atlanta Hawks", "2016-2017 Golden State Warriors", "1982-1983 Philadelphia 76ers", "2010-2011 Boston Celtics"],
//   correct: "2013-2014 Atlanta Hawks"
// }]

///
const trivia = [
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
  question: "Question 1: Who is the All-Time Scoring leader in the NBA?",
    answers: {
      a: "Kobe Bryant",
      b: "Michael Jordan",
      c: "Karl Malone",
      d: "Kareem Abdul-Jabbar"
    },
    correctAnswer: "d"
  },
  question: "Question 1: Who is the All-Time Scoring leader in the NBA?",
    answers: {
      a: "Kobe Bryant",
      b: "Michael Jordan",
      c: "Karl Malone",
      d: "Kareem Abdul-Jabbar"
    },
    correctAnswer: "d"
  },
  question: "Question 1: Who is the All-Time Scoring leader in the NBA?",
    answers: {
      a: "Kobe Bryant",
      b: "Michael Jordan",
      c: "Karl Malone",
      d: "Kareem Abdul-Jabbar"
    },
    correctAnswer: "d"
  },
  question: "Question 1: Who is the All-Time Scoring leader in the NBA?",
    answers: {
      a: "Kobe Bryant",
      b: "Michael Jordan",
      c: "Karl Malone",
      d: "Kareem Abdul-Jabbar"
    },
    correctAnswer: "d"
  },
  question: "Question 1: Who is the All-Time Scoring leader in the NBA?",
    answers: {
      a: "Kobe Bryant",
      b: "Michael Jordan",
      c: "Karl Malone",
      d: "Kareem Abdul-Jabbar"
    },
    correctAnswer: "d"
  },

}
}]

