
export const fetchPokemon = async (query) => {
    try {
        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${(name || number || numBarID || 134)}`);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        const data = await response.json();
        const pokemonData = {
            sprite: data.sprites.front_default,
            id: data.id,
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            region: "Kanto",
            height: data.height,
            weight: data.weight,
            hp: data.stats[0].base_stat,
            defense: data.stats[2].base_stat,
            special_attack: data.stats[3].base_stat,
            special_defense: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
            attack: data.stats[1].base_stat,
            type_one: data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1),
            // type_two: data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1),
            // figure out what do do if it has more than 1 or more than 2 types 
            // add more types ????

        }

        return pokemonData;

    } catch (error) {
        console.error(`Pokemon does not exist.`);
    }
}
