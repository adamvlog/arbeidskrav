//henter inn referanser til html-elementer ved hjelp av CSS-klasser og querySelector.
const henrietteImg = document.getElementsByClassName("hero")[0];
const arianaImg = document.getElementsByClassName("hero")[1];
const wyonaImg = document.getElementsByClassName("hero")[2];
const daarImg = document.querySelector(".dragon");

//henter referanser til HTML-elementer som viser helsen til heltene og dragen.
let henrietteTxt = document.getElementById("healer-health-txt");
let arianaTxt = document.getElementById("archer-health-txt");
let wyonaTxt = document.getElementById("warrior-health-txt");
let daarTxt = document.querySelector(".dragon-health-txt");

//når en helt blir klikket, utløses funksjonen (henrietteAttacking, arianaAttack, wyonaAttack).
henrietteImg.addEventListener("click", henrietteAttacking);
arianaImg.addEventListener("click", arianaAttack);
wyonaImg.addEventListener("click", wyonaAttack);


document.getElementById("healer-name-txt").innerText = "Henriette";
document.getElementById("archer-name-txt").innerText = "Ariana";
document.getElementById("warrior-name-txt").innerText = "Wyona";
document.getElementById("dragon-name-txt").innerText = "Daar";

let heroesArray = [
  {
    id: 0,
    name: "Henriette Healer",
    maxHP: 400,
    currentHP: 400,
    damage: 100,
    alive: true,
    img: henrietteImg,
  },
  {
    id: 1,
    name: "Ariana archer",
    maxHP: 600,
    currentHP: 600,
    damage: 400,
    alive: true,
    img: arianaImg,
  },
  {
    id: 2,
    name: "Wyona Warrior",
    maxHP: 800,
    currentHP: 800,
    damage: 400,
    alive: true,
    img: wyonaImg,
  },
];

let dragonObject = {
  name: "Daar Dragon",
  maxHP: 2000,
  currentHP: 2000,
  damage: 200,
  alive: true,
};


//utfører angrep fra hver helt på dragen og kaller deretter funksjonen DaarConterAttack for dragens motangrep.
function henrietteAttacking() {
  if (dragonObject.alive) {
    attack(0);
  }

  DaarConterAttack();
}

function arianaAttack() {
  if (dragonObject.alive) {
    attack(1);
  }

  DaarConterAttack();
}

function wyonaAttack() {
  if (dragonObject.alive) {
    attack(2);
  }

  DaarConterAttack();
}


//Når brukeren trykker på en av heltene, skal helten angripe drage
//Den gir beskjed om skaden, oppdaterer dragens helse, og sjekker om dragen er beseiret.

function attack(heroIndex) {
  alert(
    `${heroesArray[heroIndex].name} har gjort ${heroesArray[heroIndex].damage} skade på ${dragonObject.name}`
  );

  dragonObject.currentHP -= heroesArray[heroIndex].damage;

  daarTxt.textContent = `${dragonObject.currentHP}/2000 HP`;

  if (dragonObject.currentHP <= 0) {
    daarImg.remove();
    daarTxt.textContent = "0 / 2000 HP";
    dragonObject.alive = false;
    alert("Gratulerer du vant!");
  }
}

function DaarConterAttack() {
  
  // WHile loop skal loope gjennom arrayen, og finne en tilfeldig objekt i arrayen som er alive == true;
  
    let randomindex;
  
    do {
      randomindex = Math.floor(Math.random() * 3);
    } while (heroesArray[randomindex].alive === false);
    
    let heroType = ["healer", "archer", "warrior"];
    let heroHealthElement = document.getElementById(
      `${heroType[randomindex]}-health-txt`
    );
  
    alert(`${dragonObject.name} har angrepet ${heroesArray[randomindex].name}`);
  
    heroesArray[randomindex].currentHP -= dragonObject.damage;
  
    heroHealthElement.innerText = `${heroesArray[randomindex].currentHP} / ${heroesArray[randomindex].maxHP} HP`;
  
    if (heroesArray[randomindex].currentHP <= 0) {
      heroesArray[randomindex].alive = false;
      heroesArray[randomindex].img.remove();
      heroesArray[randomindex].currentHP = 0;
      heroHealthElement.innerText = `${heroesArray[randomindex].currentHP} / ${heroesArray[randomindex].maxHP} HP`;
    }
  
    if (heroesArray.length === 0) {
      alert(`${dragonObject.name} har vunnet!`);
    }
  }