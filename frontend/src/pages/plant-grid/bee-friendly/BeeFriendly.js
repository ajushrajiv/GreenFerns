import PlantItem from "../../plant-item";
import background from "../background.jpg"

function BeeFriendly(){
    return(
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">            
                <PlantItem 
                    background={background}
                    plantName="lavender" 
                    plantDescription="Lavandula"  
                    price="4.99€"/>
                <PlantItem 
                    background={background} 
                    plantName="sunflower"
                    plantDescription="Helianthus annuus"  
                    price="5€"/>
                <PlantItem 
                    background={background} 
                    plantName="beebalm" 
                    plantDescription="Monarda"  
                    price="4.99€"/>
                <PlantItem 
                    background={background} 
                    plantName="salvia" 
                    plantDescription="Salvia spp."  
                    price="3.99€"/>
                <PlantItem 
                    background={background} 
                    plantName="coneflowers" 
                    plantDescription="Echinacea"  
                    price="6.99€"/>
                <PlantItem 
                    background={background} 
                    plantName="wildbergamot" 
                    plantDescription="Monarda fistulosa"  
                    price="4€"/>
                <PlantItem 
                    background={background} 
                    plantName="catmint" 
                    plantDescription="Nepeta"  
                    price="5€"/>
                <PlantItem 
                    background={background} 
                    plantName="cosmos" 
                    plantDescription="Cosmos spp."  
                    price="6.99€"/>
            </div>
        </div>
    )
}

export default BeeFriendly;