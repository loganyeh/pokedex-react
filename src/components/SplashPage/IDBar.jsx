import IDBarNumber from "./IDBarNumber";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { Link } from "react-router-dom";

function IDBar({ data }){
    const { name, setName, numBarID, setNumBarID, isNumBar, setIsNumBar } = useContext(MyContext);
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
            <div className="border border-black h-1/12 w-full flex justify-between items-start pt-4 text-2xl">
                <div className="border border-black h-full w-1/5 flex justify-center items-center">
                    <Link to={"/home"}>
                        <i className='bx bx-home-alt-2 text-5xl rounded-full hover:text-gray-300 active:text-gray-100 cursor-pointer'></i>
                    </Link>
                </div>
                
                <div className="border border-black h-10 w-auto flex justify-center items-center">
                    <div onClick={handleDecrement} className="h-full w-20 flex justify-center items-center text-shadow-lg hover:text-gray-200 active:text-white cursor-pointer">&lt;</div>
                    {numberLineArr.map((number, index) => {
                        return <IDBarNumber key={index} indexNum={index} num={number} />
                    })}
                    <div onClick={handleIncrement} className="h-full w-20 flex justify-center items-center text-shadow-lg hover:text-gray-200 active:text-white cursor-pointer">&gt;</div>
                </div>

                <div className="border border-black h-full w-1/5">
                    {/* back filler to fill the space at end */}
                </div>
            </div>
        </>
    )
}

export default IDBar;