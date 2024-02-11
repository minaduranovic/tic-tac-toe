function openPlayerConfig(event) {
    editedPlayer= +event.target.dataset.playerid;
//   editedPlayer=s
  playerConfig.style.display = 'block';
  backdrop.style.display = 'block';
}

function closePlayerConfig() {
  playerConfig.style.display = 'none';
  backdrop.style.display = 'none';
  formEl.firstElementChild.classList.remove('error');
  errorsOutput.textContent='';
  formEl.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData= new FormData(event.target);
  const enteredPlayerName=formData.get('playername').trim(); //bjeline

  if (!enteredPlayerName){
    event.target.firstElementChild.classList.add('error');
    errorsOutput.textContent='Please enter a valid name';
    return;
  }
const updatedPlayerData=document.getElementById('player-' +editedPlayer+'-data');
updatedPlayerData.children[1].textContent=enteredPlayerName;

// if (editedPlayer===1){
//     players[0].name=enteredPlayerName;
// }else{
//     players[1].name=enteredPlayerName;
// }
players[editedPlayer-1].name=enteredPlayerName;
closePlayerConfig();
}
