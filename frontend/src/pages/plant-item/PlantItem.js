import React from "react";
import {Button} from "@nextui-org/react";

export default function PlantItem({ background, plantName, plantDescription, price}) {
  return (
    <div className="lg:w-80 md:w-70 sm:w-40 h-auto">
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg w-80 h-60" src={background} alt="" />
            <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{plantName}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{plantDescription}</p>  
            </div>
            <div className="pl-6 pr-6 pb-5 flex justify-between items-center">
                <p className="mb-3 font-bold pt-1 text-gray-700 dark:text-gray-400">{price}</p>  
                <Button className="bg-black p-2 text-white text-center ">
                    <span>Add to Cart </span>
                </Button>  
            </div>
        </div>
    </div>
  );
}