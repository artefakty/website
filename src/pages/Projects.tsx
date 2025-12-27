import styles from '../styles/Projects.module.css';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';

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
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              status={project.status}
              genre={project.genre}
              authors={project.authors}
              projectLink={project.projectLink}
              date={project.date}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects