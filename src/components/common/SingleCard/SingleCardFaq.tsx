import styles from "./SingleCardFaq.module.scss"

const SingleCardFaq = () => {
    return(
        <div className={styles.singleCardStandard}>
            <div className={styles.singleCardStandardContainer}>
                <h1 className={styles.singleCardStandardTitle}>
                    Frequently Asked Questions
                </h1>
                <ul className={styles.faqList}>
                    <li className={styles.faqListItem}>
                        <button className={styles.faqQuestion}>
                            What is Netflix?
                            <svg viewBox="0 0 26 26" className={`${styles.svgIcon} ${styles.svgClosed}`} focusable={true}>
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                            </svg>
                        </button>
                        <div className={styles.faqAnswer}>
                            <span>
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                                <br/>
                                <br/>
                                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                            </span>
                        </div>
                    </li>
                </ul>
            Text
            </div>
        </div>
    )
}

export default SingleCardFaq;