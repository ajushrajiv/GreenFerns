import React, { useState } from 'react';
import {Button} from "@nextui-org/react";

function IncDec(){
    const [ data, setData ] = useState(0);

    const increment = () =>{
        setData(data + 1);
    }

    const decrement = () =>{
        setData(data - 1);
    }

    return(
        <div>
            <Button className="bg-black p-1 text-white text-center ">
                <button onClick={decrement}>-</button>
                    {data}
                <button onClick={increment}>+</button>
            </Button> 
        </div>
    )
}

export default IncDec;