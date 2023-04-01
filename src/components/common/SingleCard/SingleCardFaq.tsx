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
                        <div className={`${styles.faqAnswer} ${styles.faqAnswerOpen}`}>
                            <span>
                                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                                <br/>
                                <br/>
                                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                            </span>
                        </div>
                    </li>
                    <li className={styles.faqListItem}>
                        <button className={styles.faqQuestion}>
                            How much does Netflix cost??
                            <svg viewBox="0 0 26 26" className={`${styles.svgIcon} ${styles.svgClosed}`} focusable={true}>
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                            </svg>
                        </button>
                        <div className={`${styles.faqAnswer} ${styles.faqAnswerClosed}`}>
                            <span>
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 29 zł to 60 zł a month. No extra costs, no contracts.
                            </span>
                        </div>
                    </li>
                    <li className={styles.faqListItem}>
                        <button className={styles.faqQuestion}>
                            Where can I watch?
                            <svg viewBox="0 0 26 26" className={`${styles.svgIcon} ${styles.svgClosed}`} focusable={true}>
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                            </svg>
                        </button>
                        <div className={`${styles.faqAnswer} ${styles.faqAnswerClosed}`}>
                            <span>
                                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.                                <br/>
                                <br/>
                                <br/>
                                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </span>
                        </div>
                    </li>
                    <li className={styles.faqListItem}>
                        <button className={styles.faqQuestion}>
                            How do I cancel?
                            <svg viewBox="0 0 26 26" className={`${styles.svgIcon} ${styles.svgClosed}`} focusable={true}>
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                            </svg>
                        </button>
                        <div className={`${styles.faqAnswer} ${styles.faqAnswerClosed}`}>
                            <span>
                                Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            </span>
                        </div>
                    </li>
                    <li className={styles.faqListItem}>
                        <button className={styles.faqQuestion}>
                            What can I watch on Netflix?
                            <svg viewBox="0 0 26 26" className={`${styles.svgIcon} ${styles.svgClosed}`} focusable={true}>
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                            </svg>
                        </button>
                        <div className={`${styles.faqAnswer} ${styles.faqAnswerClosed}`}>
                            <span>
                                Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                            </span>
                        </div>
                    </li>
                    <li className={styles.faqListItem}>
                        <button className={styles.faqQuestion}>
                            Is Netflix good for kids?
                            <svg viewBox="0 0 26 26" className={`${styles.svgIcon} ${styles.svgClosed}`} focusable={true}>
                                <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                            </svg>
                        </button>
                        <div className={`${styles.faqAnswer} ${styles.faqAnswerClosed}`}>
                            <span>
                                The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                                <br/>
                                <br/>
                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SingleCardFaq;