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
                    <div className={styles.imageGradient}>
                        image gradient
                    </div>
                </div>
            </div>
            <div className={styles.cardText}>
                mainTexts
            </div>
        </div>
    )
}

export default SingleCard