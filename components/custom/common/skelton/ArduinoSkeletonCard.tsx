import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ArduinoSkeletonCard = () => {
  return (
    <Card className="shadow-lg transition-transform transform hover:scale-105 bg-card text-card-foreground border border-border">
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold">
          <Skeleton className="h-5 w-3/4" />
        </CardTitle>
        <div className="text-sm text-muted-foreground">
          <Skeleton className="h-4 w-1/2" />
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <div className="flex flex-wrap justify-between text-sm">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-1/4" />
        </div>
        <div className="flex flex-wrap justify-between text-sm">
          <Skeleton className="h-4 w-1/3" />

          <Skeleton className="h-4 w-1/4" />
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-end">
        <Skeleton className="h-8 w-24" />
      </CardFooter>
    </Card>
  );
};

export default ArduinoSkeletonCard;
