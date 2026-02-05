import SearchBarShell from "./SearchBarShell";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

function SearchBar({ note }){
    const { name, setName, number, setNumber } = useContext(MyContext);

    function clearInput(){
        setName("");
        setNumber("");
    };

    return(
        <>
            <div className="h-1/12 w-full relative flex justify-around items-start">
                {/* search name */}
                <div className="h-3/5 w-1/4 relative flex justify-between items-center text-black z-10">
                    <input onChange={(e) => {setName(e.target.value)}} value={name} type="text" className="h-full w-9/12 pl-4 flex justify-center items-center bg-gray-100 text-xl shadow-md rounded-xl" placeholder="Search name" />
                    <div onClick={() => {clearInput()}} className="h-full w-2/12 flex justify-center items-center bg-gray-100 text-xl font-medium shadow-md rounded-xl hover:bg-gray-200 active:bg-white cursor-pointer">Go!</div>
                </div>

                {/* search number */}
                <div className="h-3/5 w-1/4 relative flex justify-between items-center text-black z-10">
                    <input onChange={(e) => {setNumber(e.target.value)}} value={number} type="text" className="h-full w-9/12 pl-4 flex justify-center items-center bg-gray-100 text-xl shadow-md rounded-xl" placeholder="Search name" />
                    <div onClick={() => {clearInput()}} className="h-full w-2/12 flex justify-center items-center bg-gray-100 text-xl font-medium shadow-md rounded-xl hover:bg-gray-200 active:bg-white cursor-pointer">Go!</div>
                </div>

            </div>
        </>
    )
}

export default SearchBar;