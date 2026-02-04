
function PokemonInfoPage(){

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
                    <span className="h-full w-full text-3xl flex justify-start items-end text-shadow-sm">#699</span>
                    <span className="h-full w-full pt-2 text-5xl text-shadow-sm">Aurorus</span>
                </div>

                {/* POKEMON PICTURE AND INFO */}
                <div className="h-8/12 w-full flex">

                    {/* LEFT SPLASH PAGE */}
                    <div className="h-full w-2/3 flex">

                        {/* Region TITLE */}
                        <div className="h-full w-1/12">
                            <div className="h-1/2 w-full flex justify-center items-center text-2xl whitespace-nowrap rotate-270">
                                <span className="mr-2 text-2xl font-normal text-shadow-sm">Region: </span><span className="text-xl font-light text-shadow-sm">Kanto</span>
                            </div>
                        </div>
                        
                        {/* NAME TITLE */}
                        <div className="h-full w-11/12">
                            <div className="h-1/3 w-full text-9xl text-black font-normal opacity-50">アマルルガ</div>
                            <div className="h-1/3 w-full pl-3 text-2xl font-normal text-shadow-sm">
                                Height: <span className="text-xl font-light text-shadow-sm">8.03m</span><br />
                                Weight: <span className="text-xl font-light text-shadow-sm">90.22kg</span>
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
                            <span className="h-10 w-auto m-2 px-6 py-4 flex justify-start items-center bg-white text-lg font-semibold shadow-md rounded-xl">HP: 123</span>
                            <span className="h-10 w-auto m-2 px-6 py-4 flex justify-start items-center bg-white text-lg font-semibold shadow-md rounded-xl">DEFENSE: 72</span>
                            <span className="h-10 w-auto m-2 px-6 py-4 flex justify-start items-center bg-white text-lg font-semibold shadow-md rounded-xl">SP. ATTACK: 99</span>
                            <span className="h-10 w-auto m-2 px-6 py-4 flex justify-start items-center bg-white text-lg font-semibold shadow-md rounded-xl">SP. DEFENSE: 92</span>
                            <span className="h-10 w-auto m-2 px-6 py-4 flex justify-start items-center bg-white text-lg font-semibold shadow-md rounded-xl">SPEED: 58</span>
                            <span className="h-10 w-auto m-2 px-6 py-4 flex justify-start items-center bg-white text-lg font-semibold shadow-md rounded-xl">ATTACK: 77</span>
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