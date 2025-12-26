import React from 'react'
import styles from '../styles/Home.module.css';
import Hero from '../components/home/Hero';

const Home = () => {
  return (
    <div className={styles.heroSectionContent}>
      <Hero />
    </div>
  )
}

export default Home