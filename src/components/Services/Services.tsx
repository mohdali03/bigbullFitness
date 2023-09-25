import Container from "@/components/ui/conatainer";
import { Card, CardHeader,  Image,  } from "@nextui-org/react";


const Services = () => {
    return (
        <Container>

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 space-y-10 pb-10   ">

                <div className="space-y-4">
                    <h3 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Services
                    </h3>

                    <hr className='border-red-600 w-20 mx-auto' />

                </div>
                <div className="gap-3 grid grid-cols-12 grid-rows-2 px-8">
                    <Card className="col-span-12 sm:col-span-4 h-[350px] rounded-sm">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            <p className="text-tiny text-gray-500 uppercase font-bold">FITNESS TEST-MONTHLY & FITNESS COUNSELLING</p>
                            
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://img.livestrong.com/-/clsd/getty/90db5f87b71c490784d56f563ff1621d"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[350px] rounded-sm">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            
                            <h4 className="text-white font-medium text-large">ZONE-WISE CERTIFIED TRAINERS</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://blog.nasm.org/hubfs/how-much-does-personal-trainer-cost.jpg"
                        />
                    </Card>
                    
                    <Card className="col-span-12 sm:col-span-4 h-[350px] rounded-sm">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            
                            <h4 className="text-white font-medium text-large">CARDIO</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/p/AF1QipMHPqzEDyEc5xMowLP54y9KYrFHTVWIjmGCPBHy=s1360-w1360-h1020"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[350px] rounded-sm">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            
                            <h4 className="text-white font-medium text-large">STEAM</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://pursuitfitness.org/wp-content/uploads/2021/05/hot-tub-sauna-modern-gym-near-me-monroe-mobile.jpg"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[350px] rounded-sm">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            
                            <h4 className="text-gray-600 font-medium text-large">LOCKER</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://sdg-migration-id.s3.amazonaws.com/abet-laminati-equinox-locker-rooms.jpg"
                        />
                    </Card>
                    <Card className="col-span-12 sm:col-span-4 h-[350px] rounded-sm">
                        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                            
                            <h4 className="text-white font-medium text-large">PRAKING</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5kZXJncm91bmQlMjBwYXJraW5nfGVufDB8fDB8fHww&w=1000&q=80"
                        />
                    </Card>

                </div>
            </div>
        </Container>
    )
}

export default Services