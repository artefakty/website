import React from 'react'
import styles from '../styles/Home.module.css'
import { Link } from 'react-router-dom'
import NotFoundImg from '../assets/images/avatar.svg'

const NotFound = () => {
  return (
    <>
      <div className={styles.heroSectionContent}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <div className={styles.text}>
              <div className={styles.title}>
                <h1 className={styles.heroTitle}>404</h1>
                <p className={styles.heroSubtitle}>Strona nie została znaleziona</p>
              </div>

              <p style={{ fontSize: 16, color: '#f1dabf' }}>
                Przykro nam - prawdopodobnie adres URL jest nieprawidłowy albo strona została przeniesiona.
                Możesz wrócić na stronę główną lub przeszukać naszą ofertę projektów i wydarzeń.
              </p>

              <div className={styles.buttons}>
                <Link to="/" className={styles.projectsButton} aria-label="Powrót do strony głównej">
                  <span className={styles.buttonLabel}>Strona główna</span>
                </Link>
                <Link to="/projects" className={styles.eventsButton} aria-label="Zobacz projekty">
                  Zobacz projekty
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
