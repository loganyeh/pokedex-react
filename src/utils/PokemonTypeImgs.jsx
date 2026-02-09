
export function PokemonTypeImgs(type){

    switch(type){
        case "Normal":
            return <i className='bx bx-circle text-5xl'></i>;
        case "Fire":
            return <i className='bx bxs-hot text-5xl'></i>;
        case "Water":
            return <i className='bx bx-water text-5xl'></i>;
        case "Electric":
            return <i className='bx bxs-bolt text-5xl'></i>
        case "Grass":
            return <i className='bx bx-leaf text-5xl'></i>;
        case "Ice":
            return <i className='bx bx-cloud-snow text-5xl' ></i>;
        case "Fighting":
            return <i className='bx bxs-hand text-5xl'></i>;
        case "Poison":
            return <i className='bx bxs-skull text-5xl'></i>;
        case "Ground":
            return <i className='bx bx-world text-5xl'></i>;
        case "Flying":
            return <i className='bx bxs-plane-take-off text-5xl'></i>;
        case "Psychic":
            return <i className='bx bx-analyse text-5xl'></i>;
        case "Bug":
            return <i className='bx bx-bug text-5xl'></i>;
        case "Rock":
            return <i className='bx bxl-sketch text-5xl'></i>;
        case "Ghost":
            return <i className='bx bx-ghost text-5xl'></i>;
        case "Dragon":
            return <i className='bx bxs-plane text-5xl'></i>;
        case "Dark":
            return <i className='bx bx-moon text-5xl'></i>;
        case "Steel":
            return <i className='bx bx-hard-hat text-5xl'></i>;
        case "Fairy":
            return <i className='bx bx-star text-5xl'></i>;
        default:
            return <i className='bx bx-question-mark text-5xl'></i>
    }
}
