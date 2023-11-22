const containerPoke = document.querySelector(".container")
const searchInput = document.querySelector(".poke-input")

const colors = {
    fire: `#FDDFDF`,
    grass: `#DEFDE0`,
    electric: `#FCF7DE`,
    water: `#DEF3FD`,
    ground: `#f4e7da`,
    rock: `#d5d5d4`,
    fairy: `#fceaff`,
    poison: `d6b3ff`,
    bug: `#f8d5a3`,
    dragon: `#97b3e6`,
    psychic: `#eaeda1`,
    flying: `#F5F5F5`,
    fighting: `#E6E0D4`,
    normal: `#F5F5F5`,
    ica: `##e0f5ff`
}

const maxPoke = 151

const initPokemon = async () => {
    for (let i = 1; i < maxPoke; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    let url = (`https://pokeapi.co/api/v2/pokemon/${id}`)
    let res = await fetch(url);
    let data = await res.json();
    createPokeCard(data);
}

const createPokeCard = (data) => {
    const name = data.name[0].toUpperCase() + data.name.slice(1);
    const id = data.id.toString().padStart(3, `0`);
    const type = data.types[0].type.name;
    const color = colors[type]

    const pokemonEl = document.createElement(`div`);
    pokemonEl.classList.add(`poke-wrapper`);
    pokemonEl.style.backgroundColor = `${color}`

    pokemonEl.innerHTML = `
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${name} image">
    <p class="poke-id">#${id}</p>
    <h2 class="poke-name">${name}</h2>
    <p class="poke-type" >${type}</p>
    `

    containerPoke.appendChild(pokemonEl)
}

initPokemon();

searchInput.addEventListener(`input`,function(e){
    const pokeNames = document.querySelectorAll(`.poke-name`);
    const search = searchInput.value.toLowerCase();
    console.log(pokeNames)

pokeNames.forEach((pokeName) => {
    pokeName.parentElement.style.display = `block`

    if (!pokeName.innerHTML.toLowerCase().includes(search)) {
        pokeName.parentElement.style.display = `none`
    }
});


});

