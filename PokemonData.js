import charmanderImg from '../pokemon/assets/charmander.png'
import bulbasaurImg from '../pokemon/assets/bulbasaur.png'
import pikachuImg from '../pokemon/assets/pikachu.png'
import squirtleImg from '../pokemon/assets/squirtle.png'
const PokemonData = [
  {
    name: "Charmander",
    image: charmanderImg,
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
    borderColor : "#FF5733",
    emoji : "🔥"
  },
  {
    name: "Squirtle",
    image: squirtleImg,
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
    borderColor : "#6493EA",
    emoji : "🌊"
  },

  {
    name: "Bulbasaur",
    image: bulbasaurImg,
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    borderColor : "#66CC66",
    emoji : "🥗"
  },

  {
    name: "Pikachu",
    image: pikachuImg,
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
    borderColor : "#FFD700",
    emoji : "⚡"
  },
];

export default PokemonData