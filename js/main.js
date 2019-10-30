/*----- constants -----*/
const winPattern = [[0,1,2],[3,4,5],[6,7,8,],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
const player = ['X' , 'O']
/*----- app's state (variables) -----*/
let turn =player[0] , winner , msg , moves = 0;
/*----- cached element references -----*/
var btn = document.querySelector('section')
var reset = document.getElementById('reset')
msg = document.querySelector('h2')
/*----- event listeners -----*/
btn.addEventListener('click' , clickHandler)
reset.addEventListener('click' , init)
/*----- functions -----*/
function init(){
    for (i = 0 ; i <= winPattern.length ; i++){
        document.getElementById(i).textContent = '';}
        // document.getElementById(i).classList.remove('red');
        msg.textContent = 'Someone Make a Move'
        winner = 'none'
        moves = 0;}
function clickHandler(evt){
    moves +=1 ; 
    if (winner !== turn && evt.target.textContent === ''){
        if (turn === player[0] ){ 
            turn = player[1]
            msg.textContent = `Make a move ${player[0]}!`
            evt.target.removeAttribute('class')}
        else{
            evt.target.className = 'red'
            msg.textContent = `Make a move ${player[1]}!`
            turn = player[0]}
        evt.target.textContent = turn;
        result();}}
function result (){
    for (i = 0 ; i < winPattern.length ; i++){
        if( document.getElementById(winPattern[i][0]).textContent === turn && document.getElementById(winPattern[i][1]).textContent === turn && document.getElementById([winPattern[i][2]]).textContent ===turn){
            winner = turn;
            msg.textContent = `${turn} is the winner!`
            // document.getElementById('forHover').removeAttribute('id')
        }
        else if (moves == 9 && winner !==turn ){
            msg.textContent = 'TIE'}}}





