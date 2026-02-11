import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

function IDBarNumber({ num, indexNum }){
    const { query, setQuery, queryBool, setQueryBool } = useContext(MyContext);

    function handleOnClick(){
        setQuery(num);
        setQueryBool(!queryBool);
    }

    return(
        <>
            <div onClick={handleOnClick} className={`h-full w-20 flex justify-center items-center text-shadow-sm ${(indexNum === 4) ? "font-medium underline" : ""} hover:text-gray-200 active:text-white cursor-pointer`}>{(Number.isNaN(num) || num < 1 || num > 1025) ? "-" : num}</div>
        </>
    )
}

export default IDBarNumber;