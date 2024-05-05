import background from "../plant-grid/background.jpg"
import {Button, Divider} from "@nextui-org/react";
import IncDec from "./inc-dec";
import PaymentCart from "./payment-cart";

function ShoppingCart(){
    return(
        <div>
            <div className="float-right	px-[80px]">
                <PaymentCart />
            </div>
            <div className="flex justify-center items-center mt-8 ml-32 ">
                <div  className=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={background} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Product name</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">In Stock</p>
                        <div className="flex flex-col lg:flex-row lg:justify-around items-center lg:pt-32 pt-8">
                            <IncDec />
                            <Button className="bg-white text-black text-center border-black lg:mt-0 mt-4 lg:mr-0 mr-4">
                                <span>Delete</span>
                            </Button> 
                            <div className="lg:pl-32 md:pl-16 pl-8 lg:mt-0 mt-4">
                                <h6>Price</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider className="m-2"/>
        </div>
)}

export default ShoppingCart;