import { useEffect, useState, useRef } from "react";
import { SplashPageColor } from "../../utils/SplashPageColor";
import { fetchPokemon } from "../../api/api";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

function PokemonCard({ data }){
    const { query, setQuery, queryBool, setQueryBool, favArr, setFavArr } = useContext(MyContext);
    const [temp, setTemp] = useState();
    const [isFavColor, setIsFavColor] = useState(false);

    const isFavorite = (pokemonName) => {
        return favArr.some(pokemon => data?.name === pokemonName);
    };

    const favorite = isFavorite(data?.name);

    const addToFavorites = (pokemon) => {
        setFavArr(prev => [...prev, pokemon]);
      }
    
      const removeFromFavorites = (pokemonName) => {
        setFavArr(prev => prev.filter(pokemon => data?.name !== pokemonName));
      }

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

    function onClickNumber(){
        setQuery(data?.id);
        setQueryBool(!queryBool);
    }

    function onClickFavorite(e){
        e.preventDefault()
        if (favorite) removeFromFavorites(data?.name)
        else addToFavorites(data);
    }
    
    return(
        <>
            <div className={`border border-gray-50 ${SplashPageColor(data?.type_one)} text-white h-auto w-65 my-6 rounded-xl shadow-xl`}>
                
                {/* NAME and NUMBER */}
                <div className="h-8 w-full p-4 text-2xl font-semibold text-shadow-lg flex justify-between">
                    <div className="text-xl">#{data?.id}</div>
                    <div className="h-8 w-18 flex justify-between items-center">
                        {/* favorite toggle */}
                        <i onClick={""} className={`bx bxs-heart h-auto w-auto flex justify-center items-center text-3xl hover:text-red-500 active:text-red-400 cursor-pointer ${favorite ? "text-red-500" : "text-white"}`} ></i>
                        {/* go to info toggle */}
                        <Link to={"/"}><i onClick={onClickNumber} className='bx bx-right-arrow h-auto w-auto flex justify-center items-center text-3xl hover:text-gray-500 active:text-gray-400 cursor-pointer'></i></Link>
                    </div>
                </div>
                <div className="h-8 w-full p-4 text-3xl font-semibold text-shadow-lg">{data?.name}</div>

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
                <div className="h-8 w-full flex justify-center items-end text-3xl text-black font-semibold text-shadow-lg opacity-60">ブラッキー</div>

            </div>
        
        </>
    )
    
}

export default PokemonCard;