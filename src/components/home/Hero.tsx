import styles from '../../styles/Home.module.css';
import logoWithoutName from '../../assets/icons/logo-without-name.svg';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className={styles.content}>
      <div className={styles.leftSide}>
        <div className={styles.text}>
          <div className={styles.title}>
            <b className={styles.heroTitle}>Studenckie Koło Naukowe Artefakty!</b>
          </div>
          <div className={styles.heroSubtitle}>Kodujemy, projektujemy, gramy. Twoje miejsce w świecie GameDevu na Uniwersytecie Łódzkim.</div>
        </div>
        <div className={styles.buttons}>
          <Link to="/projects" className={styles.projectsButton}>
            <div className={styles.buttonLabel}>PROJEKTY</div>
          </Link>
          <Link to="/events" className={styles.eventsButton}>
            <div className={styles.buttonLabel}>WYDARZENIA</div>
          </Link>
        </div>
      </div>
      <img className={styles.rightSideIcon} src={logoWithoutName} alt="Artefakty Logo" />
    </div>
  )
}

export default Hero