import React from 'react'
import styles from '../../styles/Home.module.css'
import jakubImg from '../../assets/images/jakub-gorzadek.jpg'
import kacperImg from '../../assets/images/kacper-musial.jpg'
import piotrImg from '../../assets/images/piotr-kosek.jpg'

type Member = {
  name: string
  role: string
  initials: string
  img?: string
}

const members: Member[] = [
  { name: 'Kacper Musiał', role: 'Przewodniczący', initials: 'KM', img: kacperImg },
  { name: 'Jakub Gorządek', role: 'Wiceprzewodniczący', initials: 'JG', img: jakubImg },
  { name: 'Piotr Kosek', role: 'Wiceprzewodniczący', initials: 'PK', img: piotrImg },
]

const MentorCard = () => {
  return (
    <section className={styles.boardSection}>
      <div className={styles.boardHeader}>
        <h2 className={styles.boardTitle}>Nasz aktualny zarząd</h2>
        <span className={styles.boardLine} />
        <p className={styles.boardLead}>
          Osoby odpowiedzialne za kierunek rozwoju koła, koordynację projektów i dbanie o to, by w Artefaktach nigdy
          nie wiało nudą.
        </p>
      </div>

      <div className={styles.boardGrid}>
        {members.map((member) => (
          <div key={member.name} className={styles.boardCard}>
            <div className={styles.avatarBadge}>
              {member.img ? (
                <img className={styles.avatarMask} src={member.img} alt={member.name} />
              ) : (
                <span className={styles.avatarInitials}>{member.initials}</span>
              )}
            </div>
            <div className={styles.boardName}>{member.name}</div>
            <div className={styles.boardDivider} />
            <div className={styles.boardRole}>{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MentorCard