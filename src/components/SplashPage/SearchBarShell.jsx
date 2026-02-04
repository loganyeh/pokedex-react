
function SearchBarShell({ text }){

    return(
        <>
            <div className="h-3/5 w-1/4 flex justify-between items-center text-black">
                    <input type="text" className="h-full w-9/12 pl-4 flex justify-center items-center bg-gray-100 text-xl shadow-md rounded-xl" placeholder={text} />
                    <div className="h-full w-2/12 flex justify-center items-center bg-gray-100 text-xl font-medium shadow-md rounded-xl hover:bg-gray-200 active:bg-white cursor-pointer">Go!</div>
            </div>
        </>
    )
}

export default SearchBarShell;