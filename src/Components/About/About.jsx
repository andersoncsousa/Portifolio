import Link from 'next/link';
import styles from './About.module.scss';
import { about } from '@/constants';
import Image from 'next/image';

const About = () => {
  const { name, age, country, profission } = about;
  return (
    <section className={styles.homeSession}>
        <div className={styles.boxHome}>
            <div className={styles.boxImg}>
                <Image src="/caique-sousa2.jpg" alt="Caique Sousa" width={200} height={300}/>
            </div>
            <div className={styles.boxText}>
                <h2>{about.name}</h2>
                <p>
                    Idade: {about.age}.
                    <br/> Estado: {about.country}.
                    <br/> Profissão: {about.profission}.
                </p>
            </div>
        </div>
    </section>
  );
};

export default About;