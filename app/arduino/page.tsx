import React from "react";
import dummyData from "@/dummyData/dummyArduinoData";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

interface Card {
  name: string;
  location: string;
  lon: string;
  lat: string;
  humidity: string;
  health: string;
  battery: string;
  voc: string;
}

const Arduino = () => {
  return (
    <div className="grid gap-6 p-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3">
      {dummyData.map((card: Card, index: number) => (
        <Card
          key={index}
          className="shadow-lg transition-transform  transform hover:scale-105 bg-card text-card-foreground border border-border"
        >
          <CardHeader className="p-4">
            <CardTitle className="text-lg font-semibold">
              {card.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {card.location} | {card.health} Health
            </p>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            <div className="flex flex-wrap justify-between text-sm">
              <p>
                <span className="font-medium">Humidity:</span> {card.humidity}
              </p>
              <p>
                <span className="font-medium">Battery:</span> {card.battery}
              </p>
            </div>
            <div className="flex flex-wrap justify-between text-sm">
              <p>
                <span className="font-medium">VOC:</span> {card.voc}
              </p>
              <p>
                <span className="font-medium">Location:</span> {card.lat}, {card.lon}
              </p>
            </div>
          </CardContent>
          <CardFooter className="p-4 flex justify-end">
            <Button  variant="secondary" className="px-4 py-2 text-sm">
              View Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Arduino;