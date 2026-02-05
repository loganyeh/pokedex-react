
function PokemonStats({ data }){
    const statTitleArr = [
        {
            title: "HP:",
            value: data?.hp,
        },
        {
            title: "DEFENSE:",
            value: data?.defense,
        },
        {
            title: "SP. ATTACK:",
            value: data?.special_attack,
        },
        {
            title: "SP. DEFENSE:",
            value: data?.special_defense,
        },
        {
            title: "SPEED:",
            value: data?.speed,
        },
        {
            title: "ATTACK:",
            value: data?.attack,
        },
    ];

    return(
        <>
            <div className="border-l-4 border-gray-200 h-auto max-h-80 w-7/12 mt-6 pl-8 flex flex-wrap text-black">
                {statTitleArr.map((span, index) => {
                    return <span key={index} className="h-10 w-auto m-2 px-6 py-4 flex justify-start items-center bg-white text-lg font-semibold shadow-md rounded-xl">{span.title}{span.value}</span>
                })}
            </div>
        </>
    )
}

export default PokemonStats;