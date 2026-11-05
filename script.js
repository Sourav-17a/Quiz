// ---------- QUESTIONS ----------
// q = question, options = 4 choices, answer = number of correct option (0 = first, 1 = second ...)

var maths = [
  { q: "15 + 27 = ?", options: ["32", "42", "52", "41"], answer: 1 },
  { q: "9 x 8 = ?", options: ["72", "64", "81", "78"], answer: 0 },
  { q: "Square root of 144?", options: ["10", "14", "11", "12"], answer: 3 },
  { q: "100 / 4 = ?", options: ["20", "25", "30", "40"], answer: 1 },
  { q: "5 squared (5 x 5) = ?", options: ["10", "15", "25", "20"], answer: 2 },
  { q: "How many sides does a triangle have?", options: ["3", "4", "5", "2"], answer: 0 },
  { q: "Sum of angles of a triangle?", options: ["90", "360", "180", "270"], answer: 2 },
  { q: "Approx value of pi?", options: ["3.41", "3.14", "2.14", "4.13"], answer: 1 },
  { q: "50% of 200 = ?", options: ["50", "75", "150", "100"], answer: 3 },
  { q: "Which is a prime number?", options: ["4", "6", "7", "9"], answer: 2 },
  { q: "12 x 12 = ?", options: ["144", "124", "122", "154"], answer: 0 },
  { q: "Perimeter of a square with side 5?", options: ["10", "25", "15", "20"], answer: 3 },
  { q: "Area of rectangle 4 x 6?", options: ["10", "24", "20", "28"], answer: 1 },
  { q: "Smallest prime number?", options: ["1", "3", "2", "0"], answer: 2 },
  { q: "1000 - 250 = ?", options: ["750", "850", "650", "800"], answer: 0 },
  { q: "Cube of 3 (3 x 3 x 3)?", options: ["9", "27", "18", "81"], answer: 1 },
  { q: "How many sides does a hexagon have?", options: ["5", "8", "7", "6"], answer: 3 },
  { q: "LCM of 4 and 6?", options: ["12", "24", "10", "8"], answer: 0 },
  { q: "3/4 as a decimal?", options: ["0.34", "0.50", "0.75", "0.25"], answer: 2 },
  { q: "A right angle is how many degrees?", options: ["45", "90", "180", "60"], answer: 1 }
];

