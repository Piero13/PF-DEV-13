import { Helmet } from "react-helmet-async";

import Hero from "../../sections/Hero/Hero";
import Services from "../../sections/Services/Services";
import Projects from "../../sections/Projects/Projects";
import About from "../../sections/About/About";
import Process from "../../sections/Process/Process";
import Contact from "../../sections/Contact/Contact";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>
                    Pierre Fasce | Développeur web | Sites modernes et accessibles
                </title>

                <meta name="description" content="Développeur web freelance spécialisé dans la création de sites modernes, performants et accessibles." />
            </Helmet>
            
            <Hero />
            <Services />
            <Projects />
            <About />
            <Process />
            <Contact />
        </>
    )
}