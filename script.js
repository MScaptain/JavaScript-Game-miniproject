let xp=0;
let health=100;
let gold=50;
let currentWeapon=0;
let fightning;
let monsterhealth;
let inventory = ["stick","sword","dagger"];
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const goldText = document.querySelector('#goldText');
const healthText = document.querySelector('#healthText');
const monsterStates = document.querySelector('#monsterStates');
const monsterNameText = document.querySelector('#monsterNameText');
const monsterHealthText = document.querySelector('#monsterHealthText');
const locations = [
  {
    name: "town square",
    "button text": ["Go to store","Go to cave","Fight villain"],
    "button function":[goStore, goCave, fightVillain],
    text: "you are in town"
  },
  {
    name: "store",
    "button text": ["buy 10 health(10 gold)","buy 10 weapon(30 gold)","got to town square"],
    "button function":[buyhealth, buyweapon, gotown],
    text: "Entered in store"
  }
]

const weapon = [
  {
    name: "stick",
    power:5
  },
  {
    name: "dagger",
    power:30
  },
  {
    name: "hammer",
     power:50
  },
  {
    name: "sward",
    power:100
  }
]
//initialize button

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightVillain;

function goStore() {
  update(locations[01]);
}

function buyhealth() {
  if(gold<=0){
    text.innerText="mission impossible";
  }
  else{gold-=10
  health+=10
  goldText.innerText=gold;
  healthText.innerText=health;
      }
}
function buyweapon() {
  if{
  if(gold>=30){
    gold-=30;
    currentWeapon++;
    goldText.innerText=gold;
    let newweapon = weapon[currentWeapon].name;
    text.innerText="You have a " +newweapon+ ".";
    inventory.push(newweapon);
    text.innerText="Now we have" +inventory;}
    
  else{
    text.innerText="you dont have enough gold";
  }
  }
  else{
    
  }
}
function update(locations) {
  button1.innerText = locations["button text"][0];
  button2.innerText = locations["button text"][1];
  button3.innerText = locations["button text"][2];
  button1.onclick = locations["button function"][0];
  button2.onclick = locations["button function"][1];
  button3.onclick = locations["button function"][2];
  text.innerText = locations.text;
}
function gotown() {
update(locations[0]);
}
function goCave() {
  console.log("Going to Cave")
}
function fightVillain() {
  console.log("fighting villain")
}
