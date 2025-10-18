"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ImageKit from "./ImageKit";

const images = ["wendel2.jpg", "wendel3.jpg", "wendel1.jpg"];

export function CarouselCard() {
  return (
    <Carousel
      opts={{ align: "start" }}
      orientation="horizontal"
      className="w-full overflow-visible"
    >
      <CarouselContent className="flex gap-3 overflow-visible -mt-1">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="flex-none w-[70%] sm:w-[60%] md:w-[45%] overflow-visible"
          >
            <div className="p-1">
              <Card className="bg-black border border-gray-800 shadow-[0_0_20px_rgba(255,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,0,0,0.7)] transition-shadow duration-500 rounded-md">
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <ImageKit
                    className="object-cover rounded-md"
                    path={image}
                    alt={`Carousel image ${index + 1}`}
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
    </Carousel>
  );
}
