import { useParams } from 'react-router-dom';
import IndoorPlants from "./indoor-plants";
import BeeFriendly from "./bee-friendly";
import FruitsVeg from "./fruits-veg";
import BalconyPlants from "./balcony-plants";

function PlantGrid(){
    const { category } = useParams();
    return(
        <div >
            {category === "indoorplants" && <IndoorPlants />}
            {category === "beefriendly" && <BeeFriendly />}
            {category === "fruitsvegetables" && <FruitsVeg />}
            {category === "balconyplants" && <BalconyPlants />}
        </div>
    )
}

export default PlantGrid;