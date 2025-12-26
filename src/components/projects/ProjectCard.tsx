import styles from '../../styles/Projects.module.css';
import { useState } from 'react';
import { TbDeviceGamepad3Filled, TbChevronCompactDown } from 'react-icons/tb';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  status: string;
  genre: string;
  authors: string;
  projectLink: string;
  date?: string;
}

const ProjectCard = ({ image, title, description, status, genre, authors, projectLink = '', date }: ProjectCardProps) => {
    const [showAuthors, setShowAuthors] = useState(false);
    const statusTags = status
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);

    const genreTags = genre
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);

    const authorList = authors
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean);

    const isWip = statusTags.some((tag) => tag.toLowerCase() === 'work-in-progress');
    return (
        <div className={styles.project}>
            <div className={styles.frameParent}>
                <img className={styles.frameChild} src={image} alt={title} />
                <div className={styles.frameItem} />
            </div>

            <div className={styles.mirrorDashParent}>
                <b className={styles.mirrorDash}>{title}</b>
                <img className={styles.frameInner} alt="" />
                <div className={styles.projectDescription}>{description}</div>
                <img className={styles.frameInner} alt="" />
                {date && <div className={styles.projectDate}>Data projektu: {date}</div>}
                {date && <img className={styles.frameInner} alt="" />}

                <div className={styles.frameGroup}>
                    {statusTags.map((tag, idx) => (
                        <div className={styles.statusTag} key={`status-${idx}`}>
                            <b className={styles.tagLabel}>{tag}</b>
                        </div>
                    ))}
                </div>

                <img className={styles.frameInner} alt="" />

                <div className={styles.frameWrapper}>
                    {genreTags.map((tag, idx) => (
                        <div className={styles.genreTag} key={`genre-${idx}`}>
                            <b className={styles.tagLabel}>{tag}</b>
                        </div>
                    ))}
                </div>

                <img className={styles.frameInner} alt="" />

                <div className={styles.authorsSection}>
                    <button
                        type="button"
                        className={styles.deviceGamepad3Parent}
                        onClick={() => setShowAuthors((prev) => !prev)}
                        aria-expanded={showAuthors}
                    >
                        <TbDeviceGamepad3Filled className={styles.deviceGamepad3Icon} />
                        <div className={styles.authorsLabel}>AUTORZY ({authorList.length})</div>
                        <TbChevronCompactDown className={`${styles.chevronCompactDown1Icon} ${showAuthors ? styles.chevronOpen : ''}`} />
                    </button>
                    {showAuthors && authorList.length > 0 && (
                        <div className={styles.authorsList}>
                            {authorList.map((author, idx) => (
                                <div className={styles.authorItem} key={`author-${idx}`}>
                                    {author}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <img className={styles.frameInner} alt="" />
            </div>

            <div className={styles.projectInner}>
                {isWip ? (
                    <div className={`${styles.playButton} ${styles.wipButton}`}>
                        <div className={styles.playLabel}>PROJEKT W FAZIE ROZWOJU</div>
                    </div>
                ) : (
                    <a className={styles.playButton} href={projectLink} target="_blank" rel="noopener noreferrer">
                        <div className={styles.playLabel}>ZAGRAJ</div>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;