
const message = document.getElementById("message");
// פונקציה לבדיקת משתמש קיים
function checkUserExists(name, password) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  return users.find((user) => user.name === name && user.password === password);
}
// פונקציה לבדוק אם המשתמש כבר קיים ולבצע התחברות
function logIn(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const user = checkUserExists(name, password);

  if (!name || !password) {
    message.style.display = "block";
    message.textContent = "נא למלאות פרטים";
    return;
  }
  if (!isValidPassword(password)) {
    message.style.display = "block";
    message.textContent ="הסיסמה חייבת להיות לפחות 6 תווים, לכלול לפחות אות אחת ותו מיוחד אחד (!@#$%^&*).";
    return;
  }
  if (user) {
    message.style.display = "block";
    message.textContent = "ברוך הבא למועדון";
    localStorage.setItem("currentUser" , JSON.stringify(user))
    setTimeout(() => {
        location.replace("/html.html/games.html");
    },2000 )
  }
   else {
    message.style.display = "block";
    message.textContent = "משתמש לא נמצא, אנא הרשמו.";
    showSignUp()
  }
}

function showSignUp() {
  document.getElementById("extraFields").style.display = "block";
}

function isValidPassword(password) {
    const minLength = 6;
    const specialChars = /[!@#$%^&*]/;
    const letters = /[A-Za-z]/;
    return (
      password.length >= minLength &&
      specialChars.test(password) &&
      letters.test(password)
    );
  }
function resetForm() {
  document.getElementById("loginForm").reset();
  document.getElementById("extraFields").style.display = "none";
  document.getElementById("message").style.display = "none";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

// פונקציה לרישום משתמש חדש
function signUp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (!name || !password || !email || !phone) {
    message.style.display = "block";
    message.textContent = "נא למלא את כל השדות";
    return;
  }

  users.push({ name, password, email, phone });
  localStorage.setItem("users", JSON.stringify(users));
  message.style.display = "block";
  message.textContent = "משתמש נרשם בהצלחה! נא התחבר.";
  document.getElementById("extraFields").style.display = "none";
}