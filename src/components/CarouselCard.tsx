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
    <div className="flex justify-center items-center">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-black border border-gray-800 shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,0,0,0.7)] transition-shadow duration-500 rounded-md">
                  <CardContent className="flex aspect-square items-center justify-center p-4">
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
