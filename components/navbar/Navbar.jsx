import styles from "./Navbar.module.css";
import { GrMenu } from "react-icons/gr";
import Image from "next/image";
export default function Navbar() {
  const handleClick = (e) => {
    console.log(e.target.classList);
    e.target.classList.add("hide_nav")
  }
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav_center}>
          <div className={styles.nav_header}>
            <img className={styles.logo} src="/grovelogo.png" alt="" />
            <img onClick={(e)=>{handleClick(e)}} id={styles.burger} style={{display:"none", width:"32px", height:"32px"}}  src="/menu1.jpg" alt="" />
          </div>
          <div className={styles.hide_nav}>
            <div className={styles.nav_link}>Home</div>
            <div className={styles.nav_link}>About</div>
            <div className={styles.nav_link}>Contact</div>
            <div className={styles.nav_link}>Services</div>
          </div>
        </div>
      </nav>
    </>
  );
}
