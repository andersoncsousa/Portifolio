import styles from "./Project.module.scss";
import { project, skill } from "@/constants";
import Image from "next/image";
import { motion } from 'framer-motion';

const Project = () => {

    const {skills} = project; 

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

    const skillsList = project.map((skills, i) => (
        <span key={i} className={styles.barge1}>
            {/* {i} */}
        </span>
    ));

    const projectList = project.map((project, i) => (
        <li key={i} className={styles.card}>
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <h4 className={styles.cardText}>{project.description}</h4>

                {/* <div className={styles.cardBoxSkill}>
                    <h5>Skills usadas no projeto:</h5>
                        <span key={i} className={styles.barge1}>
                            {skillsList}
                        </span>
                </div> */}
                <a href={project.url} target="_blank" 
                className={styles.btnProject}>Veja o projeto</a>
            </div>
        </li>
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