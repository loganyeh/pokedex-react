import { PokemonTypeImgs } from "../../utils/PokemonTypeImgs";

function PokemonTypeIcon({ data }){

    return(
        <>
            {/* <div className="h-28 w-28 flex justify-center items-center bg-white text-black shadow-lg rounded-full">{data?.type_one}</div> */}
            <div className="h-28 w-28 flex justify-center items-center bg-white text-black shadow-lg rounded-full">
                {/* <i className='bx bx-water text-5xl'></i> */}
                {PokemonTypeImgs(data)} + {data?.name};
                {/* left off here ****** */}
            </div>
        </>
    )
}

export default PokemonTypeIcon;