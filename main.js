// HSR Quiz

// event listener
document.getElementById("submitBtn").addEventListener("click", mark);

// variables
let ans1 = document.getElementById("input1");
let ans2 = document.getElementById("input2");
let ans3 = document.getElementById("input3");
let ans4 = document.getElementById("input4");
let bubAns1 = document.getElementById("bubbleAnswer1");
let bubAns2 = document.getElementById("bubbleAnswer2");
let bubAns3 = document.getElementById("bubbleAnswer3");
let bubAns4 = document.getElementById("bubbleAnswer4");
let pom1 = document.getElementById("pompom1");
let pom2 = document.getElementById("pompom2");
let pom3 = document.getElementById("pompom3");
let pom4 = document.getElementById("pompom4");
let finalScore = document.getElementById("score");

// functions
function mark() {
  let score = 0;
  if (ans1.value.toLowerCase() == "coffee") {
    bubAns1.innerHTML = "Correct!";
    pom1.innerHTML = "<img src='imgs/pom-pom6.webp' width='100px' />";
    score++;
  } else {
    bubAns1.innerHTML = "Incorrect!";
    pom1.innerHTML = "<img src='imgs/pom-pom2.png' width='100px' />";
  }
  if (ans2.value.toLowerCase() == "preservation") {
    bubAns2.innerHTML = "Correct!";
    pom2.innerHTML = "<img src='imgs/pom-pom6.webp' width='100px' />";
    score++;
  } else {
    bubAns2.innerHTML = "Incorrect!";
    pom2.innerHTML = "<img src='imgs/pom-pom2.png' width='100px' />";
  }
  if (ans3.value.toLowerCase() == "camera") {
    bubAns3.innerHTML = "Correct!";
    pom3.innerHTML = "<img src='imgs/pom-pom6.webp' width='100px' />";
    score++;
  } else {
    bubAns3.innerHTML = "Incorrect!";
    pom3.innerHTML = "<img src='imgs/pom-pom2.png' width='100px' />";
  }
  if (
    ans4.value.toLowerCase() == "hi3" ||
    ans4.value.toLowerCase() == "honkai impact 3rd"
  ) {
    bubAns4.innerHTML = "Correct!";
    pom4.innerHTML = "<img src='imgs/pom-pom6.webp' width='100px' />";
    score++;
  } else {
    bubAns4.innerHTML = "Incorrect!";
    pom4.innerHTML = "<img src='imgs/pom-pom2.png' width='100px' />";
  }
  let percent = (score / 4) * 100;
  if (score >= 3) {
    finalScore.innerHTML = `<p>
    <img class="img" src="imgs/pom-pom5.gif" width="90px" />
  </p>
  <p class="bubble" id="bubble4">You obtained a score of ${score}/4 (${percent}%).
  </p>`;
  } else {
    finalScore.innerHTML = `<p>
    <img class="img" src="imgs/pom-pom1.png" width="90px" />
  </p>
  <p class="bubble" id="bubble4">You obtained a score of ${score}/4 (${percent}%). <br/> Try again for a higher score.
  </p>`;
  }
}
