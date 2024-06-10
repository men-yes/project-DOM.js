document.addEventListener("DOMContentLoaded", function () {
  let message = document.getElementById("message");
  let current = localStorage.getItem("currentUser");
  if (!current) {
    message.innerText = "אתה לא מחובר. לך להירשם";
    message.style.display = "block";
    setTimeout(function () {
      window.location.href = "/index.html";
    }, 2000);
  } else {
    currentUser = JSON.parse(current);
    const name = currentUser.name;
    const score = currentUser.score || 0; // ניקוד התחלתי 0 אם לא קיים
    let highestScore = localStorage.getItem("highestScore") || 0;
    message.innerText = `Welcome ${name}. Your score: ${score}. Highest score: ${highestScore}`;
  }
});
let highestScore = localStorage.getItem("highestScore") || 0;
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

const homeButton = document.getElementById("bt");
homeButton.addEventListener("click", function () {
  window.location.href = "/html.html/games.html";
});

let shootCount = 0;
const maxShoots = 5;
let score = 0;

function shoot(direction) {
  // הסתרת כל הכדורים לפני הצגת הכדור הנכון
  document.querySelectorAll(".goal-ball").forEach((ball) => {
    ball.style.display = "none";
  });
  shootCount++;
  const goalkeeper = document.getElementById("goalkeeper");
  const boxWaith = document.getElementById("boxWaith");
  const message = document.getElementById("message");

  // Reset goalkeeper position
  goalkeeper.style.left = "125px";

  const ballElement = document.getElementById(
    "ball" + (direction === "left" ? 1 : direction === "center" ? 2 : 3)
  );
  ballElement.style.display = "block";

  if (Math.random() < 0.33) {
    if (direction === "left") {
      goalkeeper.style.left = "25px";
    } else if (direction === "right") {
      goalkeeper.style.left = "225px";
    }
  } else if (Math.random() < 0.66) {
    if (direction === "center") {
      goalkeeper.style.left = "125px";
    }
  }
  setTimeout(() => {
    if (
      (direction === "left" && goalkeeper.style.left !== "25px") ||
      (direction === "center" && goalkeeper.style.left !== "125px") ||
      (direction === "right" && goalkeeper.style.left !== "225px")
    ) {
      score++;
      message.textContent = "Goal!";
      boxWaith.textContent = score;
    } else {
      message.textContent = "Saved!";
    }
    if (shootCount >= maxShoots) {
      endGame();
    }
  }, 500);
  message.textContent = "";
}
function endGame() {
  if (score >= 3) {
    document.getElementById("message").innerText = "you win";
    boxWaith.textContent = score;
    setTimeout(() => {
      confetti({
        particleCount: 600,
        spread: 100,
        origin: { y: 0.6 },
      });
      setTimeout(() => {
        const local = localStorage.getItem("currentUser");
        if (local) {
          const user = JSON.parse(local);
          user.score = (user.score || 0) + 1; // עדכון ניקוד
          localStorage.setItem("currentUser", JSON.stringify(user)); // שמירה ב-localStorage
          let highestScore = localStorage.getItem("highestScore") || 0;
          if (user.score > highestScore) {
            localStorage.setItem("highestScore", user.score);
            message.innerText += ` (New high score!)`;
          }
        }
        resetGame();
      }, 2000);
    }, 500);
  } else {
    message.textContent = "You lose!";
    setTimeout(() => {
      resetGame();
    }, 2000);
  }
}
function resetGame() {
  shootCount = 0;
  score = 0;
  const goalkeeper = document.getElementById("goalkeeper");
  const message = document.getElementById("message");
  const boxWaith = document.getElementById("boxWaith");
  goalkeeper.style.left = "125px";
  message.textContent = "";
  boxWaith.textContent = score;
  // הסתרת כל הכדורים לפני הצגת הכדור הנכון
  document.querySelectorAll(".goal-ball").forEach((ball) => {
    ball.style.display = "none";
  });
}
const instructionsBtn = document.getElementById("instructionsBtn");
const instructionsModal = document.getElementById("instructionsModal");
// קביעת כפתור הסגירה
const closeBtn = document.getElementsByClassName("close")[0];
// כאשר לוחצים על הכפתור, פותחים את תיבת ההוראות
instructionsBtn.onclick = function () {
  instructionsModal.style.display = "block";
};
// כאשר לוחצים על כפתור הסגירה, סוגרים את תיבת ההוראות
closeBtn.onclick = function () {
  instructionsModal.style.display = "none";
};
// כאשר לוחצים מחוץ לתיבת ההוראות, סוגרים את תיבת ההוראות
window.onclick = function (event) {
  if (event.target == instructionsModal) {
    instructionsModal.style.display = "none";
  }
};
