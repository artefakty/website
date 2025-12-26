import React from 'react';
import styles from '../styles/Events.module.css';
import EventCard from '../components/events/EventCard';

/* TODO: Poprawić readMoreLink tzn. albo ładować dynamicznie w komponencie, albo dodawać nową stronę */

const Events = () => {
  return (
    <>
    <div className={styles.packages}>
      <div className={styles.wydarzeniaParent}>
        <b className={styles.wydarzenia}>Wydarzenia</b>
        <div className={styles.frameParent}>
          <div className={styles.frameChildTitle}></div>
          <div className={styles.warsztatySpotkaniaNa}>Warsztaty, spotkania na uczelni oraz integracja. Wszystko, co musisz wiedzieć o naszych nadchodzących wydarzeniach i nowinkach z social mediów, znajdziesz właśnie w tym miejscu.</div>
        </div>
      </div>
    </div>
    <div className={styles.packages}>
      <EventCard
        image="/path/to/image.jpg"
        title="Aktualizacja Artefaktów"
        description="Opis wydarzenia..."
        date="04/12/2025"
        calendar={true}
        startDate="2025-12-04"
        endDate="2025-12-04"
        startTime="18:00"
        endTime="20:00"
        location="Wydział Fizyki i Informatyki Stosowanej Uniwersytetu Łódzkiego, Pomorska 149/153, 90-236 Łódź, Polska"
        readMoreLink="/events/1"
      />
      <EventCard
        image="/path/to/image.jpg"
        title="Aktualizacja Artefaktów"
        description="Opis wydarzenia..."
        date="04/12/2025"
        readMoreLink="/events/1"
        calendar={false}
      />
    </div>
    </>
  )
}

export default Events