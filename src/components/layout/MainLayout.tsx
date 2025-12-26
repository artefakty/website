import { useEffect, type ReactNode } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import styles from '../../styles/MainLayout.module.css';
import { Snowfall } from '@namnguyenthanhwork/react-snowfall-effect';
import { useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className={styles.layout}>
      <Navbar />
      <Snowfall
        snowflakeCount={200}
        speed={{ min: 1.5, max: 4 }}
        size={{ min: 12, max: 30 }}
        snowflakeShape='dot'
      />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;