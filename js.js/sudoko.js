 
 document.addEventListener("DOMContentLoaded", function() {
    let message = document.getElementById("message");
    let current = localStorage.getItem("currentUser");
    if (!current) {
        message.innerText = "אתה לא מחובר. לך להירשם";
        message.style.display = "block";
      setTimeout(function() {
        window.location.href = "/index.html";
      },2500);  
    }   
});

 const homeButton = document.getElementById('bt');
 homeButton.addEventListener('click', function() {
   window.location.href = '/html.html/games.html'; 
 });
 
let numSeleted = null;
let tileSelected = null;
let error = 0;
let board = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];
let solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];
window.onload = function () {
  setGame();
};
function setGame() {
  for (let i = 1; i <= 9; i++) {
    let num = document.createElement("div");
    num.id = i;
    num.innerText = i;
    num.addEventListener("click", selectNum)
    num.classList.add("num");
    document.getElementById("digits").appendChild(num);
  }
  for (let j = 0; j < 9; j++) {
    for (let x = 0; x < 9; x++) {
      let tile = document.createElement("div");
      tile.id = j.toString() + "-" + x.toString();
        if (board[j][x] != "-"){
            tile.innerText = board [j] [x];
            tile.classList.add("tile-start")
        }
        if (j == 2 || j == 5){
            tile.classList.add("horizontal")
        }
        if ( x == 2 || x == 5){
            tile.classList.add("vertical")
        }
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }
  function selectNum(){
    if (numSeleted != null){
        numSeleted.classList.remove("num-selected");
    }
    numSeleted = this;
    numSeleted.classList.add("number-selected")
    }
    function selectTile(){
      if(numSeleted){
        if(this.innerText != "")return;
      }
        this.innerText = numSeleted.id;
        let coords = this.id.split("-")
        let j = parseInt(coords[0]);
        let x = parseInt(coords[1]);
        if (solution[j][x] == numSeleted.id){
            this.innerText = numSeleted.id;
        }
        else {
            error += 1;
            document.getElementById("errors").innerText = error;
        }
    }
}
function  resetGame(){
    const cells = document.querySelectorAll('.bbtt');
    cells.forEach(cell => {
        cell.innerText = ''; // איפוס התוכן של כל תא
    });
    //  counter = 0;
    //  win.style.display = "none"
}
