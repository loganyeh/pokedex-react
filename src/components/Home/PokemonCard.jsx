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
            <div className={`border border-gray-200 ${SplashPageColor(data?.type_one)} text-white h-auto w-65 my-6 rounded-xl shadow-md`}>
                
                {/* NAME and NUMBER */}
                <div className="h-8 w-full p-4 text-2xl font-semibold text-shadow-lg flex justify-between">
                    <div>#{data?.id}</div>
                    <div className="h-10 w-10 flex justify-center items-center">
                        <i className='bx bxs-heart text-3xl hover:text-red-500 cursor-pointer' ></i>
                        {/* left off here ***** */}
                    </div>
                </div>
                <div className="h-8 w-full p-4 text-2xl font-semibold text-shadow-lg">{data?.name}</div>

                {/* H/W REGION INFO */}
                <div className="h-23 w-full flex">
                    {/* region */}
                    <div className="h-full w-1/3 flex justify-center items-center text-sm rotate-270 text-shadow-lg">Region: {data?.region}</div>
                    {/* height and weight */}
                    <div className="h-full w-2/3">
                        <div className="h-1/2 w-full text-shadow-lg"></div>
                        <div className="h-1/2 w-full text-md text-shadow-lg">
                            <span className="font-semibold">Height:</span> {data?.height}m
                            <br />
                            <span className="font-semibold">Weight:</span> {data?.weight}kg
                        </div>
                    </div>

                </div>

                {/* image */}
                <div className="h-45 w-full flex justify-center items-center">
                    <img src={data?.sprite} alt="" className="h-70 w-70" />
                </div>

                {/* katakana */}
                <div className="h-8 w-full flex justify-center items-end text-3xl text-black font-semibold text-shadow-lg opacity-80">ブラッキー</div>

            </div>
        
        </>
    )
    
}

export default PokemonCard;