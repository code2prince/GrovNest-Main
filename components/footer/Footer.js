import styles from './Footer.module.css'
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
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
          <li><a href='#Contact'>Contact</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#menu'>Menu</a></li>
        </ul>


        <div className={styles.footer__socials}>
          <a href='https://www.facebook.com/pk.sharma.5070276'><FaFacebookF/></a>
          <a href='https://www.instagram.com/_the.prince_sharma/'><BsInstagram/></a>
          <a href='https://twitter.com/PrinceK70404260'><BsTwitter/></a>
        </div>

        <div className={styles.footer__copyright}>
          <small>&copy; GrovNest. All rights reserved</small>
        </div>

        </div>
      </footer>
    </>
  )
}
