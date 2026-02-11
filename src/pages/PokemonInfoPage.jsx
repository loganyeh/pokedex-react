import { useState, useEffect, useContext } from "react";
import { MyContext } from "../context/MyContext";
import SearchBar from "../components/SplashPage/SearchBar";
import IDBar from "../components/SplashPage/IDBar";
import NameIDTitle from "../components/SplashPage/NameIDTitle";
import RegionName from "../components/SplashPage/RegionName";
import PokemonStats from "../components/SplashPage/PokemonStats";
import PokemonType from "../components/SplashPage/PokemonType";
import { SplashPageColor } from "../utils/SplashPageColor";
import { fetchPokemon } from "../api/api";

function PokemonInfoPage(){
    const { query, setQuery, queryBool, setQueryBool, name, setName, number, setNumber, isNumBar, setIsNumBar, numBarID, setNumBarID } = useContext(MyContext);
    const [data, setData] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState(null);
    // const [queryNum, setQueryNum] = useState(699);

    useEffect(() => {
        const getPokemon = async() => {
            const data = await fetchPokemon(query);
            setData(data);
        }

        getPokemon();

    }, [queryBool]);

    return(
        <>
            
            <div className={`h-screen w-screen ${SplashPageColor(data?.type_one)} text-white`}>

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
                            <div onClick={() => console.clear()} className="h-1/3 w-full absolute top-0 text-9xl text-black font-normal opacity-50 z-10 cursor-pointer">アマルルガ</div>
                            <div className="h-1/3 w-full absolute top-1/3 pl-3 text-2xl font-normal text-shadow-lg">
                                Height: <span className="text-xl font-light text-shadow-lg">{data?.height}m</span><br />
                                Weight: <span className="text-xl font-light text-shadow-lg">{data?.weight}kg</span>
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
                        <div className="h-2/12 w-full flex justify-start items-center text-6xl text-shadow-lg">Base stats:</div>
                        
                        {/* Pokemon INFO/STATS */}
                        <PokemonStats data={data} />
                    </div>


                </div>

                {/* SEARCH BAR */}
                <SearchBar data={data} />

            </div>
        </>
    )
}

export default PokemonInfoPage;