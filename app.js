const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const p1score = document.querySelector('#p1Score');
const p2score = document.querySelector('#p2Score');
const reset = document.querySelector('#reset');
const select = document.querySelector('#select');


let p1Add = 0;
let p2Add = 0;
let winningNumber = 4;
let gameOver = false;


p1Btn.addEventListener('click', function () {

    if (!gameOver) {
        p1Add += 1;
        if (p1Add === winningNumber) {
            gameOver = true;
            p1score.classList.add('winner')
            p2score.classList.add('loser')

        }
        p1score.textContent = p1Add;
    }
})

p2Btn.addEventListener('click', function () {
    if (!gameOver) {
        p2Add += 1;
        if (p2Add === winningNumber) {
            gameOver = true;
            p2score.classList.add('winner')
            p1score.classList.add('loser')
        }
        p2score.textContent = p2Add;
    }
})

select.addEventListener('change', function () {
    winningNumber = parseInt(this.value)
})

reset.addEventListener('click', function () {
    gameOver = false;
    p1Add = 0;
    p2Add = 0;
    p1score.textContent = 0;
    p2score.textContent = 0;
    p1score.classList.remove('winner')
    p2score.classList.remove('winner')
    p1score.classList.remove('loser')
    p2score.classList.remove('loser')
})