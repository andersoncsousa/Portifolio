import styles from "./About.module.scss";
import { about } from "@/constants";
import Image from "next/image";
import { motion } from 'framer-motion';
import Link from "next/link";
import { footer } from "@/constants";

const About = () => {
  const {social } = footer;

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

  const motionProps2 = {
    offScreen: {
      opacity: 0,
      y: 50,
    },
    onScreen: (i = 2) => (
      {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          bounce: 0.4,
          durantion:1,
          delay:0.2 * i,
        }
      }
    )
  }

  const renderSocial = social.map((social, i) => (
    <motion.li key={i}
    variants={motionProps2}
    viewport={{once:true}}
    initial='offScreen'
    whileInView='onScreen'
    custom={i}
    >
      <Link className={styles.link} href={social.url} target="_blank" title={social.name}>
        <i>
          {social.component}
        </i>
      </Link>
    </motion.li>
  ));

  return (
    <section id='about' className={styles.homeSession}>
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
          <ul>
            <li className={styles.boxSocial}>
              {renderSocial}
            </li>
            <li>
              <span>Região: </span> {about.country}.
            </li>
            <li>
              <span>Profissão: </span> {about.profission}.
            </li>
            <li>
              <span>Bio: </span>
              {about.about}
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
