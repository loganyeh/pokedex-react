import { fetchPokemon } from "../api/api";

// name to number function
export async function nameToPokemonID(query){

    try {
        const data = await fetchPokemon(query);
        console.log(data?.id);

        return data?.id;
        
    } catch (error) {
        console.error(error);
    }


}