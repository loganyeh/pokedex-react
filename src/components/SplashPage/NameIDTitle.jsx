
function NameIDTitle({ data }){

    return(
        <>
            <div className="h-2/12 w-full pl-8 flex flex-col ">
                <span className="h-full w-full text-3xl flex justify-start items-end text-shadow-sm">#{data?.id}</span>
                <span className="h-full w-full pt-2 text-5xl text-shadow-sm">{data?.name}</span>
            </div>
        </>
    )
}

export default NameIDTitle;