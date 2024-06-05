
let  turn = true // true = x
let counter = 0;
let btns = document.querySelectorAll(".bbtt");
let win = document.getElementById("win") 
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
            alert(this.textContent + " you win ")
        },300)
    }
    
    else{
       if(counter === 9){
        setTimeout(() => {
            alert(  "אין מנצחים , לא נורא תנסו שוב ")
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
