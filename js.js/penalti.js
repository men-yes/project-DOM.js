
let shotCount = 0;
const maxShots = 10;
let win = 0;
function shoot(direction) {
    shotCount++ ;
    const goalkeeper = document.getElementById('goalkeeper');
    const message = document.getElementById('message');
    const boxWaith = document.getElementById('boxWaith');
    let btn = document.getElementsByClassName("buttons")

    // Reset goalkeeper position
    goalkeeper.style.left = '125px';

    // Move goalkeeper
    if (Math.random() < 0.33) {
        if (direction === 'left') {
            goalkeeper.style.left = '25px';
        } else if (direction === 'right') {
            goalkeeper.style.left = '225px';
        }
    } else if (Math.random() < 0.66) {
        if (direction === 'center') {
            goalkeeper.style.left = '125px';
        }
    }
    
    // Check if goal is scored
    setTimeout(() => {
        if (
            (direction === 'left' && goalkeeper.style.left !== '25px') ||
            (direction === 'center' && goalkeeper.style.left !== '125px') ||
            (direction === 'right' && goalkeeper.style.left !== '225px')
        ) {
            win++;
            message.textContent = 'Goal!';
            boxWaith.textContent = win
           
        } else {
            message.textContent = 'Saved!';
        }
    }, 500);
    message.textContent = '';
    if(shotCount >= maxShots){
        endGame();
    }
    function endGame(){
        if(win > 5){
            alert("you win");
        }
        else{
          alert("you lose")  
        }
    }
}
