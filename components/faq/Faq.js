import styles from './Faq.module.css'
export default function Faq(){
    return (
        <>
           <div className={styles.faq_container}>
                <div className={styles.banner}>
                    {/* <h1>faq</h1> */}
                </div>

                <div className={styles.container}>
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    
                    <div className={styles.cont}>
                        <div>
                            <div className={styles.faq}>
                                <div className={styles.question}>
                                    <h3>What is a fingerprint-based multiple intelligence report?</h3>
                                    <svg width="15" height="10" viewBox="0 0 42 25">
                                        <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <div className={styles.answer}>
                                    <p>
                                    DMIT (Dermatoglyphics Multiple Intelligence Test) is a fingerprint-based biometric analysis. DMIT is beneficial for all age groups, but it is especially valuable for parents and teachers to discover a child's intrinsic abilities as well as areas that need to be moulded.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.faq}>
                                <div className={styles.question}>
                                    <h3>What is the cost of the fingerprint-based multiple intelligence report?</h3>
                                    <svg width="15" height="10" viewBox="0 0 42 25">
                                        <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <div className={styles.answer}>
                                    <p>
                                        Grovnest spgitsripbsrbrbrbsrrGrovnest spgitsripbsrbrbrbsrrGrovnest spgitsripbsrbrbrbsrrGrovnest spgitsripbsrbrbrbsrrGrovnest 
                                        spgitsripbsrbrbrbsrrGrovnest spgitsripbsrbrbrbsrr
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={styles.faq}>
                                <div className={styles.question}>
                                    <h3>Who can benifit from GrovNest services?</h3>
                                    <svg width="15" height="10" viewBox="0 0 42 25">
                                        <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <div className={styles.answer}>
                                    <p>
                                    DMIT (Dermatoglyphics Multiple Intelligence Test) is a fingerprint-based biometric analysis. DMIT is beneficial for all age groups, but it is especially valuable for parents and teachers to discover a child's intrinsic abilities as well as areas that need to be moulded.
                                    </p>
                                </div>
                            </div>

                            <div className={styles.faq}>
                                <div className={styles.question}>
                                    <h3>How is the fingerprint-based multiple intelligence report generated?</h3>
                                    <svg width="15" height="10" viewBox="0 0 42 25">
                                        <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                                    </svg>
                                </div>
                                <div className={styles.answer}>
                                    <p>
                                    DMIT test involves a biometric based profiling which uses the individual's unique and genetically defined fingerprint patterns. They have to submit the scans of their whole set of fingerprints. DMIT is the study of fingerprints. All the fingers are scanned, and their fingerprints are recorded.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={styles.btn}>ASK A QUESTION</button>

                </div>

           </div>
        </>
    )
}