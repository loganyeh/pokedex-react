import { useState, useEffect } from "react";


function PokemonInfoPage(){
    const [sprite, setSprite] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
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

                {/* POKEMON NUMBERS */}
                <div className="h-1/12 w-full flex justify-center items-start pt-2 text-2xl">
                    <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">&lt;</span>
                    <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">690</span>
                    <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">691</span>
                    <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">692</span>
                    <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">693</span>
                    <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">694</span>
                    <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">695</span>
                    <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">696</span>
                    <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">697</span>
                    <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">698</span>
                    <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">699</span>
                    <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">&gt;</span>
                </div>

                {/* POKEMON NAME AND ID NUMBER */}
                <div className="h-2/12 w-full pl-8 flex flex-col ">
                    <span className="h-full w-full text-3xl flex justify-start items-end text-shadow-sm">#{data?.id}</span>
                    <span className="h-full w-full pt-2 text-5xl text-shadow-sm">{data?.name}</span>
                </div>

                {/* POKEMON PICTURE AND INFO */}
                <div className="h-8/12 w-full flex">

                    {/* LEFT SPLASH PAGE */}
                    <div className="h-full w-2/3 flex">

                        {/* Region TITLE */}
                        <div className="h-full w-1/12">
                            <div className="h-1/2 w-full flex justify-center items-center text-2xl whitespace-nowrap rotate-270">
                                <span className="mr-2 text-2xl font-normal text-shadow-sm">Region: </span><span className="text-xl font-light text-shadow-sm">{data?.region}</span>
                            </div>
                        </div>
                        
                        {/* NAME TITLE */}
                        <div className="border-3 border-black h-full w-11/12 relative">
                            <div className="border border-red-600 h-1/3 w-full text-9xl text-black font-normal opacity-50">アマルルガ</div>
                            <div className="border border-red-600 h-1/3 w-full pl-3 text-2xl font-normal text-shadow-sm">
                                Height: <span className="text-xl font-light text-shadow-sm">{data?.height}m</span><br />
                                Weight: <span className="text-xl font-light text-shadow-sm">{data?.weight}kg</span>
                            </div>

                            {/* TEST TEST**** IMAGE SPRITE */}
                            <div className="h-1/3 w-full flex justify-center items-center absolute top-40 left-15">
                                <img src={data?.sprite} alt={data?.name} className="h-160 w-160 opacity-80"/>
                            </div>
                        </div>


                    </div>

                    {/* RIGHT SPLASH PAGE */}
                    <div className="h-full w-1/3">

                        {/* Pokemon Type */}
                        <div className="h-2/12 w-6/12 flex justify-around items-center">
                            <div className="h-28 w-28 flex justify-center items-center bg-white text-black shadow-lg rounded-full">ROCK IMAGE</div>
                            <div className="h-28 w-28 flex justify-center items-center bg-white text-black shadow-lg rounded-full">SNOW IMAGE</div>
                        </div>
                        {/* Base Stats TITLE */}
                        <div className="h-2/12 w-full flex justify-start items-center text-6xl text-shadow-sm">Base stats:</div>
                        {/* Pokemon INFO/STATS */}
                        <div className="border-l-4 border-gray-200 h-auto max-h-80 w-7/12 mt-6 pl-8 flex flex-wrap text-black">
                            <span className="h-10 w-auto m-2 px-6 py-4 flex justify-start items-center bg-white text-lg font-semibold shadow-md rounded-xl">HP: {data?.hp}</span>
                            <span className="h-10 w-auto m-2 px-6 py-4 flex justify-start items-center bg-white text-lg font-semibold shadow-md rounded-xl">DEFENSE: {data?.defense}</span>
                            <span className="h-10 w-auto m-2 px-6 py-4 flex justify-start items-center bg-white text-lg font-semibold shadow-md rounded-xl">SP. ATTACK: {data?.special_attack}</span>
                            <span className="h-10 w-auto m-2 px-6 py-4 flex justify-start items-center bg-white text-lg font-semibold shadow-md rounded-xl">SP. DEFENSE: {data?.special_defense}</span>
                            <span className="h-10 w-auto m-2 px-6 py-4 flex justify-start items-center bg-white text-lg font-semibold shadow-md rounded-xl">SPEED: {data?.speed}</span>
                            <span className="h-10 w-auto m-2 px-6 py-4 flex justify-start items-center bg-white text-lg font-semibold shadow-md rounded-xl">ATTACK: {data?.attack}</span>
                        </div>
                    </div>


                </div>

                {/* SEARCH BAR */}
                <div className="h-1/12 w-full flex justify-around items-start">

                    {/* search name */}
                    <div className="h-3/5 w-1/4 flex justify-between items-center text-black">
                        <input type="text" className="h-full w-9/12 pl-4 flex justify-center items-center bg-gray-100 text-xl shadow-md rounded-xl" placeholder="Search name"/>
                        <div className="h-full w-2/12 flex justify-center items-center bg-gray-100 text-xl font-medium shadow-md rounded-xl hover:bg-gray-200 active:bg-white cursor-pointer">Go!</div>
                    </div>

                    {/* search number */}
                    <div className="h-3/5 w-1/4 flex justify-between items-center text-black">
                        <input type="text" className="h-full w-9/12 pl-4 flex justify-center items-center bg-gray-100 text-xl shadow-md rounded-xl" placeholder="Search number"/>
                        <div className="h-full w-2/12 flex justify-center items-center bg-gray-100 text-xl font-medium shadow-md rounded-xl hover:bg-gray-200 active:bg-white cursor-pointer">Go!</div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default PokemonInfoPage;