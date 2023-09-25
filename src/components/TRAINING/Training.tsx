import { Card, CardHeader, CardBody, CardFooter, Image, Divider } from "@nextui-org/react";
import { Button } from "@/components/ui/button"
import Container from "@/components/ui/conatainer";
import { Separator } from "../ui/separator";
const Training = () => {
  return (
    <Container>
      <Divider />

      <div className="space-y-4 pb-10">
        <h3 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          TRAINING <span className="text-red-600">Program</span>
        </h3>

        <hr className='border-red-600 w-20 mx-auto' />

      </div>

      <div className="gap-3 grid grid-cols-12 grid-rows-2 px-8">
        <Card className="col-span-12 sm:col-span-4 h-[400px] rounded-sm">

          <Image
            removeWrapper
            isZoomed
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://media.istockphoto.com/id/1421306068/photo/woman-measuring-waist-with-tape-on-grey-background-closeup.webp?b=1&s=170667a&w=0&k=20&c=_08qgVw4iERahUH0a9xfD2ohqP2xqMhDdKvvYLDIkZk="
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-tiny text-black uppercase font-bold">WEIGHT LOSS & </p>
              <p className="text-tiny text-black uppercase font-bold">WEIGHT GAIN PROGRAM</p>

            </div>
            <Button className="text-bold" color="primary" radius="full" size="lg">
              Join Us
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[400px] rounded-sm">

          <Image
          isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://images.healthshots.com/healthshots/en/uploads/2023/02/16231442/strength-training-1600x900.jpg"

          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-tiny text-black uppercase font-bold">STRENGTH TRAINING &   </p>
              <p className="text-tiny text-black uppercase font-bold">WEIGHT TRAINING</p>

            </div>
            <Button className="text-bold" color="primary" radius="full" size="lg">
              Join Us
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[400px] rounded-sm">
         
          <Image
          isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZ1bmN0aW9uYWwlMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-tiny text-black uppercase font-bold">FUNCTIONAL TRAINING </p>
              <p className="text-tiny text-black uppercase font-bold">FREE WEIGHT </p>

            </div>
            <Button className="text-bold" color="primary" radius="full" size="lg">
              Join Us
            </Button>
          </CardFooter>
        </Card>
      </div>

    </Container>
  )
}

export default Training