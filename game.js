const henrietteImg = document.getElementsByClassName("hero")[0];
const arianaImg = document.getElementsByClassName("hero")[1];
const wyonaImg = document.getElementsByClassName("hero")[2];
const daarImg = document.querySelector(".dragon");

let henrietteTxt = document.getElementById("healer-health-txt");
let arianaTxt = document.getElementById("archer-health-txt");
let wyonaTxt = document.getElementById("warrior-health-txt");

let daarTxt = document.querySelector(".dragon-health-txt");

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


