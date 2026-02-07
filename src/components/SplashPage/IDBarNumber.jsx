import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

function IDBarNumber({ num, indexNum }){
    const { number, setNumber, isNumBar, setIsNumBar, numBarID, setNumBarID } = useContext(MyContext);

    function handleOnClick(){
        setNumBarID(num);
        setIsNumBar(!isNumBar);
    }

    return(
        <>
            <span onClick={handleOnClick} className={`mx-5 text-shadow-sm ${(indexNum === 4) ? "font-medium underline" : ""} hover:text-gray-200 active:text-white cursor-pointer`}>{(num < 1 || num > 1025) ? "-" : num}</span>
        </>
    )
}

export default IDBarNumber;