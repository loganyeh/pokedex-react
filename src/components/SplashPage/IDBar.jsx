import IDBarNumber from "./IDBarNumber";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

function IDBar({ data }){
    const { numBarID, setNumBarID, isNumBar, setIsNumBar } = useContext(MyContext);
    const numberLineArr = [
        (data?.id - 4), (data?.id - 3), (data?.id - 2), (data?.id - 1), 
        data?.id, 
        (data?.id + 1), (data?.id + 2), (data?.id + 3), (data?.id + 4)
    ]

    function handleIncrement(){
        setNumBarID(prev => prev + 1);
        setIsNumBar(!isNumBar);
    }

    function handleDecrement(){
        setNumBarID(prev => prev - 1);
        setIsNumBar(!isNumBar);
    }


    return(
        <>
            <div className="h-1/12 w-full flex justify-center items-start pt-2 text-2xl">
                <span onClick={handleDecrement} className="mx-5 text-shadow-lg hover:text-gray-200 active:text-white cursor-pointer">&lt;</span>
                {numberLineArr.map((number, index) => {
                    return <IDBarNumber key={index} indexNum={index} num={number} />
                })}
                <span onClick={handleIncrement} className="mx-5 text-shadow-lg hover:text-gray-200 active:text-white cursor-pointer">&gt;</span>
            </div>
        </>
    )
}

export default IDBar;