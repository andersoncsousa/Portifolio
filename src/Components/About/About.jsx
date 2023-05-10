import Link from 'next/link';
import styles from './About.module.scss';
import { about } from '@/constants';
import Image from 'next/image';

const About = () => {
    
  return (
    <section className={styles.homeSession}>
        <div className={styles.boxHome}>
            <div className={styles.boxImg}>
                <Image 
                src="/caique-sousa2.jpg" 
                alt="Caique Sousa" 
                width={200} 
                height={300}
                />
            </div>
            <div className={styles.boxText}>
                <h2>{about.name}</h2>
                <div>
                    {/* <p><span>Idade:</span> {about.age}.</p> */}
                    <br/> <p><span>Região: </span> {about.country}.</p>
                    <br/> <p><span>Profissão: </span> {about.profission}.</p>
                    <br/> <p><span>Bio: </span>{about.about}</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;