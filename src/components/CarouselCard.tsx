import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const CarouselCard = () => {
    const images = ["/wendel1.jpg", "/wendel2.jpg", "/wendel3.jpg"];
    return (
        <div className="flex  justify-center items-center  ">
            <Carousel className="w-full max-w-xs ">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <Image
                                            className="object-cover rounded-md"
                                            src={image}
                                            alt="my photo"
                                            width={500}
                                            height={500}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CarouselCard;
