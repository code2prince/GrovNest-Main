import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav_center}>
          <div className={styles.nav_header}>
            <h1>NAVBAR LOGO</h1>
            <div className={styles.nav_logo}>GROVNEST</div>
          </div>
          <div className={styles.nav_links}></div>
        </div>
      </nav>
    </>
  );
}
