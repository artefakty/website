import React from 'react'
import styles from '../../styles/Home.module.css';
import logoWithoutName from '../../assets/icons/logo-without-name.svg';
import { Link } from 'react-router';

const Hero = () => {
  return (
    <div className={styles.content}>
      <div className={styles.leftSide}>
        <div className={styles.text}>
          <div className={styles.title}>
            <b className={styles.studenckieKooNaukowe}>Studenckie Koło Naukowe Artefakty!</b>
          </div>
          <div className={styles.zrzeszamyOsobyZainteresowane}>Zrzeszamy osoby zainteresowane IT, robotyką i nie tylko.</div>
        </div>
        <div className={styles.buttons}>
          <Link to="/projects" className={styles.projektyWrapper}>
            <div className={styles.projekty}>PROJEKTY</div>
          </Link>
          <Link to="/events" className={styles.wydarzeniaWrapper}>
            <div className={styles.projekty}>WYDARZENIA</div>
          </Link>
        </div>
      </div>
      <img className={styles.rightSideIcon} src={logoWithoutName} alt="Artefakty Logo" />
    </div>
  )
}

export default Hero