import styles from '../../styles/Navbar.module.css';
import { FiFacebook, FiInstagram, FiMail, FiMenu, FiX } from "react-icons/fi";
import logo from '../../assets/icons/logo-with-name.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

/* TODO: Zrobić te same wielkości ikonek social mediów i odległości te same */

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.navbar}>
            <img className={styles.frameIcon} src={logo} alt="Artefakty Logo" />
            
            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            <div className={`${styles.stronaGlownaParent} ${isMenuOpen ? styles.active : ''}`}>
                <Link to="/" className={styles.div}>Strona główna</Link>
                <div className={styles.divStatic}>|</div>
                <Link to="/projects" className={styles.div}>Projekty</Link>
                <div className={styles.divStatic}>|</div>
                <Link to="/events" className={styles.div}>Wydarzenia</Link>
                <div className={styles.divStatic}>|</div>
                <Link to="/contact" className={styles.div}>Kontakt</Link>
            </div>

            <div className={styles.frameParent}>
                <a href="https://www.facebook.com"><FiFacebook className={styles.frameIcon2} /></a>
                <a href="https://www.instagram.com/skn.artefakty/"><FiInstagram className={styles.frameIcon2} /></a>
                <a href="mailto:artefakty@fis.uni.lodz.pl"><FiMail className={styles.frameIcon2} /></a>
            </div>
        </div>
    )
}

export default Navbar