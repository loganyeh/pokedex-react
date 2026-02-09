import { Link } from "react-router-dom";
import IDBar from "../components/SplashPage/IDBar";
import IDBarNumber from "../components/SplashPage/IDBarNumber";

function HomePage(){
    const linkNameArr = ["/home", "/", "/"];
    const iconImageArr = [
        'bx bx-home-alt-2 text-5xl rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer',
        'bx bx-info-circle text-5xl rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer',
        'bx bx-star text-5xl rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer',
    ];

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
                        <div className="border-2 border-black min-h-full w-6/8 pb-40 flex flex-wrap justify-between">
                            <div className="border-2 border-black bg-white h-70 w-60 my-6 rounded-xl shadow-md">
                                <div className="border border-black h-4/5 w-full flex justify-center items-center">
                                    O
                                </div>
                                <div className="border border-black h-1/5 w-full flex">
                                    <div className="border-2 border-red-600 h-full w-1/4 flex justify-center items-center">#1</div>
                                    <div className="border-2 border-red-600 h-full w-3/4 flex justify-center items-center">Squirtle</div>
                                </div>
                            </div>
                            
                        </div>  

                        <div className="border-2 border-red-600 min-h-full w-1/8"></div>
                </div>

            </div>
        </>
    )
}

export default HomePage;