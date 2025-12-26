import styles from '../../styles/Events.module.css';
import 'add-to-calendar-button';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'add-to-calendar-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        name?: string;
        description?: string;
        startDate?: string;
        endDate?: string;
        startTime?: string;
        endTime?: string;
        location?: string;
        options?: string;
        timeZone?: string;
        trigger?: string;
        inline?: boolean;
        listStyle?: string;
        buttonStyle?: string;
      };
    }
  }
}

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  readMoreLink?: string;
  calendar: boolean;
  startDate?: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
}

const EventCard = ({ image, title, description, date, readMoreLink, calendar, startDate, endDate = startDate, startTime, endTime, location = 'Wydział Fizyki i Informatyki Stosowanej Uniwersytetu Łódzkiego, Pomorska 149/153, 90-236 Łódź, Polska' }: EventCardProps) => {
  return (
    <div className={styles.eventCard}>
      <div className={styles.eventMedia}>
        <div className={styles.imageContainer}>
          <img className={styles.eventImage} src={image} alt={title} />
          <img className={styles.eventImage} src={image} alt={title} />
        </div>
      </div>
      <div className={styles.eventDetails}>
        <div className={styles.detailsColumn}>
          <div className={styles.titleRow}>
            <b className={styles.title}>{title}</b>
            {calendar && (
                <div className={styles.calendarWrapper}>
                    <add-to-calendar-button
                        name={title}
                        startDate={startDate}
                        startTime={startTime}
                        endDate={endDate}
                        endTime={endTime}
                        timeZone="Europe/Warsaw"
                        location={location}
                        options="'Apple','Google'"
                        listStyle="dropdown-static"
                        buttonStyle="round"
                        hideTextLabelButton
                        buttonsList
                        lightMode="bodyScheme"
                        language="pl"
                    ></add-to-calendar-button>
                </div>
                )}
          </div>
            <div className={styles.titleDivider}></div>
            <div className={styles.descriptionBlock}>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
          <div className={styles.eventFooter}>
          <div className={styles.date}>{date}</div>
            <div className={styles.readMoreButton}>
            {readMoreLink ? (
              <a href={readMoreLink} className={styles.readMore}>Czytaj dalej</a>
            ) : (
              <div className={styles.readMore}>Czytaj dalej</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard