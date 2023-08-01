import styles from './Footer.module.css'
import {FaFacebookF} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import Contact from '@components/contact/Contact';
import About from '@components/about/About';
import Link from 'next/link';
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <img src="/grovelogo.png" alt="Netlify Logo" className={styles.logo} />
         
        
        <div className={styles.permalinks}>
          <div className={styles.permalinks_content} href="#">Home</div>
          <div className={styles.permalinks_content} href="#">AboutUs</div>
          <div className={styles.permalinks_content} href="#">Contact</div>
          <div className={styles.permalinks_content} href="#">Services</div>
          <div className={styles.permalinks_content} href="#">Menu</div>
        </div>


        <div className={styles.footer__socials}>
          <a href='https://www.facebook.com/pk.sharma.5070276'><FaFacebookF/></a>
          <a href='#'><BsLinkedin/></a>
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
