import React from 'react'
import styles from '../styles/Contact.module.css'
import { FiMail, FiFacebook, FiInstagram } from 'react-icons/fi'
import { FaDiscord } from 'react-icons/fa'

/* TODO: Dodać walidację formularza i obsługę submit */

const Contact = () => {
  return (
    <>
      <div className={styles.packages}>
        <div className={styles.sectionInner}>
          <b className={styles.sectionTitle}>Dołącz do nas!</b>
          <div className={styles.sectionMeta}>
            <div className={styles.sectionDivider}></div>
            <div className={styles.sectionDescription}>
              Masz dość kodowania do szuflady? Nie szukamy ekspertów, szukamy pasjonatów. 
              Nieważne, czy dopiero zaczynasz przygodę z GameDevem, czy masz już portfolio – 
              wpadnij, naucz się czegoś nowego i twórz gry razem z nami!
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contactGrid}>
          <div className={styles.contactIntro}>
            <div className={styles.contactHeading}>Kontakt</div>
            <div className={styles.headingDivider}></div>
            <i className={styles.introText}>
              Chcesz pogadać o gamedevie lub masz szybkie pytanie? Wbijaj na naszego Discorda! 
              W sprawach bardziej oficjalnych jesteśmy dostępni pod mailem. Staramy się odpisywać 
              tak szybko, jak tylko pozwalają na to zajęcia na uczelni.
            </i>
            <div className={styles.mutedDivider}></div>
            <div className={styles.emailWrapper}>
              <div className={styles.emailRow}>
                <FiMail className={styles.contactIcon} />
                <a href="mailto:artefakty@fis.uni.lodz.pl" className={styles.contactEmail}>
                  artefakty@fis.uni.lodz.pl
                </a>
              </div>
            </div>
            <div className={styles.mutedDivider}></div>
            <div className={styles.socialBlock}>
              <div className={styles.socialHeadingWrapper}>
                <b className={styles.socialHeading}>Wpadnij na nasze social media</b>
              </div>
              <div className={styles.socialMediaIcons}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FiFacebook className={styles.socialIcon} />
                </a>
                <a href="https://www.instagram.com/skn.artefakty/" target="_blank" rel="noopener noreferrer">
                  <FiInstagram className={styles.socialIcon} />
                </a>
                <a href="https://discord.gg/2UvEkYtsSx" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className={styles.socialIcon} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.formCard}>
            <div className={styles.formContent}>
              <b className={styles.formTitle}>wypełnij formularz i dołącz do naszego koła!</b>
              <form className={styles.formFields}>
                <div className={styles.fieldRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Imię</label>
                    <input type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Nazwisko</label>
                    <input type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                  </div>
                </div>
                <div className={styles.fieldRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>E-mail z uczelni</label>
                    <input type="email" className={styles.inputField} placeholder="Wypełnij pole" />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Numer albumu</label>
                    <input type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                  </div>
                </div>
                <div className={styles.fieldRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Wydział</label>
                    <input type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Kierunek</label>
                    <input type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                  </div>
                </div>
                <div className={styles.selectGroup}>
                  <label className={styles.fieldLabel}>Typ studiów</label>
                  <select className={styles.selectField}>
                    <option value="">Wybierz</option>
                    <option value="stacjonarne">Stacjonarne</option>
                    <option value="niestacjonarne">Niestacjonarne</option>
                  </select>
                </div>
                <button type="submit" className={styles.submitButton}>
                  <div className={styles.submitLabel}>Prześlij</div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact