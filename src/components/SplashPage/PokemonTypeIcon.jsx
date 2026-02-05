
function PokemonTypeIcon({ data }){

    return(
        <>
            <div className="h-28 w-28 flex justify-center items-center bg-white text-black shadow-lg rounded-full">{data?.type_one}</div>
        </>
    )
}

export default PokemonTypeIcon;