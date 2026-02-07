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
            <div className="border border-black h-1/12 w-full flex justify-center items-start pt-2 text-2xl">
                <div className="border-2 border-red-600 h-10 w-auto flex justify-center items-center">
                    <div onClick={handleDecrement} className="border-2 border-black h-full w-20 flex justify-center items-center text-shadow-lg hover:text-gray-200 active:text-white cursor-pointer">&lt;</div>
                    {numberLineArr.map((number, index) => {
                        return <IDBarNumber key={index} indexNum={index} num={number} />
                    })}
                    <div onClick={handleIncrement} className="border-2 border-black h-full w-20 flex justify-center items-center text-shadow-lg hover:text-gray-200 active:text-white cursor-pointer">&gt;</div>
                </div>
            </div>
        </>
    )
}

export default IDBar;