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
                </div>
            </div>
        </div>
    )
}

export default SingleCard