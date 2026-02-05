import { useState, useContext } from "react";
import { MyContext } from "../../context/MyContext";

function SearchBarShell({ text }){
    const { name, setName, number, setNumber } = useContext(MyContext);
    const [query, setQuery] = useState();

    return(
        <>
            <div className="h-3/5 w-1/4 relative flex justify-between items-center text-black z-10">
                    <input onChange={(e) => {setQuery(e.target.value)}} type="text" className="h-full w-9/12 pl-4 flex justify-center items-center bg-gray-100 text-xl shadow-md rounded-xl" placeholder={text} />
                    <div onClick={() => console.log("Searching for... " + query)} className="h-full w-2/12 flex justify-center items-center bg-gray-100 text-xl font-medium shadow-md rounded-xl hover:bg-gray-200 active:bg-white cursor-pointer">Go!</div>
            </div>
        </>
    )
}

export default SearchBarShell;