// $(document).ready(function() {

  //Creating global variables to initize the game
  var start = 30;
  var correctAnswer = 0;
  var wrongAnswer = 0;
  var timer;

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
      question: "Question 3: What team won the very first NBA game?",
      answers: ["New York Knicks", "Philadelphia Warriors", "Toronto Huskies", "Chicago Stags"],
      correct: "New York Knicks"
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
      question: "When was the last time Denver Nuggets won the NBA Championships?",
      answers: ["1970", "1975", "1976", "None"],
      correct: "None"
    },
    {
      question: "Question 8: Who retired July 16, 2016 before Kobe Bryant and Tim Duncan?",
      answers: ["Shawn Marion", "Elton Brand", "Amar'e Stoudemire", "Kenyon Martin"],
      correct: "Amar'e Stoudemire"
    },
    {
      question: "At the end of the 2015-2016 NBA season. Who led the league in total rebounds?",
      answers: ["Andre Drummond", "Anthony Davis", "Deandre Jordan", "Hassan Whiteside"],
      correct: "Andre Drummond"
    },
    {
      question: "Question 10: Which of these NBA teams did not have a total of four all-stars on their team during a certain year?",
      answers: ["2013-2014 Atlanta Hawks", "2016-2017 Golden State Warriors", "1982-1983 Philadelphia 76ers", "2010-2011 Boston Celtics"],
      correct: "2013-2014 Atlanta Hawks"
    } 
];
// console.log(trivia);


//Set Timer

$("#let-play-btn").on("click", function() {
timer = setTimeout(function() {
  alert("NBA Trivia Start's Now")
},1000);

});
