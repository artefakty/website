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
        <div className={styles.footerLayout}>
          <div className={styles.footerTopRow}>
            <div className={styles.brandContainer}>
              <Link to="/">
                <img className={styles.logoWithName} src={logoWithName} alt="SKN Artefakty" />
              </Link>
            </div>
            <div className={styles.partnersRow}>
              <a href="https://www.uni.lodz.pl" target="_blank" rel="noopener noreferrer">
                <img className={styles.partnerLogo} src={logoUL} alt="Uniwersytet Łódzki" />
              </a>
              <a href="https://www.wfis.uni.lodz.pl" target="_blank" rel="noopener noreferrer">
                <img className={styles.partnerLogoAlt} src={logoWFIS} alt="Wydział Fizyki i Informatyki Stosowanej" />
              </a>
            </div>
          </div>
          <div className={styles.footerSections}>
            <div className={styles.contactSection}>
              <div className={styles.contactBlock}>
                <div className={styles.sectionHeading}>Kontakt</div>
                <div className={styles.contactInfoList}>
                  <div className={styles.contactRow}>
                    <FiMail className={styles.footerIcon} />
                    <a href="mailto:artefakty@fis.uni.lodz.pl" className={styles.contactEmail}>
                      artefakty@fis.uni.lodz.pl
                    </a>
                  </div>
                  <div className={styles.addressBlock}>
                    <FiMapPin className={styles.footerIcon} />
                    <a href="https://maps.app.goo.gl/KhWgK28P9MEGF18b6" target="_blank" rel="noopener noreferrer" className={styles.addressLink}>
                      Wydział Fizyki i Informatyki Stosowanej UŁ<br/>ul. Pomorska 149/153<br/>90-236 Łódź
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navigationSection}>
              <div className={styles.sectionHeading}>Nawigacja</div>
              <div className={styles.navLinksColumn}>
                <Link to="/" className={styles.navLinkPrimary}>Strona Główna</Link>
                <Link to="/projects" className={styles.navLink}>Projekty</Link>
                <Link to="/events" className={styles.navLink}>Wydarzenia</Link>
                <Link to="/contact" className={styles.navLink}>Kontakt</Link>
              </div>
            </div>
            <div className={styles.socialSection}>
              <div className={styles.sectionHeading}>Social Media</div>
              <div className={styles.socialIcons}>
                <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FiFacebook className={styles.footerIcon} />
                </a>
                <a href="https://www.instagram.com/skn.artefakty/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FiInstagram className={styles.footerIcon} />
                </a>
                <a href="https://discord.gg/2UvEkYtsSx" aria-label="Discord" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className={styles.footerIcon} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div className={styles.footerCopyright}>
              © {new Date().getFullYear()} SKN Artefakty<br/>
              Made by: Ola Stopka, Jakub Gorządek
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer