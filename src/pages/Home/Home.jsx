import Hero from "../../sections/Hero/Hero";
import Services from "../../sections/Services/Services";
import Projects from "../../sections/Projects/Projects";
import About from "../../sections/About/About";
import Process from "../../sections/Process/Process";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Projects />
            <About />
            <Process />
        </>
    )
}