import styles from "./SingleCard.module.scss";
import Image from "next/image";

const SingleCard = () => {
    return(
        <div className={styles.singleCard}>
            <div className={styles.cardBackground}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/misc/home-bg.jpg"
                        alt="Netflix logo"
                        layout="fill"
                        objectFit="cover"
                        className={styles.bgImage}
                    />
                    <div className={styles.imageGradient}/>
                </div>
            </div>
            <div className={styles.cardText}>
                <div className={styles.cardTextContainer}>
                    <div className={styles.cardTitleTextContainer}>
                        <h1 className={styles.cardTitleText}>
                            Unlimited movies, TV shows, and more
                        </h1>
                    </div>
                    <div className={styles.cardItem}>
                        <p className={styles.cardItemText}>
                            Watch anywhere. Cancel anytime.
                        </p>
                    </div>
                    <div className={styles.emailItem}>
                        <div className={styles.emailItemContainer}>
                            <form className={styles.emailForm}>
                                <h3 className={styles.emailHeader}>
                                    Ready to watch? Enter your email to create or restart your membership.
                                </h3>
                                <div className={styles.emailContainer}>
                                    <div className={styles.emailBar}>
                                        <label htmlFor="emailInputField" className={styles.emailLabel}>
                                            Email address
                                        </label>
                                        <div className={styles.emailInputContainer}>
                                            <input type="email" autoComplete="email" minLength={5} maxLength={50} name="email" id="emailInputField"/>
                                            <div className={styles.emailBackgroundStyle}/>
                                        </div>

                                    </div>

                                </div>
                            </form>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCard