import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'
import { FiMail, FiFacebook, FiInstagram } from 'react-icons/fi'
import { FaDiscord } from 'react-icons/fa'

const Contact = () => {
  type FormState = {
    firstName: string
    lastName: string
    email: string
    semester: string
    albumNumber: string
    faculty: string
    course: string
    studyType: string
  }

  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    semester: '',
    albumNumber: '',
    faculty: '',
    course: '',
    studyType: '',
  })

  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitting, setSubmitting] = useState(false)

  const validate = (values: FormState) => {
    const e: Partial<FormState> = {}
    if (!values.firstName.trim()) e.firstName = 'Podaj imię.'
    if (!values.lastName.trim()) e.lastName = 'Podaj nazwisko.'
    if (!values.email.trim()) e.email = 'Podaj adres e‑mail.'
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Nieprawidłowy e‑mail.'
    if (!values.albumNumber.trim()) e.albumNumber = 'Podaj numer albumu.'
    if (!values.semester.trim()) e.semester = 'Podaj semestr.'
    if (!values.faculty.trim()) e.faculty = 'Podaj wydział.'
    if (!values.course.trim()) e.course = 'Podaj kierunek.'
    if (!values.studyType.trim()) e.studyType = 'Wybierz typ studiów.'
    return e
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate(form)
    if (Object.keys(v).length) {
      setErrors(v)
      return
    }

    setSubmitting(true)

    const msFormsBaseUrl = "https://forms.office.com/Pages/ResponsePage.aspx?id=7xpEYw7al0O7fvnUcF6WO40LBAy0ontEmQHj7BLp5D9UMU1XOFpHOVpGMFFISkJWRjkxU1UzVllNNy4u"
    
    const fieldIds = {
      firstName: "rd878fe717ed44c0c8103314f6bf28afa",
      lastName: "r63574e28c10048fda54b16ed64bb2338",
      studyType: "r9a3fdf5c24f24d5583fc1f97f2ce281e",
      semester: "r94928a4181244434a4ea70bf385db59c",
      course: "r7b428140c7744a2c88896555d0328084",
      faculty: "rc20ab05cde9f437a9e4270bd8bf2b27a",
      albumNumber: "r455e3b26e0764e869e653a485634a28c",
      email: "r577b6e9df048433c8d8b2b19e95f3011",
      consent: "rc75a2e66fd5945c48a0021f50c5c4a7a"
    }

    const params = new URLSearchParams()
    params.append(fieldIds.firstName, form.firstName)
    params.append(fieldIds.lastName, form.lastName)
    params.append(fieldIds.email, form.email)
    params.append(fieldIds.albumNumber, form.albumNumber)
    params.append(fieldIds.faculty, form.faculty)
    params.append(fieldIds.course, form.course)
    params.append(fieldIds.studyType, `"${form.studyType}"`)
    params.append(fieldIds.semester, `"${form.semester}"`)
    params.append(fieldIds.consent, `"Tak"`)

    window.open(`${msFormsBaseUrl}&${params.toString()}`, "_blank")
    setSubmitting(false)
  }

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
              <form className={styles.formFields} onSubmit={handleSubmit} noValidate>
                <div className={styles.fieldRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Imię</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                    {errors.firstName && <div className={styles.fieldError}>{errors.firstName}</div>}
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Nazwisko</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                    {errors.lastName && <div className={styles.fieldError}>{errors.lastName}</div>}
                  </div>
                </div>

                <div className={styles.fieldRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>E-mail z uczelni</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" className={styles.inputField} placeholder="Wypełnij pole" />
                    {errors.email && <div className={styles.fieldError}>{errors.email}</div>}
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Numer albumu</label>
                    <input name="albumNumber" value={form.albumNumber} onChange={handleChange} type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                    {errors.albumNumber && <div className={styles.fieldError}>{errors.albumNumber}</div>}
                  </div>
                </div>

                <div className={styles.fieldRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Wydział</label>
                    <input name="faculty" value={form.faculty} onChange={handleChange} type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                    {errors.faculty && <div className={styles.fieldError}>{errors.faculty}</div>}
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Kierunek</label>
                    <input name="course" value={form.course} onChange={handleChange} type="text" className={styles.inputField} placeholder="Wypełnij pole" />
                    {errors.course && <div className={styles.fieldError}>{errors.course}</div>}
                  </div>
                </div>

                <div className={styles.fieldRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Typ studiów</label>
                    <select name="studyType" value={form.studyType} onChange={handleChange} className={styles.selectField}>
                      <option value="">Wybierz</option>
                      <option value="I stopnia">I stopnia</option>
                      <option value="II stopnia">II stopnia</option>
                      <option value="Jednolite magisterskie">Jednolite magisterskie</option>
                    </select>
                    {errors.studyType && <div className={styles.fieldError}>{errors.studyType}</div>}
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Semestr</label>
                    <select name="semester" value={form.semester} onChange={handleChange} className={styles.selectField}>
                      <option value="">Wybierz</option>
                      <option value="I">I</option>
                      <option value="II">II</option>
                      <option value="III">III</option>
                      <option value="IV">IV</option>
                      <option value="V">V</option>
                      <option value="VI">VI</option>
                      <option value="VII">VII</option>
                    </select>
                    {errors.semester && <div className={styles.fieldError}>{errors.semester}</div>}
                  </div>
                </div>

                <button type="submit" className={styles.submitButton} disabled={submitting}>
                  <div className={styles.submitLabel}>{submitting ? 'Przetwarzanie...' : 'Dalej do Microsoft Forms'}</div>
                </button>
              </form>
              
              <div className={styles.hintText} style={{marginTop: '15px', fontSize: '0.8rem', opacity: 0.7}}>
                Kliknięcie przycisku otworzy oficjalny formularz Microsoft Forms z Twoimi danymi. 
                Pamiętaj, aby tam kliknąć "Prześlij", aby ukończyć rejestrację.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact