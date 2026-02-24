import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import PokemonCard from "../components/Home/PokemonCard";

function Favorites(){
    const { favorites, setFavorites } = useContext(MyContext);

    return(
        <>
            <div className="h-screen w-screen bg-red-300">
                <div className="h-1/12 w-full flex justify-between items-start text-2xl text-shadow-lg">
                    <div className="h-full w-1/5 flex justify-around items-center">
                        {/* <Link to={"/home"}><i className='bx bx-home-alt-2 text-5xl text-shadow-lg rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer'></i></Link> */}
                        <Link to={"/home"}><i className=  'bx bx-home-alt-2 text-5xl text-white rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer'></i></Link>
                        <Link to={"/"}><i className=  'bx bx-info-circle text-5xl text-white rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer'></i></Link>
                        <Link to={"/favorites"}><i className=  'bx bx-star text-5xl text-white rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer'></i></Link>
                    </div>
                    
                    <div className="h-full w-auto flex justify-center items-center">
                        <div className="h-10 w-auto flex justify-center items-center text-5xl text-white text-shadow-lg">Favorites</div>
                    </div>

                    <div className="h-full w-1/5 flex justify-center items-center">
                        {/* <Link to={"/"}><i className=  'bx bx-info-circle text-5xl rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer'></i></Link> */}
                    </div>

                </div>

                {/* body page */}
                <div className="h-auto min-h-full w-full flex">
                    <div className="min-h-full w-1/8"></div>
                    {/* pokemon list */}
                    <div className="min-h-full w-6/8 px-10 pb-40 flex flex-wrap justify-between">
                        
                        {favorites.length === 0 ? 
                        <div className="h-full w-full flex justify-center items-start mt-60">
                            <div className="text-white text-4xl text-shadow-lg">Add Your Favorite Pokemon</div>
                        </div> 
                        : ""}
                        {favorites.map((pokemon, index) => {
                            return <PokemonCard key={index} data={pokemon} />
                        })}
                    </div>  
                    <div className="min-h-full w-1/8"></div>
                </div>

            </div>
        </>
    )
}

export default Favorites;