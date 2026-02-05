import PokemonTypeIcon from "./PokemonTypeIcon";

function PokemonType({ data }){

    return(
        <>
            <div className="h-2/12 w-6/12 flex justify-around items-center">
                <PokemonTypeIcon data={data} />
                <PokemonTypeIcon data={data} />
            </div>
        </>
    )
}

export default PokemonType;