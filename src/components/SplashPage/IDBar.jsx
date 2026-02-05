import IDBarNumber from "./IDBarNumber";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

function IDBar({ data }){
    const { numBarID, setNumBarID } = useContext(MyContext);
    const numberLineArr = [
        (data?.id - 4).toString(), (data?.id - 3).toString(), (data?.id - 2).toString(), (data?.id - 1).toString(), 
        data?.id, 
        (data?.id + 1).toString(), (data?.id + 2).toString(), (data?.id + 3).toString(), (data?.id + 4).toString()
    ]

    return(
        <>
            <div className="h-1/12 w-full flex justify-center items-start pt-2 text-2xl">
                <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">&lt;</span>
                {numberLineArr.map((number, index) => {
                    return <IDBarNumber key={index} indexNum={index} num={number} />
                })}
                <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">&gt;</span>
            </div>
        </>
    )
}

export default IDBar;