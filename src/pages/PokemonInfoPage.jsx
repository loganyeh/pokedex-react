import { useState, useEffect } from "react";
import SearchBar from "../components/SplashPage/SearchBar";
import IDBar from "../components/SplashPage/IDBar";
import NameIDTitle from "../components/SplashPage/NameIDTitle";
import RegionName from "../components/SplashPage/RegionName";
import PokemonStats from "../components/SplashPage/PokemonStats";
import PokemonType from "../components/SplashPage/PokemonType";

function PokemonInfoPage(){
    const [data, setData] = useState(null);
    const [queryNum, setQueryNum] = useState(699);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${queryNum}`);
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
                setData(pokemonData);
            } catch (error) {
                console.error("error");
            }
        }
        fetchPokemon();
    }, []);

    return(
        <>
            <div className="h-screen w-screen bg-blue-300 text-white">

                {/* Pagination ID BAR */}
                <IDBar data={data} />

                {/* POKEMON NAME AND ID NUMBER */}
                <NameIDTitle data={data} />

                {/* POKEMON PICTURE AND INFO */}
                <div className="h-8/12 w-full flex">
                    {/* LEFT SPLASH PAGE */}
                    <div className="h-full w-2/3 flex">

                        {/* Region TITLE */}
                        <RegionName data={data} />
                        
                        {/* NAME TITLE */}
                        <div className="h-full w-11/12 relative">
                            <div className="h-1/3 w-full absolute top-0 text-9xl text-black font-normal opacity-50 z-10">アマルルガ</div>
                            <div className="h-1/3 w-full absolute top-1/3 pl-3 text-2xl font-normal text-shadow-sm">
                                Height: <span className="text-xl font-light text-shadow-sm">{data?.height}m</span><br />
                                Weight: <span className="text-xl font-light text-shadow-sm">{data?.weight}kg</span>
                            </div>

                            {/* img sprite */}
                            <div className="h-1/3 w-full absolute top-1/3 left-35 flex justify-center items-center z-0">
                                <img src={data?.sprite} alt={data?.name} className="h-180 w-180 opacity-90"/>
                            </div>
                        </div>


                    </div>

                    {/* RIGHT SPLASH PAGE */}
                    <div className="h-full w-1/3">
                        {/* Pokemon Type */}
                        <PokemonType data={data} />

                        {/* Base Stats TITLE */}
                        <div className="h-2/12 w-full flex justify-start items-center text-6xl text-shadow-sm">Base stats:</div>
                        
                        {/* Pokemon INFO/STATS */}
                        <PokemonStats data={data} />
                    </div>


                </div>

                {/* SEARCH BAR */}
                <SearchBar />

            </div>
        </>
    )
}

export default PokemonInfoPage;