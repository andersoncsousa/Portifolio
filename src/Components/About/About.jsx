import styles from "./About.module.scss";
import { about } from "@/constants";
import Image from "next/image";
import { motion } from 'framer-motion';

const About = () => {
  const motionProps = (initialX, finalX) => ({
    initial: { opacity: 0, y: initialX },
    whileInView: { opacity: 1, y: finalX },
    viewport: { once: true },
    transition: {
      type: "spring",
      bounce: 0.4,
      durantion: 1,
      delay: 0.1,
    },
  });

  return (
    <section className={styles.homeSession}>
      <div className={styles.boxHome}>
        <motion.div {...motionProps(-100, 0)} className={styles.boxImg}>
          <Image
            src="/caique-sousa2.jpg"
            alt="Caique Sousa"
            width={200}
            height={300}
          />
        </motion.div>
        <motion.div {...motionProps(100, 0)} className={styles.boxText}>
          <h2>{about.name}</h2>
          <div>
            {/* <p><span>Idade:</span> {about.age}.</p> */}
            <br />
            <p>
              <span>Região: </span> {about.country}.
            </p>
            <br />
            <p>
              <span>Profissão: </span> {about.profission}.
            </p>
            <br />
            <p>
              <span>Bio: </span>
              {about.about}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
