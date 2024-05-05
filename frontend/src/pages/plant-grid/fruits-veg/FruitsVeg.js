import PlantItem from "../../plant-item";
import background from "../background.jpg"

function FruitsVeg(){
    return(
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">            
                <PlantItem 
                    background={background} 
                    plantName="cucumber" 
                    plantDescription="Cucurbitaceae"  
                    price="3€"/>
                <PlantItem 
                    background={background} 
                    plantName="peppers" 
                    plantDescription="Solanaceae"  
                    price="5€"/>
                <PlantItem 
                    background={background} 
                    plantName="melons" 
                    plantDescription=" Cucurbitaceae"  
                    price="7€"/>
                <PlantItem 
                    background={background} 
                    plantName="strawberry" 
                    plantDescription="Rosaceae"  
                    price="6€"/>
                <PlantItem 
                    background={background} 
                    plantName="beans" 
                    plantDescription="Fabaceae"  
                    price="4€"/>
                <PlantItem 
                    background={background} 
                    plantName="corn" 
                    plantDescription="Poaceae"  
                    price="9€"/>
                <PlantItem 
                    background={background} 
                    plantName="cabbage" 
                    plantDescription="Brassicaceae "  
                    price="6€"/>
                <PlantItem 
                    background={background} 
                    plantName="spinach" 
                    plantDescription="Amaranthaceae"
                    price="3€"/>
            </div>
        </div>
    )
}

export default FruitsVeg;