const gameData=[
  [0,0,0],
  [0,0,0],
  [0,0,0],
];

let editedPlayer = 0;
let activePlayer=0;
let currentRound=1;
const players = [
  { name: '', symbol: 'X' },
  { name: '', symbol: 'O' },
];

const playerConfig = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const formEl = document.querySelector("form");
const errorsOutput = document.getElementById("config-errors");
const gameArea=document.getElementById('active-game');
const activePlayerName=document.getElementById('active-player-name');

const editPl1 = document.getElementById("edit-pl1");
const editPl2 = document.getElementById("edit-pl2");
const cancelConfig = document.getElementById("cancel-config-btn");
const startNewGame=document.getElementById('start-game-btn');
// const gameFieldEl=document.querySelectorAll('#game-board li');
const gameBoardEl=document.getElementById('game-board');



editPl1.addEventListener("click", openPlayerConfig);
editPl2.addEventListener("click", openPlayerConfig);

cancelConfig.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

formEl.addEventListener("submit", savePlayerConfig);

startNewGame.addEventListener('click', startNewGames);

// for (const el of gameFieldEl){
//   el.addEventListener('click', selectGameField);

// }
gameBoardEl.addEventListener('click', selectGameField);