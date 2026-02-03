
function PokemonInfoPage(){

    return(
        <>
            <div className="h-screen w-screen">

                {/* POKEMON NUMBERS */}
                <div className="border-2 border-red-600 h-1/12 w-full flex justify-center items-start text-3xl">
                   &lt; 690 691 692 693 694 695 696 697 698 699 &gt;
                </div>

                {/* POKEMON NAME AND ID NUMBER */}
                <div className="border-2 border-red-600 h-2/12 w-full text-5xl">
                    #699<br />
                    Aurorus
                </div>

                {/* POKEMON PICTURE AND INFO */}
                <div className="border-2 border-red-600 h-8/12 w-full flex">

                    {/* LEFT SPLASH PAGE */}
                    <div className="border-2 border-green-600 h-full w-2/3 flex">

                        {/* Region TITLE */}
                        <div className="border-2 border-red-600 h-full w-1/12">
                            <div className="h-1/2 w-full flex justify-center items-center text-3xl whitespace-nowrap rotate-270">Region: Kanto</div>
                        </div>
                        
                        {/* NAME TITLE */}
                        <div className="border-2 border-red-600 h-full w-11/12">
                            <div className="border border-black h-1/3 w-full text-9xl">アマルルガ</div>
                            <div className="border border-black h-1/3 w-full">
                                Height: 8.03m<br />
                                Weight: 90.22kg
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SPLASH PAGE */}
                    <div className="border-2 border-green-600 h-full w-1/3">

                        {/* Pokemon Type */}
                        <div className="border-2 border-red-600 h-2/12 w-full flex">
                            <div className="border border-black h-20 w-20 rounded-full">ROCK IMAGE</div>
                            <div className="border border-black h-20 w-20 rounded-full">SNOW IMAGE</div>
                        </div>
                        {/* Base Stats TITLE */}
                        <div className="border-2 border-red-600 h-2/12 w-full">Base stats:</div>
                        {/* Pokemon INFO/STATS */}
                        <div className="border-2 border-red-600 h-8/12 w-full">
                            <div className="border border-black h-15 w-60 rounded-xl">HP: 123</div>
                            <div className="border border-black h-15 w-60 rounded-xl">DEFENSE: 72</div>
                            <div className="border border-black h-15 w-60 rounded-xl">SP. ATTACK: 99</div>
                            <div className="border border-black h-15 w-60 rounded-xl">SP. DEFENSE: 92</div>
                            <div className="border border-black h-15 w-60 rounded-xl">SPEED: 58</div>
                            <div className="border border-black h-15 w-60 rounded-xl">ATTACK: 77</div>
                        </div>
                    </div>


                </div>

                {/* SEARCH BAR */}
                <div className="border-2 border-red-600 h-1/12 w-full flex justify-around items-start">

                    {/* search name */}
                    <div className="border-2 border-black h-3/4 w-1/3 flex justify-center items-center">
                        <input type="text" className="border-2 border-black h-full w-3/4" placeholder="Search name"/>
                        <div className="border-2 border-black h-full w-1/4">Go!</div>
                    </div>

                    {/* search number */}
                    <div className="border-2 border-black h-3/4 w-1/3 flex justify-center items-center">
                        <input type="text" className="border-2 border-black h-full w-3/4" placeholder="Search number"/>
                        <div className="border-2 border-black h-full w-1/4">Go!</div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default PokemonInfoPage;