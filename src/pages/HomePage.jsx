import { Link } from "react-router-dom";
import { fetchPokemon } from "../api/api";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "../context/MyContext";
import PokemonCard from "../components/Home/PokemonCard";

function HomePage(){
    // const { query, setQuery } = useContext(MyContext);
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        const getPokemon = async () => {
            try {
                const list = [];
                for(let i = 1; i <= 10; i++ ){
                    list.push(fetchPokemon(i));
                }
                const data = await Promise.all(list);
                setCards(data);
            } 
            
            catch (error) {
                console.error(error);
            } 
        };

        getPokemon();
        
    }, []);


    return(
        <>
            <div className="h-screen w-screen bg-blue-200">
                <div className="h-1/12 w-full flex justify-between items-start text-2xl text-shadow-lg">
                    <div className="h-full w-1/5 flex justify-around items-center">
                        <Link to={"/home"}><i className='bx bx-home-alt-2 text-5xl text-white rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer'></i></Link>
                        <Link to={"/"}><i className='bx bx-info-circle text-5xl text-white rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer'></i></Link>
                        <Link to={"/favorites"}><i className='bx bx-star text-5xl text-white rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer'></i></Link>
                    </div>
                    
                    <div className="h-full w-auto flex justify-center items-center">
                        <div className="h-10 w-auto flex justify-center items-center text-5xl text-white text-shadow-lg">Pokedex</div>
                    </div>

                    <div className="h-full w-1/5 flex justify-center items-center">
                        {/* <Link to={"/favorites"}><i className='bx bx-star text-5xl text-shadow-lg text-white rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer'></i></Link> */}
                    </div>

                </div>

                {/* body page */}
                <div className="bg-blue-200 h-auto min-h-full w-full flex">
                        <div className="min-h-full w-1/8"></div>

                        {/* pokemon list */}
                        <div className="min-h-full w-6/8 px-10 pb-40 flex flex-wrap justify-between">
                            
                            {cards.map((card, index) => {
                                return <PokemonCard key={index} data={card}/>
                            })}
                            
                        </div>  

                        <div className="min-h-full w-1/8"></div>
                </div>

            </div>
        </>
    )
}

export default HomePage;