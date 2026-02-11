import SearchBarShell from "./SearchBarShell";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

function SearchBar({ data }){
    const { query, setQuery, queryBool, setQueryBool, name, setName, number, setNumber } = useContext(MyContext);

    function clearInput(){
        setTimeout(() => {
            setName("");
            setNumber("");
        }, 100)
    };

    //---------- NAME ----------
    function handleOnChangeName(e){
        setName(e.target.value);
    }
    
    function handleKeyDownName(e){
        if(e.key === "Enter"){
            setQuery(name);
            setQueryBool(!queryBool);
            clearInput();
        }
    }
    
    function handleOnClickName(){
        setQuery(name);
        setQueryBool(!queryBool);
        clearInput();
    }

    //---------- NUMBER ----------
    function handleOnChangeNumber(e){
        setNumber(e.target.value);
    }
    
    function handleKeyDownNumber(e){
        if(e.key === "Enter"){
            if(number < 0){
                console.log(`${number} is not a Pokemon`);
                
                return `${number} is not a Pokemon`;
            }
            setQuery(number);
            setQueryBool(!queryBool);
            clearInput();
        }
    }
    
    function handleOnClickNumber(){
        setQuery(number);
        setQueryBool(!queryBool);
        clearInput();
    }

    return(
        <>
            <div className="h-1/12 w-full relative flex justify-around items-start">
                {/* search name */}
                <div className="h-3/5 w-1/4 relative flex justify-between items-center text-black z-10">
                    <input onChange={handleOnChangeName} onKeyDown={handleKeyDownName} value={name} type="text" className="h-full w-9/12 pl-4 flex justify-center items-center bg-gray-100 text-xl shadow-md rounded-xl" placeholder="Search name" />
                    <div onClick={handleOnClickName} className="h-full w-2/12 flex justify-center items-center bg-gray-100 text-xl font-medium shadow-md rounded-xl hover:bg-gray-200 active:bg-white cursor-pointer">Go!</div>
                </div>

                {/* search number */}
                <div className="h-3/5 w-1/4 relative flex justify-between items-center text-black z-10">
                    <input onChange={handleOnChangeNumber} onKeyDown={handleKeyDownNumber} value={number} type="text" className="h-full w-9/12 pl-4 flex justify-center items-center bg-gray-100 text-xl shadow-md rounded-xl" placeholder="Search number" />
                    <div onClick={handleOnClickNumber} className="h-full w-2/12 flex justify-center items-center bg-gray-100 text-xl font-medium shadow-md rounded-xl hover:bg-gray-200 active:bg-white cursor-pointer">Go!</div>
                </div>

            </div>
        </>
    )
}

export default SearchBar;