"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ImageKit from "./ImageKit";

const CarouselCard = () => {
    const images = ["wendel1.jpg", "wendel2.jpg", "wendel3.jpg"];
    return (
        <div className="flex  justify-center items-center  ">
            <Carousel className="w-full max-w-xs ">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <ImageKit
                                            className="object-cover rounded-md"
                                            path={image}
                                            alt="my photo"
                                            width={500}
                                            height={500}
                                            priority
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
