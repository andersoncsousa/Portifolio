import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import { navLinks } from "@/constants";
import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const listMotionProps = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "28rem" },
  };

  const itemMotionProps = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 50 },
  };

  const renderLinks = navLinks.map((link, i) => (
    <motion.li variants={itemMotionProps} key={i}>
      <a href={link.url} title={link.name}>{link.name}</a>
    </motion.li>
  ));

  

  const toggleIsMobile = () => setIsMobile((prevState) => !prevState);

  return (
    <section className={styles.navbar}>
      <div>
        <Link href="/" title="CS Tech">
          <Image
            src="/logo-cs-tech-favicon.png"
            alt="CS Tech"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <nav id='home'>
        <ul className={styles.links}>{renderLinks}</ul>
        <AiOutlineMenu onClick={toggleIsMobile} className={styles.menu} />
        <motion.ul
          variants={listMotionProps}
          animate={isMobile ? "open" : "closed"}
          transition={{
            when: "beforeChildren",
            staggerChildren: 0.2,
            type: "just",
            duration: 0.3,
          }}
          className={styles["mobile-links"]}
        >
          <AiOutlineClose onClick={toggleIsMobile} />
          {renderLinks} 
        </motion.ul>
      </nav>
    </section>
  );
};

export default Navbar;
