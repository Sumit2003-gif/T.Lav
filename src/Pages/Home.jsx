import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../Componet/Hero';
import Commit from '../Componet/Commit';
import Service from '../Componet/Service';
import Client from '../Componet/Client';
import ContactPart from '../Componet/ContactPart';

const Home = () => {
  // Common animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <Hero />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}>
        <Commit />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.4 }}>
        <Service />
      </motion.div>

      {/* <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.6 }}>
        <Our_Projects />
      </motion.div> */}

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.8 }}>
        <Client />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 1 }}>
        <ContactPart />
      </motion.div>
    </div>
  );
};

export default Home;
