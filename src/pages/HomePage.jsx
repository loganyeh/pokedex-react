import { Link } from "react-router-dom";

function HomePage(){

    return(
        <>
            <div className="border-2 border-red-600 h-screen w-screen bg-blue-300 text-white">
                <div >HOME PAGE</div>
                <Link to={"/"}>
                    <div className="cursor-pointer">INFO PAGE</div>
                </Link>
            </div>
        </>
    )
}

export default HomePage;