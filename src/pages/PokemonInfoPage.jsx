
function PokemonInfoPage(){

    return(
        <>
            <div className="h-screen w-screen">

                {/* POKEMON NUMBERS */}
                <div className="border-2 border-red-600 h-1/12 w-full flex justify-center items-start text-2xl">
                    <span className="mx-5">&lt;</span>
                    <span className="mx-5">690</span>
                    <span className="mx-5">691</span>
                    <span className="mx-5">692</span>
                    <span className="mx-5">693</span>
                    <span className="mx-5">694</span>
                    <span className="mx-5">695</span>
                    <span className="mx-5">696</span>
                    <span className="mx-5">697</span>
                    <span className="mx-5">698</span>
                    <span className="mx-5">699</span>
                    <span className="mx-5">&gt;</span>
                </div>

                {/* POKEMON NAME AND ID NUMBER */}
                <div className="border-2 border-blue-600 h-2/12 w-full pl-8 flex flex-col ">
                    <span className="border border-black h-full w-full text-3xl flex justify-start items-end">#699</span>
                    <span className="border border-black h-full w-full pt-2 text-5xl">Aurorus</span>
                </div>

                {/* POKEMON PICTURE AND INFO */}
                <div className="border-2 border-red-600 h-8/12 w-full flex">

                    {/* LEFT SPLASH PAGE */}
                    <div className="border-2 border-green-600 h-full w-2/3 flex">

                        {/* Region TITLE */}
                        <div className="border-2 border-red-600 h-full w-1/12">
                            <div className="h-1/2 w-full flex justify-center items-center text-2xl whitespace-nowrap rotate-270">
                                <span className="mr-2 text-2xl font-normal">Region: </span><span className="text-xl font-light" >Kanto</span>
                            </div>
                        </div>
                        
                        {/* NAME TITLE */}
                        <div className="border-2 border-red-600 h-full w-11/12">
                            <div className="border border-black h-1/3 w-full text-9xl opacity-70">アマルルガ</div>
                            <div className="border border-black h-1/3 w-full pl-3 text-2xl font-normal">
                                Height: <span className="text-xl font-light">8.03m</span><br />
                                Weight: <span className="text-xl font-light">90.22kg</span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SPLASH PAGE */}
                    <div className="border-2 border-green-600 h-full w-1/3">

                        {/* Pokemon Type */}
                        <div className="border-2 border-red-600 h-2/12 w-6/12 flex justify-around items-center">
                            <div className="border border-black h-28 w-28 flex justify-center items-center rounded-full">ROCK IMAGE</div>
                            <div className="border border-black h-28 w-28 flex justify-center items-center rounded-full">SNOW IMAGE</div>
                        </div>
                        {/* Base Stats TITLE */}
                        <div className="border-2 border-red-600 h-2/12 w-full flex justify-start items-center text-6xl">Base stats:</div>
                        {/* Pokemon INFO/STATS */}
                        <div className="border-2 border-red-600 h-auto max-h-80 w-7/12 mt-6 pl-8 flex flex-wrap">
                            <span className="border border-black h-10 w-auto m-2 px-6 py-4 flex justify-start items-center text-lg font-semibold shadow-md rounded-xl">HP: 123</span>
                            <span className="border border-black h-10 w-auto m-2 px-6 py-4 flex justify-start items-center text-lg font-semibold shadow-md rounded-xl">DEFENSE: 72</span>
                            <span className="border border-black h-10 w-auto m-2 px-6 py-4 flex justify-start items-center text-lg font-semibold shadow-md rounded-xl">SP. ATTACK: 99</span>
                            <span className="border border-black h-10 w-auto m-2 px-6 py-4 flex justify-start items-center text-lg font-semibold shadow-md rounded-xl">SP. DEFENSE: 92</span>
                            <span className="border border-black h-10 w-auto m-2 px-6 py-4 flex justify-start items-center text-lg font-semibold shadow-md rounded-xl">SPEED: 58</span>
                            <span className="border border-black h-10 w-auto m-2 px-6 py-4 flex justify-start items-center text-lg font-semibold shadow-md rounded-xl">ATTACK: 77</span>
                        </div>
                    </div>


                </div>

                {/* SEARCH BAR */}
                <div className="border-2 border-red-600 h-1/12 w-full flex justify-around items-start">

                    {/* search name */}
                    <div className="border-2 border-black h-3/4 w-1/4 flex justify-between items-center">
                        <input type="text" className="border-2 border-black h-full w-9/12 pl-4 flex justify-center items-center text-xl rounded-xl" placeholder="Search name"/>
                        <div className="border-2 border-black h-full w-2/12 flex justify-center items-center text-xl rounded-xl">Go!</div>
                    </div>

                    {/* search number */}
                    <div className="border-2 border-black h-3/4 w-1/4 flex justify-between items-center">
                        <input type="text" className="border-2 border-black h-full w-9/12 pl-4 flex justify-center items-center text-xl rounded-xl" placeholder="Search number"/>
                        <div className="border-2 border-black h-full w-2/12 flex justify-center items-center text-xl rounded-xl">Go!</div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default PokemonInfoPage;