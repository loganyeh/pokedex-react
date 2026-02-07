
export function SplashPageColor(type){

    switch(type){
        case "Normal":
        case "Fighting":
            return "bg-gray-300";

        case "Fire":
            return "bg-red-300";

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
            return "bg-brown-300";

        case "Psychic":
            return "bg-purple-300";

        case "Ghost":
            return "bg-grey-300";

        case "Dragon":
            return "bg-orange-300";

        case "Dark":
        case "Steel":
            return "bg-gray-300";

        case "Fairy":
            return "bg-pink-300";

        default:
            return "bg-blue-300"
    }

}