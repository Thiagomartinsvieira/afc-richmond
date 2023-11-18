import Link from 'next/link';
import Styles from '../../styles/Nav.module.css';

const Nav = () => {
  return (
    <div>
      <nav className={Styles.nav}>
        <Link href="/home">
          <img src="https://i.pinimg.com/originals/03/87/0f/03870f01e4595fe300ccc1a328043153.png"
            alt="logo"
          />
        </Link>
        <Link href="/home">
          home
        </Link>
        <Link href="/become">
          Become a fan member
        </Link>
        <Link href="/players">
          Players squad
        </Link>
        <Link href="/news">
          News
        </Link>
        <Link href="/history">
          History
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
