import styles from "./Project.module.scss";
import { project } from "@/constants";
import { projectLista } from "@/constants";
import {habilits} from '@/constants';
import Image from "next/image";
import { motion } from 'framer-motion';

const Project = () => {
    // const  } = habilits; 

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

    const skillsList = projectLista.map((habilit, i) => (
        <span key={i} className={styles.barge1}>
            {habilit.name}
        </span>
    ));

    const projectList = project.map((project, i) => (
        <motion.li 
        variants={motionProps}
        viewport={{once:true}}
        initial='offScreen'
        whileInView='onScreen'
        key={i} 
        className={styles.card}>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <h4 className={styles.cardText}>{project.description}</h4>

                {/* <h5>Skills usadas no projeto:</h5>
                <ul className={styles.cardBoxSkill}>
                        <li className={styles.barge1}>
                            {skillsList}
                        </li>
                </ul> */}
                <div className={styles.cardBoxSkill}>
                    <h5>Skills usadas no projeto:</h5>
                    {project.skills}
                </div>
                <a href={project.url} 
                target="_blank" 
                className={styles.btnProject} 
                title={[`Veja o projeto`, `${project.title}`]}>Veja o projeto</a>
            </div>
        </motion.li>
    ));

    return (
    <section id='project' className={styles.project}>
        <h2>Projetos Web</h2>
        <div className={styles.content}>
            <ul>
                {projectList}
            </ul>
        </div>
    </section>
    );
};

export default Project;