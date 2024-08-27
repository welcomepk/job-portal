import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Link } from "react-router-dom"
import Autoplay from 'embla-carousel-autoplay'
import comapies from "../data/companies.json"
import faqs from "../data/faq.json"


function LandingPage() {
    return (
        <main className="flex flex-col gap-10 sm:gap-20 py-10 md:py-20">
            <section className="text-center ">
                <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold md:text-6xl lg:text-8xl tracking-tighter py-4">Find your dream job
                    <span className="flex items-center gap-2 md:gap-4 lg:gap-6">and get <img src="/logo.png" alt="logo" className="h-14 md:h-20 lg:h-32" /> </span>
                </h1>
                <p
                    className="text-gray-300 sm:mt-4 text-xs md:text-xl"
                >Explore thousands of job listing or find the perfect candidate</p>
            </section>
            <div className="flex gap-6 justify-center">
                {/* buttons */}
                <Link to={"/jobs"}>
                    <Button size="xl" variant="blue" >Find Jobs</Button>
                </Link>
                <Link to={"/post-job"}>
                    <Button size="xl" variant="destructive" >Post a Job</Button>
                </Link>
            </div>
            {/* carousel */}
            <Carousel
                plugins={[Autoplay({
                    delay: 2000
                })]}
                className="w-full py-10"
            >
                <CarouselContent className="flex items-center gap-5 md:gap-20">
                    {
                        comapies.map(({ name, id, path }) => (
                            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                                <img
                                    src={path}
                                    alt={name}
                                    className="h-9 md:h-14 object-contain"
                                />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                {/* <CarouselPrevious />
                <CarouselNext /> */}
            </Carousel>

            {/* banner */}
            <img src="/banner.jpeg" alt="banner-image"
                className="w-full"
            />
            <section className="grid sm:grid-cols-2 gap-4">
                {/* cards */}
                <Card>
                    <CardHeader>
                        <CardTitle>
                            For Job Seekers
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Search and apply for jobs, track applications, and more.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>For Employers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Post jobs, applications, and find the best candidates.</p>
                    </CardContent>
                </Card>
            </section>

            {/* Accordians */}

        </main>
    )
}

export default LandingPage