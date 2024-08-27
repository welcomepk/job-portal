import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

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
            {/* banner */}

            <section>
                {/* cards */}
            </section>

            {/* Accordians */}
        </main>
    )
}

export default LandingPage