import React from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from '../../styles/Events.module.css'
import { events } from '../../data/events'
import 'add-to-calendar-button'

const formatDate = (iso?: string) => {
  if (!iso) return ''
  try {
    const d = new Date(iso)
    return d.toLocaleDateString('pl-PL')
  } catch (e) {
    return iso
  }
}

const EventShowMore: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const event = events.find((e) => e.id === id)

  if (!event) {
    return (
      <div className={styles.packages}>
        <div className={styles.sectionInner}>
          <b className={styles.sectionTitle}>Wydarzenie nie znalezione</b>
          <div className={styles.sectionMeta}>
            <div className={styles.sectionDivider}></div>
            <div className={styles.sectionDescription}>Nie znaleziono wydarzenia o podanym identyfikatorze.</div>
          </div>
          <div style={{ marginTop: 20 }}>
            <Link to="/events" className={styles.readMoreButton}>
              <span className={styles.readMore}>Wróć do listy</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className={`${styles.packages} ${styles.eventPage}`}>
        <div className={styles.sectionInner}>
          <div className={styles.eventHeaderGrid}>
            <div className={styles.eventDateCol}>
              <div className={styles.eventUpdateLabel}>Aktualizacja Artefaktów</div>
              <div className={styles.eventDate}>{formatDate(event.date)}</div>
            </div>

            <div className={styles.eventTitleCol}>
              <div className={styles.eventBreadcrumb}>WYDARZENIA / {event.title.split(' ').slice(0,4).join(' ')}</div>
              <h1 className={styles.eventMainTitle}>{event.title}</h1>
              <div className={styles.sectionDivider}></div>
              <div className={styles.eventPlace}>{event.place}</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.packages} ${styles.eventContent}`}>
        <div className={styles.sectionInner}>
          <div className={styles.eventContentBox}>
            {event.image && (
              <div className={styles.eventHeroImage}>
                <img src={event.image} alt={event.title} />
              </div>
            )}

            <div className={styles.eventTextCentered}>
              {event.description.split('\n').map((p, i) => (
                <p key={i} className={styles.eventParagraphCentered}>{p}</p>
              ))}

              <div className={styles.socialButtonsCentered}>
                {event.instagram && event.instagram !== '' && (
                  <a href={event.instagram} target="_blank" rel="noopener noreferrer" className={`${styles.readMoreButton} ${styles.yellow}`}>
                    <span className={styles.readMore}>INSTAGRAM</span>
                  </a>
                )}

                {event.facebook && event.facebook !== '' && (
                  <a href={event.facebook} target="_blank" rel="noopener noreferrer" className={`${styles.readMoreButton} ${styles.yellow}`}>
                    <span className={styles.readMore}>FACEBOOK</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.packages} style={{ paddingBottom: 0, paddingTop: 0 }}>
        <div className={styles.centeredBackButton}>
          <Link to="/events" className={`${styles.readMoreButton} ${styles.backButtonLarge}`}>
            <span className={styles.readMore}>Wróć do listy</span>
          </Link>
        </div>
      </div>

      <div className={styles.bottomSpacer}></div>
    </>
  )
}

export default EventShowMore
