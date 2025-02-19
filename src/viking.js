// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let saxonAlea = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[saxonAlea];
    let vikingAlea = Math.floor(Math.random() * this.vikingArmy.length);
    let viking = this.vikingArmy[vikingAlea];
    let result = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxonAlea, 1);
      return result;
    }
  }
  saxonAttack() {
    let saxonAlea = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[saxonAlea];
    let vikingAlea = Math.floor(Math.random() * this.vikingArmy.length);
    let viking = this.vikingArmy[vikingAlea];
    let result = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.splice(vikingAlea, 1);
    }
    return result;
  }
  // showStatus()
}
