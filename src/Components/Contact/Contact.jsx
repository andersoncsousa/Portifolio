import styles from "./Contact.module.scss";
import { footer } from "@/constants";
import Image from "next/image";
import { motion } from 'framer-motion';
import Link from "next/link";

const Contact = () => {
    const {social } = footer;

    const motionProps = {
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
        variants={motionProps}
        viewport={{once:true}}
        initial='offScreen'
        whileInView='onScreen'
        custom={i}
        >
            <Link className={styles.link} href={social.url} target="_blank" title={social.name}>
                <i>
                    {social.component}
                </i>
                <span>
                    {social.name}
                </span>
            </Link>
        </motion.li>
    ));

    return (
        <section id='contact' className={styles.contact}>
            <h2>Contato</h2>
            <ul className={styles.content}>
                {renderSocial}
            </ul>
        </section>
    );
};

export default Contact;
