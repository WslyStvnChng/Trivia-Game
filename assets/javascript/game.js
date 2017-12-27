
var number = 10;
var intervalId;
var myListofQuestions = [
{
  question: "Question 1: Who is the All-Time Scoring leader in the NBA?",
  choices: ["Kobe Bryant", "Michael Jordan", "Karl Malone", "Kareem Abdul-Jabbar"],
  correctAnswer: "d"
},
{
  question: "Question 2: Hakeem Olajuwon has the most blocks ever in NBA history, how many blocks does he have?",
  choice: ["3,820", "3,800", "3,810", "3,825"],
  correctAnswer: "a"
},
{
  question: "Question 3: What team won the very first NBA game?",
  choices: ["Tornoto Huskies", "Chicago Stags", "New York Knicks","Denver Nuggets"],
  correctAnswer: "c"
},
{
  question: "Question 4: Shaquille O'Neal was known to have one of the worst FT% of NBA history until which player took his rank?",
  choices: ["Wilt Chamberlain", "Ben Wallace", "Andre Drummond","Deandre Jordan"],
  correctAnswer: "c"
},
{
  question: "Question 5: What year was the National Basketball Association first established?",
  choices: ["1958", "1946", "1943","1940"],
  correctAnswer: "b"
},
{
  question: "Question 6: Michael Jordan was drafted third overall in 1984. Which two players were selected ahead of him?",
  choices: ["Patrick Ewing & Hakeem Olajuwon", "Hakeem Olajuwon & Sam Bowie", "Karl Malone & Sam Bowie", "Charles Barkley & Hakeem Olajuwon"],
  correctAnswer: "b"
},
{
  question: "Question 7: When was the last time Denver Nuggets won the NBA Championships?",
  choices: ["1960", "1965", "1962", "none"],
  correctAnswer: "d"
},
{
  question: "Question 8: Who retired July 16, 2016 before Kobe Bryant and Tim Duncan?",
  choices: ["Shawn Marion", "Elton Brand", "Amar'e Stoudemire", "Kenyon Martin"],
  correctAnswer: "c"
},
{
  question: "Question 9: At the end of 2015-2016 NBA season. Who led the league in total rebounds?",
  choices: ["Andre Drummond", "Anthony Davis", "Deandre Jodan", "Hassan Whiteside"],
  correctAnswer: "a"
},
{
  question: "Question 10: Which of these NBA taems did not have a total of four All-Stars on their during a certain year?",
  choices: ["13-14' Atlanta Hawks", "16-17' Golden State Warriors", "82-83' Philadelphia 76ers", "10-11 Boston Celtics"],
  correctAnswer: "d"
  }
];

function startGame() {

  $("#startGameButton").toggleClass("hidden");
  $("#gameWrapper").toggleClass("hidden");

  myQuestions = "";

  myListofQuestions.forEach(function(obj,idx) {

      myListofQuestions = myQuestion + "<p class='bold'>" + obj.question +"<p>";

      obj.choices.forEach(function(choice) {
        myQuestion = myQuestion + "<input type='radio' name=" + idx + " value" + choice + ">" + choice + "<br>";

        console.log(myQuestion);
      })

  })
  $("#myForm").append(myQuestion);
  run();
}

function gradeMe() { 

  stop();

  var numVeryCorrectAnswer = 0;
  var unanswered = 0;
  var incorrect = 0;

  //show choice

  for (var i = 0; i < myListofQuestions.length; i++) {
    var isItChecked = $("input[name =" + i + "]:checked").val();

    if (isItChecked === myListofQuestions[i].correctAnswer);
  }
}

