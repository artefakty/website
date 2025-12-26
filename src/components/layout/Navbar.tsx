import styles from '../../styles/Navbar.module.css';
import { FiFacebook, FiInstagram, FiMenu, FiX } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import logo from '../../assets/icons/logo-with-name.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = () => setIsMenuOpen(false);

    return (
        <div className={styles.navbar}>
            <Link to="/" onClick={handleNavClick}>
                <img className={styles.brandLogo} src={logo} alt="Artefakty Logo" />
            </Link>
            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                <Link to="/" className={styles.navLink} onClick={handleNavClick}>Strona główna</Link>
                <div className={styles.navSeparator}>|</div>
                <Link to="/projects" className={styles.navLink} onClick={handleNavClick}>Projekty</Link>
                <div className={styles.navSeparator}>|</div>
                <Link to="/events" className={styles.navLink} onClick={handleNavClick}>Wydarzenia</Link>
                <div className={styles.navSeparator}>|</div>
                <Link to="/contact" className={styles.navLink} onClick={handleNavClick}>Kontakt</Link>
            </div>

            <div className={`${styles.socialLinks} ${isMenuOpen ? styles.active : ''}`}>
                <a href="https://www.facebook.com" aria-label="Facebook" onClick={handleNavClick}>
                    <FiFacebook className={styles.socialIcon} />
                </a>
                <a href="https://www.instagram.com/skn.artefakty/" aria-label="Instagram" onClick={handleNavClick}>
                    <FiInstagram className={styles.socialIcon} />
                </a>
                <a href="https://discord.gg/2UvEkYtsSx" aria-label="Discord" onClick={handleNavClick}>
                    <FaDiscord className={styles.socialIcon} />
                </a>
            </div>
        </div>
    )
}

export default Navbar