import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

function IDBarNumber({ num, indexNum }){
    const { query, setQuery, queryBool, setQueryBool, number, setNumber } = useContext(MyContext);

    function handleOnClick(){
        console.log(`clicked ${num}`);
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