import React from 'react';
import Banner from './Banner';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default Home;
