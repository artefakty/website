import React from 'react'
import styles from '../styles/Events.module.css'
import EventCard from '../components/events/EventCard'
import { events } from '../data/events'

/* TODO: Poprawić readMoreLink tzn. albo ładować dynamicznie w komponencie, albo dodawać nową stronę */

const Events = () => {
  return (
    <>
      <div className={styles.packages}>
        <div className={styles.sectionInner}>
          <b className={styles.sectionTitle}>Wydarzenia</b>
          <div className={styles.sectionMeta}>
            <div className={styles.sectionDivider}></div>
            <div className={styles.sectionDescription}>Warsztaty, spotkania na uczelni oraz integracja. Wszystko, co musisz wiedzieć o naszych nadchodzących wydarzeniach i nowinkach z social mediów, znajdziesz właśnie w tym miejscu.</div>
          </div>
        </div>
      </div>
      <div className={styles.packages}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            image={event.image}
            title={event.title}
            description={event.description}
            date={event.date}
            location={event.place}
            readMoreLink={`/events/${event.id}`}
            calendar={!!event.calendar}
            startDate={event.startDate}
            endDate={event.endDate}
            startTime={event.startTime}
            endTime={event.endTime}
          />
        ))}
      </div>
    </>
  )
}

export default Events