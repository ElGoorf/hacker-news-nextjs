import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const LayoutHeader = () => (
  <header className={styles.header}>
    <h1><Link href="/">Hacker News API demo</Link></h1>
    <p>Hussein Duvigneau</p>
  </header>
);

export default LayoutHeader;
