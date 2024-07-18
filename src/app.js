const prompt = require('readline-sync');

class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        if(this.type === "mago") {
            this.attackWeapon = "magia";
        } else if(this.type === "guerreiro") {
            this.attackWeapon = "espada";
        } else if(this.type === "monge") {
            this.attackWeapon = "artes marciais";
        } else if(this.type === "ninja") {
            this.attackWeapon = "shuriken";
        } else {
            this.attackWeapon = "as próprias mãos";
        }

        console.log(`O(A) ${this.type} chamado(a) ${this.name} atacou usando ${this.attackWeapon}. A personagem tem ${this.age} anos de idade`);

    }

}

let heroName = prompt.question('Qual o nome do seu personagem? ');
let heroAge = prompt.question('Quantos anos seu personagem tem? ');
let heroType = prompt.question('Qual a classe? "mago" | "guerreiro" | "monge" | "ninja" - ');

let heroChar = new Hero(heroName, heroAge, heroType);
heroChar.attack();