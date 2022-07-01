//pokemon master! 

var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
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
];

//challenge 1 console.log the pokeomn object whose id is evenly divisible by 3
// for(let i = 0; i < pokémon.length; i++) {
//     if(pokémon[i].id % 3 == 0) {
//         console.log(pokémon[i].name);
//     }
// }

//challenge 2 console.log the pokeon object that have more that 1 type
// for(let i = 0; i < pokémon.length; i++) {
//     // console.log(pokémon[i].types);
//     let types = pokémon[i].types;
//     // console.log(types);
//     for(let j = 0; j < types.length; j++) {
//         if(j = 2) {
//             console.log(pokémon[i].name + " has 2 types");
//         }
//     }
// }

//challenge 3 console.log the names of the pokemon whose only type is poison
for(let i = 0; i < pokémon.length; i++) {
    let types = pokémon[i].types;
    // console.log(pokémon[i].types)
    for(let j = 0; j < types.length; j++) {
        if(j == 0 && types[j] == "poison" && types.length < 2) {
        console.log(pokémon[i].name);
        let name = pokémon[i].name;
        let newName = reverseName(name);
        console.log(newName);
        }
    }
}
//bonus challenge: console.log the names of the poison only pokemon in reverse
function reverseName(str) {
    var splitString = str.split("");
    console.log(splitString);
    var reverseArray = splitString.reverse();
    console.log(reverseArray);
    var joinArray = reverseArray.join("");
    return joinArray;
}

//challenge 4 console.log the first type of all the pokemon whose second type is flying
// for(let i = 0; i < pokémon.length; i++) {
//     let types = pokémon[i].types;
//     for(let j = 0; j < types.length; j++) {
//         if(types[j] == "flying") {
//             console.log(pokémon[i].name + " first type is " + types[0]);
//         }
//     }
// }