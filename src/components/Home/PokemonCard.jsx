import { SplashPageColor } from "../../utils/SplashPageColor";

function PokemonCard({ data }){

    return(
        <>
            <div className={`border-2 border-black ${SplashPageColor(data?.type_one)} h-70 w-60 my-6 rounded-xl shadow-md`}>
                <div className={`border border-black h-4/5 w-full flex justify-center items-center ${SplashPageColor(data?.type_one)} rounded-t-xl`}>
                    <img src={data?.sprite} alt={data?.name} className="h-55 w-55" />
                </div>
                <div className="border border-black h-1/5 w-full flex">
                    <div className="border-2 border-red-600 h-full w-1/5 flex justify-center items-center">#{data?.id}</div>
                    <div className="border-2 border-red-600 h-full w-3/5 flex justify-center items-center">{data?.name}</div>
                    <div className="border-2 border-red-600 h-full w-1/5 flex justify-center items-center">
                        <i className='bx bxs-bookmark-star' ></i>
                    </div>
                </div>
            </div>
        
        </>
    )
    
}

export default PokemonCard;