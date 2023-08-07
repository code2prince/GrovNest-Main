import react from "react";
import styles from '@components/about/about.module.css';
export default function About(){
    return (
        <>
            <h2>About Us</h2>
            <h1>GrovNest</h1>
            <div className={styles.container}>
                <div>
                    <div className={styles.vision}>
                        <h2>Our Vision</h2>
                    </div>
                    <p className={styles.p1}>GrovNest aims to incentivize & tokenization platform for its users to
                         learn more about new digital capabilities and use them in their daily life.
                    </p>
                </div>

                <div>
                    <div className={styles.vision}>
                        <h2>Our Mission</h2>
                    </div>
                    <p className={styles.p1}>GrovNest's Mission is to become one-an-only paperless & e-platform with real values on each work/task 
                        within the network & provides counseling in timely manner to overcome challenge in every part of life 
                        such as education, health, wealth, love, relationship & inspiration.
                        We believe in this phrase - "Penny Penny makes Money"
                    </p>
                </div>
            </div>
        </>
    )
}