
export function PokemonTypeImgs(type){

    switch(type){
        case "Normal":
        case "Fighting":
            return "bg-gray-300";

        case "Fire":
            return "bg-red-400";

        case "Water":
        case "Ice":
        case "Flying":
            return "bg-blue-300";
            
        case "Electric":
            return "bg-yellow-300";

        case "Grass":
        case "Poison":
        case "Bug":
            return "bg-green-300";

        case "Ground":
        case "Rock":
            return "bg-yellow-600";

        case "Psychic":
            return "bg-purple-300";

        case "Ghost":
            return "bg-purple-300";

        case "Dragon":
            return "bg-orange-400";

        case "Dark":
        case "Steel":
            return "bg-gray-400";

        case "Fairy":
            return "bg-pink-200";

        default:
            return <i className='bx bx-water text-5xl'></i>
    }
}
