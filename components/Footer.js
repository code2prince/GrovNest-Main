import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>Footer</div>
        <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} />
      </footer>
    </>
  )
}