var science = [
  { q: "Which gas do we breathe in?", options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"], answer: 0 },
  { q: "Chemical formula of water?", options: ["CO2", "O2", "H2O", "NaCl"], answer: 2 },
  { q: "Planet closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], answer: 1 },
  { q: "Which planet is called the Red Planet?", options: ["Jupiter", "Venus", "Saturn", "Mars"], answer: 3 },
  { q: "Plants make food by?", options: ["Photosynthesis", "Digestion", "Breathing", "Melting"], answer: 0 },
  { q: "Hardest natural substance?", options: ["Iron", "Gold", "Diamond", "Rock"], answer: 2 },
  { q: "Number of bones in an adult human?", options: ["106", "206", "306", "250"], answer: 1 },
  { q: "SI unit of force?", options: ["Joule", "Watt", "Meter", "Newton"], answer: 3 },
  { q: "Boiling point of water (in Celsius)?", options: ["100", "50", "90", "120"], answer: 0 },
  { q: "Which gas do plants take in?", options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Helium"], answer: 1 },
  { q: "Centre of an atom is called?", options: ["Electron", "Proton", "Nucleus", "Cell"], answer: 2 },
  { q: "Which travels faster?", options: ["Sound", "Car", "Train", "Light"], answer: 3 },
  { q: "Largest organ of human body?", options: ["Skin", "Heart", "Liver", "Brain"], answer: 0 },
  { q: "Chemical symbol of Gold?", options: ["Go", "Gd", "Au", "Ag"], answer: 2 },
  { q: "Force that pulls things towards Earth?", options: ["Magnetism", "Gravity", "Friction", "Wind"], answer: 1 },
  { q: "Which organ pumps blood?", options: ["Lungs", "Kidney", "Stomach", "Heart"], answer: 3 },
  { q: "The Sun is a?", options: ["Star", "Planet", "Moon", "Comet"], answer: 0 },
  { q: "Which metal is liquid at room temperature?", options: ["Iron", "Mercury", "Copper", "Zinc"], answer: 1 },
  { q: "Unit of electric current?", options: ["Volt", "Ohm", "Ampere", "Watt"], answer: 2 },
  { q: "Earth's natural satellite?", options: ["Sun", "Mars", "Star", "Moon"], answer: 3 }
];

var computer = [
  { q: "HTML stands for?", options: ["HyperText Markup Language", "High Text Machine Language", "Home Tool Markup Language", "Hyper Tool Make Language"], answer: 0 },
  { q: "CSS is used for?", options: ["Database", "Styling web pages", "Making games", "Internet speed"], answer: 1 },
  { q: "Brain of the computer?", options: ["Mouse", "RAM", "CPU", "Monitor"], answer: 2 },
  { q: "Tag for the biggest heading?", options: ["<h6>", "<head>", "<p>", "<h1>"], answer: 3 },
  { q: "Which is an input device?", options: ["Keyboard", "Monitor", "Printer", "Speaker"], answer: 0 },
  { q: "RAM stands for?", options: ["Read Any Memory", "Random Access Memory", "Run All Memory", "Real Access Machine"], answer: 1 },
  { q: "Which is an output device?", options: ["Mouse", "Keyboard", "Monitor", "Scanner"], answer: 2 },
  { q: "Extension of an HTML file?", options: [".txt", ".css", ".js", ".html"], answer: 3 },
  { q: "Tag used to make a link?", options: ["<a>", "<link>", "<img>", "<p>"], answer: 0 },
  { q: "Which language adds logic to a web page?", options: ["HTML", "JavaScript", "CSS", "Word"], answer: 1 },
  { q: "1 byte = how many bits?", options: ["4", "16", "8", "2"], answer: 2 },
  { q: "Which is an operating system?", options: ["Chrome", "Google", "Excel", "Windows"], answer: 3 },
  { q: "Father of the computer?", options: ["Charles Babbage", "Newton", "Einstein", "Bill Gates"], answer: 0 },
  { q: "Tag for a paragraph?", options: ["<h1>", "<p>", "<br>", "<b>"], answer: 1 },
  { q: "CSS property to change text color?", options: ["font", "bgcolor", "color", "text"], answer: 2 },
  { q: "Shortcut key to copy?", options: ["Ctrl + V", "Ctrl + X", "Ctrl + Z", "Ctrl + C"], answer: 3 },
  { q: "WWW stands for?", options: ["World Wide Web", "World Web Window", "Web Wide World", "Wide World Work"], answer: 0 },
  { q: "Which one is a web browser?", options: ["Windows", "Chrome", "Python", "Word"], answer: 1 },
  { q: "Binary language uses which digits?", options: ["1 and 2", "0 to 9", "0 and 1", "A and B"], answer: 2 },
  { q: "Tag used to show an image?", options: ["<pic>", "<image>", "<photo>", "<img>"], answer: 3 }
];

var gk = [
  { q: "Capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: 1 },
  { q: "National animal of India?", options: ["Lion", "Elephant", "Tiger", "Leopard"], answer: 2 },
  { q: "Who is called the Father of the Nation?", options: ["Nehru", "Subhash Bose", "Sardar Patel", "Mahatma Gandhi"], answer: 3 },
  { q: "India's Independence Day is on?", options: ["15 August", "26 January", "2 October", "14 November"], answer: 0 },
  { q: "Largest planet in the solar system?", options: ["Earth", "Jupiter", "Saturn", "Mars"], answer: 1 },
  { q: "Currency of India?", options: ["Dollar", "Taka", "Rupee", "Yen"], answer: 2 },
  { q: "National bird of India?", options: ["Sparrow", "Parrot", "Eagle", "Peacock"], answer: 3 },
  { q: "Largest continent?", options: ["Asia", "Africa", "Europe", "Australia"], answer: 0 },
  { q: "Longest river in India?", options: ["Yamuna", "Ganga", "Godavari", "Sutlej"], answer: 1 },
  { q: "Taj Mahal is in which city?", options: ["Delhi", "Jaipur", "Agra", "Lucknow"], answer: 2 },
  { q: "Number of days in a leap year?", options: ["365", "364", "360", "366"], answer: 3 },
  { q: "Capital of Punjab?", options: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"], answer: 0 },
  { q: "National flower of India?", options: ["Rose", "Lotus", "Sunflower", "Jasmine"], answer: 1 },
  { q: "Largest ocean in the world?", options: ["Indian", "Atlantic", "Pacific", "Arctic"], answer: 2 },
  { q: "Who was the first Prime Minister of India?", options: ["Indira Gandhi", "Lal Bahadur Shastri", "Sardar Patel", "Jawaharlal Nehru"], answer: 3 },
  { q: "How many colors are in a rainbow?", options: ["7", "5", "6", "8"], answer: 0 },
  { q: "Republic Day of India is on?", options: ["15 August", "26 January", "30 January", "1 May"], answer: 1 },
  { q: "Capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], answer: 2 },
  { q: "Highest mountain peak in the world?", options: ["K2", "Kanchenjunga", "Nanda Devi", "Mount Everest"], answer: 3 },
  { q: "Who wrote the Indian national anthem?", options: ["Rabindranath Tagore", "Bankim Chandra", "Premchand", "Sarojini Naidu"], answer: 0 }
];

// ---------- VARIABLES ----------
var currentQuestions = [];   // questions of the chosen subject
var currentIndex = 0;        // which question number we are on
var score = 0;               // how many answers are correct
var selected = -1;           // option the user selected (-1 means nothing selected)

// ---------- FUNCTIONS ----------

// runs when a subject button is clicked
function startQuiz(subject) {
  if (subject == "maths") {
    currentQuestions = maths;
    document.getElementById("subjectName").innerHTML = "Maths Quiz";
  } else if (subject == "science") {
    currentQuestions = science;
    document.getElementById("subjectName").innerHTML = "Science Quiz";
  } else if (subject == "computer") {
    currentQuestions = computer;
    document.getElementById("subjectName").innerHTML = "Computer Quiz";
  } else {
    currentQuestions = gk;
    document.getElementById("subjectName").innerHTML = "GK Quiz";
  }

  currentIndex = 0;
  score = 0;

  // hide home screen, show quiz screen
  document.getElementById("startBox").style.display = "none";
  document.getElementById("quizBox").style.display = "block";

  showQuestion();
}

// shows the current question on the page
function showQuestion() {
  var item = currentQuestions[currentIndex];

  document.getElementById("qNumber").innerHTML = "Question " + (currentIndex + 1) + " of 20";
  document.getElementById("question").innerHTML = item.q;

  // put the 4 options on the 4 buttons and reset their color
  for (var i = 0; i < 4; i++) {
    var btn = document.getElementById("op" + i);
    btn.innerHTML = item.options[i];
    btn.className = "";
    btn.disabled = false;
  }

  // new question: nothing selected, so Confirm is dull and disabled
  selected = -1;
  document.getElementById("confirmBtn").disabled = true;
  document.getElementById("confirmBtn").style.display = "block";
  document.getElementById("nextBtn").style.display = "none";
}

// runs when an option is clicked (choice = 0,1,2 or 3)
function selectOption(choice) {
  selected = choice;

  // remove highlight from all options, then highlight the selected one
  for (var i = 0; i < 4; i++) {
    document.getElementById("op" + i).className = "";
  }
  document.getElementById("op" + choice).className = "selected";

  // now Confirm button can be used
  document.getElementById("confirmBtn").disabled = false;
}

// runs when Confirm button is clicked
function checkAnswer() {
  var choice = selected;
  var correct = currentQuestions[currentIndex].answer;

  if (choice == correct) {
    score = score + 1;
    document.getElementById("op" + choice).className = "correct";
  } else {
    document.getElementById("op" + choice).className = "wrong";
    document.getElementById("op" + correct).className = "correct";
  }

  // stop the user from clicking again
  for (var i = 0; i < 4; i++) {
    document.getElementById("op" + i).disabled = true;
  }

  document.getElementById("confirmBtn").style.display = "none";
  document.getElementById("nextBtn").style.display = "block";
}

// runs when Next button is clicked
function nextQuestion() {
  currentIndex = currentIndex + 1;

  if (currentIndex < 20) {
    showQuestion();
  } else {
    showResult();
  }
}

// shows the final score
function showResult() {
  document.getElementById("quizBox").style.display = "none";
  document.getElementById("resultBox").style.display = "block";
  document.getElementById("score").innerHTML = "Your Score: " + score + " / 20";
}

// runs when Exit Quiz button is clicked
function exitQuiz() {
  var sure = confirm("Do you really want to exit the quiz?");

  if (sure == true) {
    document.getElementById("quizBox").style.display = "none";
    document.getElementById("startBox").style.display = "block";
  }
}

// go back to the home screen
function goHome() {
  document.getElementById("resultBox").style.display = "none";
  document.getElementById("startBox").style.display = "block";
}
