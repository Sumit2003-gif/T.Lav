import React from 'react';
import { motion } from 'framer-motion';
import HomeHero from '../Components/HomeHero';
import Commit from '../Components/Commit';
import Service from '../Components/Service';
import Client from '../Components/Client';
import ContactPart from '../Components/ContactPart';
import AboutSection from '../Components/HomeAbout';
import HomeInterior from '../Components/HomeInteriorView';
import CounterSection from '../Components/CounterSection';
import PropertyFeature from '../Components/HomeProperty';
import ServiceSection from '../Components/HomeService';
import TestimonialSection from '../Components/Testemonial';
import AppointmentSection from '../Components/AppointmentSection';
import { Section } from 'lucide-react';
import AppartmentPlans from '../Components/AppartmentPlans';
import Avability from '../Components/Avability';
import News from '../Components/News';

const Home = () => {
  // Common animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      
    >
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <HomeHero />
      </motion.div>
       <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <AboutSection/>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <CounterSection/>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <HomeInterior />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <PropertyFeature/>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <ServiceSection/>
      </motion.div>
       <motion.div initial="hidden" animate="visible" variants={fadeUp}>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <AppartmentPlans/>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <Avability/>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <TestimonialSection />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <News/>
      </motion.div>
      {/* <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
        <Commit />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.4 }}>
        <Service />
      </motion.div>
       */}

      {/* <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.6 }}>
        <Our_Projects />
      </motion.div> */}
{/* 
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.8 }}>
        <Client />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 1 }}>
        <ContactPart />
      </motion.div> */}
    </div>
  );
};

export default Home;
