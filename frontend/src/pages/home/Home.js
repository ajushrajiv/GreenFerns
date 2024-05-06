import background from "../plant-grid/background.jpg"

function Home(){
    return(
        <div className="flex flex-row h-lvh w-full">      
            <div className="bg-indigo-500">
                <h1>Left </h1>
            </div>
            <div className="bg-red-300">
                <h1> Right </h1>
            </div>
        </div>
    )
}

export default Home;