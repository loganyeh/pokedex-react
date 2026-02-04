
function IDBar({ data }){

    return(
        <>
            <div className="h-1/12 w-full flex justify-center items-start pt-2 text-2xl">
                <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">&lt;</span>
                <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">{(data?.id - 4).toString()}</span>
                <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">{(data?.id - 3).toString()}</span>
                <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">{(data?.id - 2).toString()}</span>
                <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">{(data?.id - 1).toString()}</span>
                <span className="mx-5 text-shadow-lg font-medium underline hover:text-gray-200 active:text-white cursor-pointer">{data?.id}</span>
                <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">{(data?.id + 1).toString()}</span>
                <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">{(data?.id + 2).toString()}</span>
                <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">{(data?.id + 3).toString()}</span>
                <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">{(data?.id + 4).toString()}</span>
                {/* <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">{data?.id + 10}</span> */}
                <span className="mx-5 text-shadow-sm hover:text-gray-200 active:text-white cursor-pointer">&gt;</span>
            </div>
        </>
    )
}

export default IDBar;