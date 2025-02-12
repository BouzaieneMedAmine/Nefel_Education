const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

let pokemonId3 = pokemon => pokemon.id % 3 == 0;
console.log(pokemon.filter(pokemonId3));



let pokemonTypeFire = pokemon => pokemon.types.includes("fire");
console.log(pokemon.filter(pokemonTypeFire));


let pokemonMultipleTypes = pokemon => pokemon.types.length > 1;

console.log(pokemon.filter(pokemonMultipleTypes));


let pokemonName =pokemon => pokemon.name
console.log(pokemon.map(pokemonName));

let pokemonNameWithId = pokemon => pokemon.id > 99 ? `${pokemon.name} (ID: ${pokemon.id})` : pokemon.name;
console.log( pokemon.filter(p => p.id > 99).map(pokemonNameWithId));
console.log( pokemon.map(pokemonNameWithId));


// an array with just the names of the pokémon whose only type is poison
let pokemonPoisson = pokemon => pokemon.types[0] == "poison";
console.log(pokemon.filter(pokemonPoisson).map(pokemonName));

// an array containing just the first type of all the pokémon whose second type is "flying"

let pokemonTypeFlying = pokemon => pokemon.types[0] == "flying";
console.log(pokemon.filter(pokemonTypeFlying).map(pokemon => pokemon.types[0]))

// a count of the number of pokémon that are "normal" type
let pokemonTypeNormal = pokemon => pokemon.types[0] == "normal";
console.log(pokemon.filter(pokemonTypeNormal).length);  


// an array with all pokemon except the pokemon with the id of 148
let pokemonId148 = pokemon => pokemon.id != 148;        
console.log(pokemon.filter(pokemonId148).map(pokemonName));

// an array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy"
let pokemonId35 = pokemon => pokemon.id  != 35  ;
console.log(pokemon.map(pokemonId35).name);

