import Link from "next/link";
import styles from '../styles/Intruduction.module.css';

export default function Home() {
  return (
    <div className={styles.introduction}>
      <div className={styles.headerSection}>
        <h2>AFC Richmond</h2>
        <h2>Project created by Thiago Martins</h2>
      </div>

      <div className={styles.imageSection}>
        <img
          src="https://t2.tudocdn.net/640244?w=1920&h=1440"
          alt="AFC Richmond"
          className={styles.featuredImage}
        />

        <div className={styles.linkSection}>
          <Link href='/home'>Go to website</Link>
          <Link href='/become'>Become a fan member</Link>
        </div>
      </div>
    </div>
  );
}
