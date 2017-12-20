$(document).ready(function() {

  //Creating global variables to initize the game
  var start = 30;

  var correctAnswer = 0;

  var wrongAnswer = 0;

  var trivia = [
    {
      question: "Question 1: Who is the All-Time Scoring leader in the NBA?",
      answers: ["Kobe Bryant", "Michael Jordan", "Karl Malone", "Kareem Abdul-Jabbar"],
      correct: "Kareem Abdul-Jabbar"
    },
    {
      question: "Question 2: Hakeem Olajuwon has the most blocks ever in NBA history, how many blocks does he have?",
      answers: ["3,189", "3,289", "3,820", "3,830"],
      correct: "3,830"
    },
    {
      question: "Question 3: Who killed Nora Allen in The Flash Comics?",
      answers: ["Eobard Thawne", "Henry Allen", "Captain Cold", "Hunter Zolomon"],
      correct: "Eobard Thawne"
    },
    {
      question: "Question 4: Shaquille O'Neal was known to have one of the worst FT% of NBA history until which player took his rank?",
      answers: ["Wilt Chamberlain", "Ben Wallace", "Andre Drummond", "Deandre Jordan"],
      correct: "Andre Drummond"
    },
    {
      question: "Question 5: What year was the National Basketball Association first established?",
      answers: ["1958", "1945", "1935", "1946"],
      correct: "1946"
    },
    {
      question: "Question 6: Michael Jordan was drafted third overall in 1984. Which two players were selected ahead of him?",
      answers: ["Patrick Ewing & Hakeem Olajuwon", "Hakeem Olajuwon & Sam Bowie", "Charles Barkley & Hakeem Olajuwon", "Karl Malone & Sam Bowie"],
      correct: "Hakeem Olajuwon & Sam Bowie"
    },
    {
      question: "Question 7: Who killed Nora Allen in The Flash Comics?",
      answers: ["Eobard Thawne", "Henry Allen", "Captain Cold", "Hunter Zolomon"],
      correct: "Eobard Thawne"
    },
    {
      question: "Question 8: Who killed Nora Allen in The Flash Comics?",
      answers: ["Eobard Thawne", "Henry Allen", "Captain Cold", "Hunter Zolomon"],
      correct: "Eobard Thawne"
    },
    {
      question: "Question 9: Who killed Nora Allen in The Flash Comics?",
      answers: ["Eobard Thawne", "Henry Allen", "Captain Cold", "Hunter Zolomon"],
      correct: "Eobard Thawne"
    },
    {
      question: "Question 10: Who killed Nora Allen in The Flash Comics?",
      answers: ["Eobard Thawne", "Henry Allen", "Captain Cold", "Hunter Zolomon"],
      correct: "Eobard Thawne"
    } 
]
});