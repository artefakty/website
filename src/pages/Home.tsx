import React from 'react'
import styles from '../styles/Home.module.css'
import { FiMapPin } from 'react-icons/fi'
import Hero from '../components/home/Hero'
import MentorCard from '../components/home/MentorCard'
import { latestProjects } from '../data/projects'
import { latestEvents } from '../data/events'
import { Link } from 'react-router'

const Home = () => {
  return (
    <>
      <div className={styles.heroSectionContent}>
        <Hero />
      </div>

      <section className={styles.aboutSection}>
        <div className={styles.aboutCard}>
          <div className={styles.aboutLeft}>
            <h2 className={styles.aboutHeadline}>Czym są Artefakty?</h2>
          </div>

          <div className={styles.aboutRight}>
            <div className={styles.aboutTitleRow}>
              <h3 className={styles.aboutTitle}>Trochę o artefaktach...</h3>
              <span className={styles.aboutDivider} />
            </div>
            <div className={styles.aboutBody}>
              <p>Jesteśmy Studenckim Kołem Naukowym działającym przy Wydziale Fizyki i Informatyki Stosowanej UŁ, ale Artefakty to dla nas coś więcej niż tylko organizacja – to społeczność pasjonatów GameDevu.</p>
              <p>Zajmujemy się wszystkim, co związane z tworzeniem gier: od programowania mechanik w Unity, przez grafikę, aż po level design.</p>
              <p>Niezależnie od tego, czy jesteś programistą, artystą, czy dopiero zaczynasz swoją przygodę z silnikami gier, znajdziesz tu swoje miejsce. Łączymy naukę z dobrą zabawą, stawiając na praktykę, realizację wspólnych projektów i integrację w luźnej atmosferze.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionZarzd}>
        <MentorCard />
      </section>

      <section className={styles.latestSection}>
        <div className={styles.latestHeader}>
          <h2 className={styles.latestTitle}>Nasze najnowsze projekty</h2>
          <span className={styles.latestLine} />
          <p className={styles.latestLead}>
            Tu tętni życie koła. Zobacz, co działo się u nas w ostatnim czasie – relacje ze spotkań, szkoleń i wydarzeń,
            w których braliśmy udział.
          </p>
          <Link to="/projects" className={styles.latestLink}>
            Zobacz wszystkie projekty
          </Link>
        </div>

        <div className={styles.latestGrid}>
          {latestProjects.map((project) => (
            <article key={project.id} className={styles.latestCard}>
              <div className={styles.latestImageWrap}>
                <img className={styles.latestImage} src={project.image} alt={project.title} />
              </div>
              <div className={styles.latestContent}>
                <div className={styles.latestMeta}>
                  <span className={styles.latestStatus}>{project.status}</span>
                  <span className={styles.latestDate}>{project.date}</span>
                </div>
                <h3 className={styles.latestName}>{project.title}</h3>
                <p className={styles.latestDesc}>{project.description}</p>
                <div className={styles.latestTags}>
                  {project.genre
                    .split(',')
                    .map((tag) => tag.trim())
                    .filter(Boolean)
                    .map((tag) => (
                      <span key={`${project.id}-${tag}`} className={styles.latestTag}>
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.eventsSection}>
        <div className={styles.eventsHeader}>
          <h2 className={styles.eventsTitle}>Ostatnie wydarzenia</h2>
          <span className={styles.eventsLine} />
          <p className={styles.eventsLead}>
            Krótki przegląd naszych ostatnich aktywności. Przeczytaj relacje ze spotkań, szkoleń i wydarzeń, w których
            braliśmy udział.
          </p>
          <Link to="/events" className={styles.eventsLink}>
            Zobacz wszystkie wydarzenia
          </Link>
        </div>

        <div className={styles.eventsGrid}>
          {latestEvents.map((event) => (
            <article key={event.id} className={styles.eventsCard}>
              <div className={styles.eventsImageWrap}>
                <img className={styles.eventsImage} src={event.image} alt={event.title} />
              </div>
              <div className={styles.eventsContent}>
                <div className={styles.eventsMeta}>
                  <span className={styles.eventsTag}>{event.tag}</span>
                  <span className={styles.eventsDate}>{event.date}</span>
                </div>
                <h3 className={styles.eventsName}>{event.title}</h3>
                <p className={styles.eventsDesc}>{event.description}</p>
                <div className={styles.eventsPlace}>{event.place}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.sectionGdzieNasZnale}>
        <div className={styles.mapka}>
          <div className={styles.frameGroup}>
            <div className={styles.gdzieNasZnaleParent}>
              <h2 className={styles.gdzieNasZnale}>Gdzie nas znaleźć?</h2>
              <span className={styles.vectorIcon} aria-hidden="true" />
            </div>
            <div className={styles.stacjonujemyNaCoDzieWBudParent}>
              <p className={styles.stacjonujemyNaCo}>
                Stacjonujemy na co dzień w budynku Wydziału Fizyki i Informatyki Stosowanej Uniwersytetu Łódzkiego.
              </p>
              <p className={styles.stacjonujemyNaCo}>
                To właśnie tutaj odbywają się nasze regularne spotkania, warsztaty i wspólne prace nad projektami.
              </p>
            </div>
            <div className={styles.vectorParent}>
              <span className={styles.vectorIcon} aria-hidden="true" />
              <div className={styles.frameContainer}>
                <FiMapPin className={styles.addressDot}  />
                <span className={styles.ulPomorska149153}>ul. Pomorska 149/153, 90-236 Łódź</span>
              </div>
              <span className={styles.vectorIcon} aria-hidden="true" />
            </div>
          </div>
          <div className={styles.mapkaInner}>
            <iframe
              title="Mapa dojazdu"
              className={styles.mapFrame}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Wydzia%C5%82+Fizyki+i+Informatyki+Stosowanej+Uniwersytetu+%C5%81%C3%B3dzkiego&output=embed"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home