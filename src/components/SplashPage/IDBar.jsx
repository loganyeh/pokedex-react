import IDBarNumber from "./IDBarNumber";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

function IDBar({ data }){
    const { name, setName, numBarID, setNumBarID, isNumBar, setIsNumBar } = useContext(MyContext);
    const numberLineArr = [
        (data?.id - 4), (data?.id - 3), (data?.id - 2), (data?.id - 1), 
        data?.id, 
        (data?.id + 1), (data?.id + 2), (data?.id + 3), (data?.id + 4)
    ]

    function handleIncrement(){
        // setNumBarID(name);
        setNumBarID(prev => prev + 1);
        setIsNumBar(!isNumBar);
        console.log(numBarID);
        console.log(typeof numBarID);
    }
    
    function handleDecrement(){
        // setNumBarID(name);
        setNumBarID(prev => prev - 1);
        setIsNumBar(!isNumBar);
        console.log(numBarID);
        console.log(typeof numBarID);
    }


    return(
        <>
            <div className="h-1/12 w-full flex justify-center items-start pt-4 text-2xl">
                <div className="h-10 w-auto flex justify-center items-center">
                    <div onClick={handleDecrement} className="h-full w-20 flex justify-center items-center text-shadow-lg hover:text-gray-200 active:text-white cursor-pointer">&lt;</div>
                    {numberLineArr.map((number, index) => {
                        return <IDBarNumber key={index} indexNum={index} num={number} />
                    })}
                    <div onClick={handleIncrement} className="h-full w-20 flex justify-center items-center text-shadow-lg hover:text-gray-200 active:text-white cursor-pointer">&gt;</div>
                </div>
            </div>
        </>
    )
}

export default IDBar;