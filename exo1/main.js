let personnes = [
    { prenom: "Emma", age: 10 },
    { prenom: "Lucas", age: 18 },
    { prenom: "Sofia", age: 25 },
    { prenom: "Maxime", age: 32 },
    { prenom: "Léa", age: 40 },
    { prenom: "Antoine", age: 8 },
    { prenom: "Amélie", age: 55 },
    { prenom: "Pierre", age: 63 },
    { prenom: "Nathalie", age: 70 },
    { prenom: "Jacques", age: 80 },
    { prenom: "Alice", age: 28 },
    { prenom: "Thomas", age: 36 },
    { prenom: "Camille", age: 12 },
    { prenom: "Élise", age: 50 },
    { prenom: "Paul", age: 17 }
];
console.log(personnes);

let tabMajeur = personnes.filter(checkAge)

function checkAge(personne) {
    if (personne.age >= 18) {
        return personne.prenom
    }
}

console.log(tabMajeur)

const prenomTab = tabMajeur.map(getPrenom);

function getPrenom(item){
    return (item.prenom)
}

console.log(prenomTab)