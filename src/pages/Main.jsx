import React from 'react';
import Hero from '../components/Hero';
import Equipment from '../components/Equipment';
import Solutions from '../components/Solutions';
import Services from '../components/Services';
import Advantages from '../components/Advantages';
import About from '../components/About';
import Partners from '../components/Partners';
import Form from '../components/Form';

const Main = () => {
    return (
        <div>
            <Hero />
            <Equipment />
            <Solutions />
            <Services />
            <Advantages />
            <About />
            <Partners />
            <Form />
        </div>
    );
};

export default Main;