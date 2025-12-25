import type { ReactNode } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import styles from '../../styles/MainLayout.module.css';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;