import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Arduino } from "@/types";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ArduinoCard = ({ card }: { card: Arduino }) => {
  const router = useRouter();

  return (
    <Card className="shadow-lg transition-transform  transform hover:scale-105 bg-card text-card-foreground border border-border">
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold">{card.name}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {"Location A"} | {"Good"} Health
        </p>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <div className="flex flex-wrap justify-between text-sm">
          <p>
            <span className="font-medium">Humidity:</span> {"45%"}
          </p>
          <p>
            <span className="font-medium">Battery:</span> {card.battery}
          </p>
        </div>
        <div className="flex flex-wrap justify-between text-sm">
          <p>
            <span className="font-medium">VOC:</span> {card.latestVoc}
          </p>
          <p>
            <span className="font-medium">Location:</span> {"40"}, {"50"}
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-end">
        <Button
          onClick={() => router.push(`/arduino/${card.deviceId}`)}
          variant="secondary"
          className="px-4 py-2 text-sm"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArduinoCard;
