import React from 'react'
import styles from '../styles/Projects.module.css';
import ProjectCard from '../components/projects/ProjectCard';

const Projects = () => {
  return (
    <>
      <div className={styles.packages}>
        <div className={styles.sectionInner}>
          <b className={styles.sectionTitle}>Nasze projekty</b>
          <div className={styles.sectionMeta}>
            <div className={styles.sectionDivider}></div>
            <div className={styles.sectionDescription}>Efekty naszych prac, tysięcy linijek kodu i nieprzespanych nocy. Znajdziesz tu przekrój naszej twórczości: od ukończonych tytułów gotowych do przetestowania, aż po projekty 'Work in Progress', które wciąż rozwijamy.</div>
          </div>
        </div>
      </div>
      <div className={styles.packages}>
        <div className={styles.projectsGrid}>
          <ProjectCard
            image="/path/to/image.jpg"
            title="MIRROR DASH"
            description="Gra została stworzona na 23h WFIIS GameJam 2024. Gra dla 2 graczy na podzielonym ekranie. Biegaj i buduj! Pamiętaj, żeby nie zostać zamienionym w stół!"
            status="GRA Z GAME JAMU"
            genre="RACING"
            authors="Jan Kowalski, Anna Nowak, Jan Kowalski, Anna Nowak"
            projectLink="/projects/mirror-dash"
            date="11.12.2024"
          />
          <ProjectCard
            image="/path/to/image.jpg"
            title="Darkness"
            description="To nowy projekt rozwijany w czasie wolnym, w którym z głębokiej ciekawości zanurkowałem w Deterministic Lockstep."
            status="WORK-IN-PROGRESS"
            genre="RTS"
            authors="Jan Kowalski"
            projectLink=""
            date="05.11.2024"
          />
          <ProjectCard
            image="/path/to/image.jpg"
            title="Darkness"
            description="To nowy projekt rozwijany w czasie wolnym, w którym z głębokiej ciekawości zanurkowałem w Deterministic Lockstep."
            status="WORK-IN-PROGRESS"
            genre="RTS,Game"
            authors="Jan Kowalski"
            projectLink=""
            date="05.11.2024"
          />
        </div>
      </div>
    </>
  )
}

export default Projects