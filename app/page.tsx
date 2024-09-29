import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HomePage = () => {
  return (
    <>
      <div className=" w-[100%] h-[100vh] flex justify-center items-center font-openSans  ">
        <Card className=" w-[30rem] ">
          <CardHeader>
            <CardTitle>Plant Gpt</CardTitle>
            <CardDescription>jab Banega to batayenge acche se</CardDescription>
          </CardHeader>
          <CardContent className="  opacity-[.8] font-[300] text-[.9rem]  ">
            Plant Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Placeat laborum nobis ipsam ducimus quos pariatur expedita vero!
            Impedit illo illum, modi dolores facilis, explicabo corrupti iste
            aperiam totam rerum possimus eveniet, expedita at aliquam.
          </CardContent>
          <CardFooter>
            <Button className="w-full  ">kal Review bhi hai</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default HomePage;
