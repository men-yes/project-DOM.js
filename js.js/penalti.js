
const homeButton = document.getElementById('bt');

homeButton.addEventListener('click', function() {
  window.location.href = '/html.html/games.html'; 
});

let shootCount = 0;
const maxShoots =5;
let score = 0;
function shoot(direction) {
    shootCount++ ;
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
            score++;
            message.textContent = 'Goal!';
            boxWaith.textContent = score
           
        } else {
            message.textContent = 'Saved!';
        }
    }, 500);
    message.textContent = '';

    if(shootCount >= maxShoots){
        endGame();
    }

    function endGame(){
        if(score >= 3){
            setTimeout(() => {
             confetti({
             particleCount: 600,
             spread: 100,
             origin: { y: 0.6 }
             });
             alert("you win");
             resetGame();
            },1000)
        }
        else{
          setTimeout(() => {
          alert("you lose");
          resetGame();
        }, 300); 
       }
    } 

  function resetGame() {
    score = 0;
    shootCount = 0;
    boxWaith.textContent = score;
    message.textContent = '';
}

}