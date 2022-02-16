let lifes = 1;
let timeleft = 10;
let timeMosquitoCreation;
const difficulty = window.location.search.replace('?', '');

// timer panel
const timer = setInterval(() => {
  timeleft--;
  if(timeleft < 0) {
    clearInterval(timer);
    clearInterval(insertMosquito);
    window.location.assign('win.html');
  } else {
    document.getElementById('timeleft').textContent = timeleft;
  };
  
}, 1000);

// level
if(difficulty === 'normal') {
  timeMosquitoCreation = 1200;
} else if (difficulty === 'hard') {
  timeMosquitoCreation = 800;
} else if (difficulty === 'hardcore')  {
  timeMosquitoCreation = 500;
};

// automatic mosquito removing
function removeMosquito() {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    document.getElementById("l-" + lifes).src = "assets/img/empty-heart.png";
    lifes++;
    if (lifes > 3) {
      window.location.assign("game-over.html");
    };
  };
};

function randomPosition() {
  var positionX = Math.floor(Math.random() * innerWidth) - 90;
  var positionY = Math.floor(Math.random() * innerHeight) - 90;
  positionX = positionX < 0 ? 5 : positionX;
  positionY = positionY < 0 ? 5 : positionY;
  createMosquitoElement(positionX, positionY);
};

function createMosquitoElement(x, y) {
  const mosquito = document.createElement("img");
  mosquito.setAttribute("src", "assets/img/mosquito.png");
  mosquito.className = `${randomSize()} ${reflect()}`;
  mosquito.id = "mosquito";
  mosquito.style.position = "absolute";
  mosquito.style.left = `${x}px`;
  mosquito.style.top = `${y}px`;
  document.body.appendChild(mosquito);
  mosquito.addEventListener('click', ()=> { mosquito.remove() });
};

function reflect() {
  const classe = Math.floor(Math.random() * 2);
  if(classe == 1) return 'reflect';
  else return;
}

function randomSize() {
  const classe = Math.floor(Math.random() * 3);
  switch (classe) {
    case 0:
      return "mosquito-sm";
    case 1:
      return "mosquito-md";
    case 2:
      return "mosquito-lg";
  };
};
randomSize();