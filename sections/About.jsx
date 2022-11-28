/* eslint-disable quotes */
"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components/CustomTexts";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About Metaversus" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          classNam="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="extra-bold text-white">Metaversus</span> is a
          decentralized platform that allows users to create, share, and
          monetize their digital assets. The platform is built on the{" "}
          <span className="extra-bold text-white">Solana</span> blockchain and
          is powered by the{" "}
          <span className="extra-bold text-white">Metaverse</span> token.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default About;
