import Styles from '../../styles/Nav.module.css'

const Nav = () => {
  return (
    <div>
      <nav className={Styles.nav}>
        <a href="#">Home</a>
        <a href="#">Become a fan member</a>
        <a href="#">Players squad</a>
        <a href="#">News</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  )
}

export default Nav