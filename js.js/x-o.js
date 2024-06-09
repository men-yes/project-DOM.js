
document.addEventListener("DOMContentLoaded", function() {
    let none = document.getElementById("none");
    let current = localStorage.getItem("currentUser");
    if (!current) {
        none.innerText = "אתה לא מחובר. לך להירשם";
        none.style.display = "block";
      setTimeout(function() {
        window.location.href = "/index.html";
      },2500);  
    }   
});
const instructionsBtn = document.getElementById("instructionsBtn");
const instructionsModal = document.getElementById("instructionsModal");
// קביעת כפתור הסגירה
const closeBtn = document.getElementsByClassName("close")[0];
// כאשר לוחצים על הכפתור, פותחים את תיבת ההוראות
instructionsBtn.onclick = function() {
    instructionsModal.style.display = "block";
}
// כאשר לוחצים על כפתור הסגירה, סוגרים את תיבת ההוראות
closeBtn.onclick = function() {
    instructionsModal.style.display = "none";
}
// כאשר לוחצים מחוץ לתיבת ההוראות, סוגרים את תיבת ההוראות
window.onclick = function(event) {
    if (event.target == instructionsModal) {
        instructionsModal.style.display = "none";
    }
}

const israel = document.getElementById("israel");
const local = localStorage.getItem("currentUser");
if (local) {
    const user = JSON.parse(local); // הפוך את המחרוזת לאובייקט
    const name = user.name;
    israel.innerText = "wellcom " + name;
  } else {
    israel.innerText = "No user found";
  }


const homeButton = document.getElementById('bt');
homeButton.addEventListener('click', function() {
  window.location.href = '/html.html/games.html'; 
});

let  turn = true // true = x
let counter = 0;
let btns = document.querySelectorAll(".bbtt");

btns.forEach(b => {
    b.addEventListener("click" , btnClick)
})
function  resetGame(){
    const cells = document.querySelectorAll('.bbtt');
    cells.forEach(cell => {
        cell.innerText = ''; // איפוס התוכן של כל תא
    });
     counter = 0;
     win.style.display = "none"
}
function btnClick(){
    if (this.textContent != "") return;
    counter ++;
    if(turn) this.textContent = "X";
    else this.textContent = "O";

    if (chekIfWin()){
       win.style.display = "block"
        confetti({
            particleCount: 600,
            spread: 100,
            origin: { y: 0.6 }
        });
        setTimeout(() => {
            // alert(this.textContent + " you win ")
        },300)
    }
    else{
       if(counter === 9){
        setTimeout(() => {
            // alert(  "אין מנצחים , לא נורא תנסו שוב ")
        },100)
       } 
    }
    turn = !turn;
}
function chekIfWin(){
    const btns = document.querySelectorAll(".bbtt");
    if ( btns[0].textContent != "" && btns[0].textContent == btns[1].textContent && btns[1].textContent == btns[2].textContent  ){
        return true;
    }
    else if (btns[3].textContent != "" && btns[3].textContent == btns[4].textContent && btns[4].textContent == btns[5].textContent  ){
        return true;
    }
    else if (btns[6].textContent != "" && btns[6].textContent == btns[7].textContent && btns[7].textContent == btns[8].textContent  ){
        return true;
    }
    else if (btns[0].textContent != "" && btns[0].textContent == btns[3].textContent && btns[3].textContent == btns[6].textContent  ){
        return true;
    }
    else if (btns[1].textContent != "" && btns[1].textContent == btns[4].textContent && btns[4].textContent == btns[7].textContent  ){
       return true;
    }
    else if (btns[2].textContent != "" && btns[2].textContent == btns[5].textContent && btns[5].textContent == btns[8].textContent  ){
        return true;
    }
    else if (btns[0].textContent != "" && btns[0].textContent == btns[4].textContent && btns[4].textContent == btns[8].textContent  ){
        return true;
    }
    else if (btns[2].textContent != "" && btns[2].textContent == btns[4].textContent && btns[4].textContent == btns[6].textContent  ){
        return true;
    }
    else {
        return false;
    }
}
