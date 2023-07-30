import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <img src="/grovelogo.png" alt="Netlify Logo" className={styles.logo} />
          <h2>GrovNest...</h2>
        <ul className={styles.permalinks}>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About-Us</a></li>
          <li><a href='#Experience'>Contact</a></li>
          <li><a href='#portfolio'>Services</a></li>
          <li><a href='#contact'>Menu</a></li>
        </ul>

        <div className={styles.footer__copyright}>
          <small>&copy; GrovNest. All rights reserved</small>
        </div>

        </div>
      </footer>
    </>
  )
}
