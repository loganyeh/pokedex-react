import SearchBarShell from "./SearchBarShell";

function SearchBar(){

    return(
        <>
            <div className="h-1/12 w-full flex justify-around items-start">
                {/* search name */}
                <SearchBarShell text={"Search name"} />

                {/* search number */}
                <SearchBarShell text={"Search number"} />
            </div>
        </>
    )
}

export default SearchBar;