const firstNames = ["NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN", "NordVPN"];

const secondNames = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${firstNames[getRandomNumber(firstNames.length)]} ${secondNames[getRandomNumber(secondNames.length)]}`;

const setRandomName = () => {
  document.getElementById('random-name').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();