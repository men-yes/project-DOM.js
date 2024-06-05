// let ppp={
//     name: "ploni",
//     password: 12345,
//     phone: "0527600974",
// }
// // let userKey = "user"
// let checkUser = JSON.stringify("ppp");
// window.localStorage.setItem("user","checkUser");
// let uuu = localStorage.getItem("user")
// console.log(uuu);



 // פונקציה לבדיקת משתמש קיים
function checkUserExists(name, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    return users.find(user => user.name === name && user.password === password);
}

// פונקציה לרישום משתמש חדש
function signUp() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!name || !password || !email || !phone) {
        alert('תמלא את השדות!! .');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.name === name)) {
        alert('User already exists. Please log in.');
        return;
    }

    users.push({ name, password, email, phone });
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully!');
}

// פונקציה לבדוק אם המשתמש כבר קיים ולבצע התחברות
function logIn() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    if (name === "" || password === ""){
        alert("תמלא את השדות!! בלי להתחכם!")
    }
    else{
        const user = checkUserExists(name, password);
        if (user) {
            alert('Welcome back! Logged in successfully.');
        } else {
            document.getElementById('extraFields').style.display = 'block';
            alert('User not found. Please sign up.');
        }
    }
   
}
function  resetForm(){
    document.getElementById('loginForm').reset();
    document.getElementById('extraFields').style.display = 'none';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    
}