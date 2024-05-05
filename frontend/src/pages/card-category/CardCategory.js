import React from "react";
import {Card, CardBody} from "@nextui-org/react";

export default function CardCategory({ currentCategory }) {
  return (
    <div className="flex justify-center">
        <div className="w-full max-w-96">    
          <Card>
            <CardBody className=" p-6 text-center text-lime-700 font-medium text-xl mr-32 ">
                <p>{ currentCategory }</p>
            </CardBody>
          </Card>
        </div>
    </div>
  );
}
