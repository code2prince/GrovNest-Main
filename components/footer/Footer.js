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
         
        <ul className={styles.permalinks}>
          <li><a href='#'>Home</a></li>
          <li>< a  href="/About">About-Us</a></li>

          <li>
          <Link href="/Contact">
            <a>Contact </a>
          </Link>
          </li>
          <li><a href='/services'>Services</a></li>
          <li><a href='/menu'>Menu</a></li>
        </ul>


        <div className={styles.footer__socials}>
          <a href='https://www.facebook.com/groups/1337010443483939/?hoisted_section_header_type=recently_seen&multi_permalinks=1342219862962997'><FaFacebookF/></a>
          <a href='https://www.linkedin.com/company/grovnestgrowsmarterwithus/'><BsLinkedin/></a>
          <a href='https://www.instagram.com/grovnest/'><BsInstagram/></a>
          <a href='https://twitter.com/grovnest'><BsTwitter/></a>
        </div>

        <div className={styles.footer__copyright}>
          <small>&copy; GrovNest. All rights reserved</small>
        </div>

        </div>
      </footer>
    </>
  )
}
