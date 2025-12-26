import styles from '../../styles/Footer.module.css';
import { FiFacebook, FiInstagram, FiMail, FiMapPin } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import logoWithName from '../../assets/icons/logo-with-name.svg';
import logoUL from '../../assets/icons/logo-ul.svg';
import logoWFIS from '../../assets/icons/logo-ul-wfis.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <div className={styles.frame}>
              <Link to="/">
                <img className={styles.logoWithName} src={logoWithName} alt="SKN Artefakty" />
              </Link>
            </div>
            <div className={styles.groupParent}>
              <a href="https://www.uni.lodz.pl" target="_blank" rel="noopener noreferrer">
                <img className={styles.groupIcon} src={logoUL} alt="Uniwersytet Łódzki" />
              </a>
              <a href="https://www.wfis.uni.lodz.pl" target="_blank" rel="noopener noreferrer">
                <img className={styles.groupIcon2} src={logoWFIS} alt="Wydział Fizyki i Informatyki Stosowanej" />
              </a>
            </div>
          </div>
          <div className={styles.sekcjaKontaktParent}>
            <div className={styles.sekcjaKontakt}>
              <div className={styles.kontaktParent}>
                <div className={styles.kontakt}>Kontakt</div>
                <div className={styles.frameParent}>
                  <div className={styles.frameGroup}>
                    <FiMail className={styles.frameIcon} />
                    <a href="mailto:artefakty@fis.uni.lodz.pl" className={styles.artefaktyfisunilodzpl}>
                      artefakty@fis.uni.lodz.pl
                    </a>
                  </div>
                  <div className={styles.frameContainer}>
                    <FiMapPin className={styles.frameIcon} />
                    <a href="https://maps.app.goo.gl/KhWgK28P9MEGF18b6" target="_blank" rel="noopener noreferrer" className={styles.wydziaFizykiI}>
                      Wydział Fizyki i Informatyki Stosowanej UŁ<br/>ul. Pomorska 149/153<br/>90-236 Łódź
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.section3}>
              <div className={styles.kontakt}>Nawigacja</div>
              <div className={styles.stronaGlownaParent}>
                <Link to="/" className={styles.stronaGlowna}>Strona Główna</Link>
                <Link to="/projects" className={styles.projekty}>Projekty</Link>
                <Link to="/events" className={styles.projekty}>Wydarzenia</Link>
                <Link to="/contact" className={styles.projekty}>Kontakt</Link>
              </div>
            </div>
            <div className={styles.sekcjaSocialMedia}>
              <div className={styles.kontakt}>Social Media</div>
              <div className={styles.ikony}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FiFacebook className={styles.frameIcon} /></a>
                <a href="https://www.instagram.com/skn.artefakty/" target="_blank" rel="noopener noreferrer"><FiInstagram className={styles.frameIcon} /></a>
                <a href="https://discord.gg/2UvEkYtsSx" target="_blank" rel="noopener noreferrer"><FaDiscord className={styles.frameIcon} /></a>
              </div>
            </div>
          </div>
          <div className={styles.logo2}>
            <div className={styles.sknArtefakty}>© {new Date().getFullYear()} SKN Artefakty.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer