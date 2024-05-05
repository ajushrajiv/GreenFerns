import PlantItem from "../../plant-item";
import background from "../background.jpg"

function BalconyPlants(){
    return(
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                <PlantItem 
                    background={background} 
                    plantName="petunia" 
                    plantDescription="Petunia spp."  
                    price="3.99€"/>
                <PlantItem 
                    background={background} 
                    plantName="geranium" 
                    plantDescription="Pelargonium spp."  
                    price="2.99€"/>
                <PlantItem 
                    background={background} 
                    plantName="ferns" 
                    plantDescription="Various species"  
                    price="6€"/>
                <PlantItem 
                    background={background} 
                    plantName="herbs" 
                    plantDescription="herbs"  
                    price="2€"/>
                <PlantItem 
                    background={background} 
                    plantName="dwarfcitrus" 
                    plantDescription="Citrus spp."  
                    price="32€"/>
                <PlantItem 
                    background={background} 
                    plantName="tomatoes" 
                    plantDescription="Solanum lycopersicum"  
                    price="4€"/>
                <PlantItem 
                    background={background} 
                    plantName="coleus" 
                    plantDescription="Solenostemon scutellarioides"  
                    price="4.99€"/>
                <PlantItem 
                    background={background} 
                    plantName="begonias" 
                    plantDescription="Begonia spp."  
                    price="6.99€"/>
            </div>
        </div>
    )
}

export default BalconyPlants;