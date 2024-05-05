import PlantItem from "../../plant-item";
import background from "../background.jpg"

function IndoorPlants(){
    return(
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">            
                <PlantItem 
                    background={background} 
                    plantName="spiderplant" 
                    plantDescription="Chlorophytum comosum"  
                    price="12€"/>
                <PlantItem 
                    background={background} 
                    plantName="snakeplant" 
                    plantDescription="Sansevieria trifasciata"  
                    price="22€"/>
                <PlantItem 
                    background={background}
                    plantName="pothos" 
                    plantDescription= "Epipremnum aureum" 
                    price="17€"/>
                <PlantItem 
                    background={background} 
                    plantName="zz" 
                    plantDescription="Zamioculcas zamiifolia"  
                    price="28€"/>
                <PlantItem 
                    background={background}
                    plantName="peacelily" 
                    plantDescription="Spathiphyllum"  
                    price="16€"/>
                <PlantItem 
                    background={background} 
                    plantName="rubber plant" 
                    plantDescription="Ficus elastica"  
                    price="28€"/>
                <PlantItem 
                    background={background} 
                    plantName="monstera" 
                    plantDescription="Ficus elastica"  
                    price="42€"/>
                <PlantItem 
                    background={background} 
                    plantName="calathea" 
                    plantDescription="Marantaceae"  
                    price="20€"/>
            </div>
        </div>
    )
}

export default IndoorPlants;