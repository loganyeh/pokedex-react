
function RegionName({ data }){

    return(
        <>
            <div className="h-full w-1/12">
                <div className="h-1/2 w-full flex justify-center items-center text-2xl whitespace-nowrap rotate-270">
                    <span className="mr-2 text-2xl font-normal text-shadow-sm">Region: </span><span className="text-xl font-light text-shadow-sm">{data?.region}</span>
                </div>
            </div>
        </>
    )
}

export default RegionName;