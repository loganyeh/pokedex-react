import { useEffect, useState } from "react";
import { SplashPageColor } from "../../utils/SplashPageColor";
import { fetchPokemon } from "../../api/api";

function PokemonCard({ data }){
    const [temp, setTemp] = useState();

    useEffect(() => {
        const getPokemon = async () => {
            try {
                const data = await fetchPokemon(197);
                setTemp(data);

            } catch (error) {
                console.error(error);
            }
        }

        getPokemon();

    }, []);

    return(
        <>
            <div className={`border border-black ${SplashPageColor(temp?.type_one)} text-white h-90 w-65 my-6 rounded-xl shadow-md`}>
                
                {/* NAME and NUMBER */}
                <div className="border border-red-600 h-1/12 w-full p-2 text-2xl font-semibold text-shadow-lg">#197</div>
                <div className="border border-red-600 h-1/12 w-full p-2 text-2xl font-semibold text-shadow-lg">Umbreon</div>

                {/* H/W REGION INFO */}
                <div className="border-2 border-red-600 h-3/12 w-full flex">
                    {/* region */}
                    <div className="border-2 border-black h-full w-1/3 flex justify-center items-center text-sm text-shadow-lg">Region: Kanto</div>
                    {/* height and weight */}
                    <div className="border border-black h-full w-2/3">
                        <div className="border border-black h-1/2 w-full text-shadow-lg"></div>
                        <div className="border border-black h-1/2 w-full text-sm text-shadow-lg">
                            <span className="font-semibold">Height:</span> 3.54m
                            <br />
                            <span className="font-semibold">Weight:</span> 38.22kg
                        </div>
                    </div>

                </div>

                {/* image */}
                <div className="border border-red-600 h-6/12 w-full flex justify-center items-center">
                    <img src={temp?.sprite} alt="" className="h-70 w-70 border border-blue-600" />
                </div>

                {/* katakana */}
                <div className="border border-red-600 h-1/12 w-full flex justify-center items-end text-3xl text-black font-semibold text-shadow-lg opacity-80">ブラッキー</div>

            </div>
        
        </>
    )
    
}

export default PokemonCard;