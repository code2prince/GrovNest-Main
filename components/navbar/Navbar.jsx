import styles from "./Navbar.module.css";
import { GrMenu } from "react-icons/gr";
import Image from 'next/image';
export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav_center}>
          <div className={styles.nav_header}>
            <img className={styles.logo} src="/grovN.jpg" alt="" />
            {/* <h1>..</h1> */}
            
            {/* <GrMenu clasName={styles.toggle_btn} /> */}
          </div>
          <div className={styles.nav_links}>
            <div className={styles.nav_link}>Home</div>
            <div className={styles.nav_link}>About</div>
            <div className={styles.nav_link}>Contact</div>
            <div className={styles.nav_link}>Services</div>
            <div className={styles.nav_link}>Profile</div>
          </div>
        </div>
      </nav>
    </>
  );
}
