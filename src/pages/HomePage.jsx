import { Link } from "react-router-dom";
import { fetchPokemon } from "../api/api";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "../context/MyContext";
import PokemonCard from "../components/Home/PokemonCard";

function HomePage(){
    // const { query, setQuery } = useContext(MyContext);
    const [cards, setCards] = useState([]);
    const linkNameArr = ["/home", "/", "/"];
    const iconImageArr = [
        'bx bx-home-alt-2 text-5xl rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer',
        'bx bx-info-circle text-5xl rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer',
        'bx bx-star text-5xl rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer',
    ];
    
    useEffect(() => {
        const getPokemon = async () => {
            try {
                const list = [];
                for(let i = 1; i <= 151; i++ ){
                    list.push(fetchPokemon(i));
                }
                const data = await Promise.all(list);
                setCards(data);
            } 
            
            catch (error) {
                console.error(error);
            } 
        };

        // getPokemon();
        
    }, []);


    return(
        <>
            <div className="h-screen w-screen">
                <div className="border border-black h-1/12 w-full flex justify-between items-start pt-4 text-2xl">
                    <div className="border border-black h-full w-1/5 flex justify-around items-center">
                        {linkNameArr.map((title, index) => {
                            return <Link key={index} to={title}>
                                <i className={iconImageArr[index]}></i>
                            </Link>
                        })}
                    </div>
                    
                    <div className="border border-black h-10 w-auto flex justify-center items-center">
                        <div className="h-10 w-20 flex justify-center items-center text-shadow-lg hover:text-gray-200 active:text-white cursor-pointer">&lt;</div>
                        <div className="h-10 w-auto flex justify-center items-center text-5xl text-shadow-lg hover:text-gray-200 active:text-white cursor-pointer">Pokedex</div>
                        <div className="h-10 w-20 flex justify-center items-center text-shadow-lg hover:text-gray-200 active:text-white cursor-pointer">&gt;</div>
                    </div>

                    <div className="border border-black h-full w-1/5">LEAVE EMPTY</div>

                </div>

                {/* body page */}
                <div className="border-2 border-red-600 h-auto min-h-full w-full flex">
                        <div className="border-2 border-red-600 min-h-full w-1/8"></div>

                        {/* pokemon list */}
                        <div className="border-2 border-black min-h-full w-6/8 pb-40 flex flex-wrap justify-center items-center">
                            
                            {/* {cards.map((card, index) => {
                                return <PokemonCard key={index} data={card}/>
                            })} */}
                            <PokemonCard />
                            
                        </div>  

                        <div className="border-2 border-red-600 min-h-full w-1/8"></div>
                </div>

            </div>
        </>
    )
}

export default HomePage;