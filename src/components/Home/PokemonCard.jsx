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
            {/* <div className={`border-2 border-black ${"bg-white"} h-70 w-60 my-6 rounded-xl shadow-md`}>
                <div className={`border border-black h-4/5 w-full flex justify-center items-center ${"bg-white"} rounded-t-xl`}>
                    <img src={temp?.sprite} alt={temp?.name} className="h-55 w-55" />
                </div>
                <div className="border border-black h-1/5 w-full flex">
                    <div className="border-2 border-red-600 h-full w-1/5 flex justify-center items-center">#{temp?.id}</div>
                    <div className="border-2 border-red-600 h-full w-3/5 flex justify-center items-center">{temp?.name}</div>
                    <div className="border-2 border-red-600 h-full w-1/5 flex justify-center items-center">
                        <i className='bx bxs-bookmark-star' ></i>
                    </div>
                </div>
            </div> */}

            {/* <img src={temp?.sprite} alt={temp?.name} className="h-55 w-55" /> */}

            <div className={`border border-black ${"bg-white"} h-auto w-100 my-6 rounded-xl shadow-md`}>
                {/*  */}
                <div className="border-2 border-red-600 h-12 w-full">#197</div>
                <div className="border-2 border-red-600 h-12 w-full">Umbreon</div>
                {/*  */}
                <div className="border-2 border-red-600 h-24 w-full">
                    <div className="h-1/3 w-1/3">Region: Kanto</div>
                    <div className="h-1/3 w-1/3">Height: 3.54m</div>
                    <div className="h-1/3 w-1/3">Weight: 38.22kg</div>
                </div>
                {/*  */}
                <div className="border-2 border-red-600 h-48 w-full">
                    <img src={temp?.sprite} alt={temp?.name} className="h-55 w-55" />
                </div>
                {/*  */}
                <div className="border border-red-600 h-24 w-full">ブラッキー</div>
            </div>
        
        </>
    )
    
}

export default PokemonCard;