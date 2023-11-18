import Link from "next/link";
import styles from '../styles/Intruduction.module.css'

export default function Home() {
  return (
    <div className={styles.introduction}>
      <h2>AFC Richmond</h2>
      <div>
        <h2>Project create by Thiago Martins</h2>
      </div>

      <div className={styles.introduction2}>
        <img src="https://t2.tudocdn.net/640244?w=1920&h=1440"
          alt="afc Richmond"
        />
        <Link href='/home'>go to website</Link>
      </div>

    </div>
  )
}