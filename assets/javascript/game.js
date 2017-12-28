//creating a platform for all the questions
var panel = $("#quiz-area");
var countStartNumber = 20;
var myMusic;

///////////////////////////////////////////////////////////////////////////////

var aud = document.getElementById("myAudio");
aud.volume = 0.2; // 1 means 100%
//Making a function with buttons in Js

///////////////////////////////////////////////////////////////////////////////

//A button to restart the game when game ends
$(document).on("click", "#start-over", function(e) {
  game.reset();
});

//When buttons clicked, a function will happen
$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

//Start button will create a function to start the game,
//Grabbing the selector of the container, push it onto the DOM while creatiting a new tag <h2>...</h2?
$(document).on("click", "#start", function(e) {
  $("#subwrapper").prepend(
    '<h2>Time Remaining: <span id="counter-number">20</span> Seconds</h2>'
  );
  //recall the function later
  game.loadQuestion();
});
///////////////////////////////////////////////////////////////////////////////

//Question set

///////////////////////////////////////////////////////////////////////////////

var questions = [
  {
    question: "How many total number of points scored by The Truth?",
    answers: ["26,946", "26,397", "26,397", "26,395"],
    correctAnswer: "26,397",
    image: "assets/images/pierce.jpg"
  },
  {
    question: "Which coach won the most during his first three seasons?",
    answers: ["Greg Popovich", "Brad Stevens", "Steve Kerr", "Rick Carlisle"],
    correctAnswer: "Steve Kerr",
    image: "assets/images/kerr.jpeg"
  },
  {
    question: "Which NBA Hall of Fame blocked 3,830 shots in his career?",
    answers: [
      "Kareem Abdul-Jabar",
      "Dikembe Mutombo",
      "Hakeem Olajuwon",
      "Mark Eaton"],
    correctAnswer: "Hakeem Olajuwon",
    image: "assets/images/hakeem.jpg"
  },
  {
    question: "What player has the most assist in one game?",
    answers: ["Steve Nash", "Kevin Porter", "Bob Cousey", "Scott Skiles"],
    correctAnswer: "Scott Skiles",
    image: "assets/images/skiles.jpg"
  },
  {
    question: "Who's the most paid NBA player in 2017?",
    answers: ["The King", "Brodi", "One of the Lob City", "Chef Curry"],
    correctAnswer: "Chef Curry aka Stephen Curry",
    image: "assets/images/curry.jpg"
  },
  {
    question: "Who was not part of 'The Big Three'?",
    answers: ["L-Train aka The King", "Flash aka D-Wade", "James Worthy","CB4 aka The Boshtrich"
    ],
    correctAnswer: "James Worthy",
    image: "assets/images/worthy.jpg"
  },
  {
    question: "Who is 24 th on the all time nba scoring list?",
    answers: ["Vince Carter", "Allen Iverson", "Ray Alen", "Alex English"],
    correctAnswer: "Allen Iverson",
    image: "assets/images/iverson.jpg"
  },
  {
    question: "2016-2017 Golden State Warriors NBA Finals against Cleveland Cavaliers was eventful! How many points did Lebron James and Kevin Durant score in game 3?",
    answers: ["39 and 31", "31 and 39", "41 and 39", "39 and 41"],
    correctAnswer: "39 and 31",
    image: "assets/images/gamethree.jpg"
  },
  {
    question: "Nam this song in the background?",
    answers: ["Love", "Humble", "Loyality", "DNA"],
    correctAnswer: "Humble",
  }
];

var game = {
  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);

    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },
  loadQuestion: function() {
    timer = setInterval(game.countdown, 1000);
    panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      panel.append(
        //each button is registered to each answer
        '<button class="answer-button" id="button"' +
          'data-name="' +
          questions[this.currentQuestion].answers[i] +
          '">' +
          questions[this.currentQuestion].answers[i] +
          "</button>"
      );
      document.getElementById("subwrapper").style.background="#4aaaa5";
      document.getElementById("subwrapper").style.height = "200px";

    }
  },
  nextQuestion: function() {
    game.counter = countStartNumber;
    $("#counter-number").html(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },
  timeUp: function() {
    clearInterval(timer);
    $("#counter-number").html(game.counter);

    panel.html("<h2>Out of Time!</h2>");
    panel.append(
      "<h3>The Correct Answer was: " +
        questions[this.currentQuestion].correctAnswer
    );
    panel.append('<img src="' + questions[this.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    } else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },
  results: function() {
    clearInterval(timer);

    panel.html("<h2>Let's see how you did!</h2>");
    $("#counter-number").html(game.counter);
    panel.append("<h3>Correct Answers: " + game.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    panel.append(
      "<h3>Unanswered: " +
        (questions.length - (game.incorrect + game.correct)) +
        "</h3>"
    );
    panel.append('<br><button id="start-over">Hoop Again?</button>');
  },
  clicked: function(e) {
    clearInterval(timer);

    if (
      $(e.target).data("name") === questions[this.currentQuestion].correctAnswer
    ) {
      this.answeredCorrectly();
    } else {
      this.answeredIncorrectly();
    }
  },
  answeredIncorrectly: function() {
    game.incorrect++;
    clearInterval(timer);
    panel.html("<h2>Nope!</h2>");
    panel.append(
      "<h3>The Correct Answer was: " +
        questions[game.currentQuestion].correctAnswer +
        "</h3>"
    );
    panel.append('<img src="' + questions[game.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 2 * 1000);
    } else {
      setTimeout(game.nextQuestion, 2 * 1000);
    }
  },
  answeredCorrectly: function() {
    clearInterval(timer);
    game.correct++;
    panel.html("<h2>Correct!</h2>");
    panel.append('<img src="' + questions[game.currentQuestion].image + '" />');

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 2 * 1000);
    } else {
      setTimeout(game.nextQuestion, 2 * 1000);
    }
  },
  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};
