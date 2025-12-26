import React from 'react'
import styles from '../styles/Contact.module.css'
import { FiMail, FiFacebook, FiInstagram } from 'react-icons/fi'
import { FaDiscord } from 'react-icons/fa'

/* TODO: Dodać walidację formularza i obsługę submit */

const Contact = () => {
  return (
    <>
      <div className={styles.packages}>
        <div className={styles.doczDoNasParent}>
          <b className={styles.doczDoNas}>Dołącz do nas!</b>
          <div className={styles.frameParent}>
            <div className={styles.frameChildTitle}></div>
            <div className={styles.maszDoKodowania}>
              Masz dość kodowania do szuflady? Nie szukamy ekspertów, szukamy pasjonatów. 
              Nieważne, czy dopiero zaczynasz przygodę z GameDevem, czy masz już portfolio – 
              wpadnij, naucz się czegoś nowego i twórz gry razem z nami!
            </div>
          </div>
        </div>
      </div>
      <div className={styles.kontakt}>
        <div className={styles.frameParent}>
          <div className={styles.kontaktParent}>
            <div className={styles.kontakt2}>Kontakt</div>
            <div className={styles.frameChild}></div>
            <i className={styles.chceszPogadaO}>
              Chcesz pogadać o gamedevie lub masz szybkie pytanie? Wbijaj na naszego Discorda! 
              W sprawach bardziej oficjalnych jesteśmy dostępni pod mailem. Staramy się odpisywać 
              tak szybko, jak tylko pozwalają na to zajęcia na uczelni.
            </i>
            <div className={styles.frameItem}></div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <FiMail className={styles.frameIcon} />
                <a href="mailto:artefakty@fis.uni.lodz.pl" className={styles.artefaktyfisunilodzpl}>
                  artefakty@fis.uni.lodz.pl
                </a>
              </div>
            </div>
            <div className={styles.frameItem}></div>
            <div className={styles.frameContainer}>
              <div className={styles.wpadnijNaNaszeSocialMediaWrapper}>
                <b className={styles.wpadnijNaNasze}>Wpadnij na nasze social media</b>
              </div>
              <div className={styles.socialMediaIcons}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FiFacebook className={styles.frameChild2} />
                </a>
                <a href="https://www.instagram.com/skn.artefakty/" target="_blank" rel="noopener noreferrer">
                  <FiInstagram className={styles.frameChild2} />
                </a>
                <a href="https://discord.gg/2UvEkYtsSx" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className={styles.frameChild2} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.wypenijFormularzIDoczDoParent}>
              <b className={styles.wypenijFormularzI}>wypełnij formularz i dołącz do naszego koła!</b>
              <form className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.imiParent}>
                    <label className={styles.imi}>Imię</label>
                    <input type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                  </div>
                  <div className={styles.imiParent}>
                    <label className={styles.imi}>Nazwisko</label>
                    <input type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.imiParent}>
                    <label className={styles.imi}>E-mail z uczelni</label>
                    <input type="email" className={styles.inputField} placeholder="Wypełnij pole" />
                  </div>
                  <div className={styles.imiParent}>
                    <label className={styles.imi}>Numer albumu</label>
                    <input type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.imiParent}>
                    <label className={styles.imi}>Wydział</label>
                    <input type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                  </div>
                  <div className={styles.imiParent}>
                    <label className={styles.imi}>Kierunek</label>
                    <input type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                  </div>
                </div>
                <div className={styles.eMailZUczelniParent}>
                  <label className={styles.imi}>Typ studiów</label>
                  <select className={styles.selectField}>
                    <option value="">Wybierz</option>
                    <option value="stacjonarne">Stacjonarne</option>
                    <option value="niestacjonarne">Niestacjonarne</option>
                  </select>
                </div>
                <button type="submit" className={styles.przelijWrapper}>
                  <div className={styles.przelij}>Prześlij</div>
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