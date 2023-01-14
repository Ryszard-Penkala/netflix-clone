import styles from './SingleCardStandard.module.scss'

const SingleCardStandard = () => {
    return(
        <div className={styles.singleCardStandard}>
            <div className={styles.singleCardStandardContainer}>
                <div className={styles.singleCardStandardText}>
                    <h1 className={styles.singleCardStandardTitle}>
                        Enjoy on your TV.
                    </h1>
                    <h2 className={styles.singleCardStandardSubtitle}>
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </h2>
                </div>
                <div className={styles.singleCardStandardImgContainer}>
                    <div className={styles.singleCardStandardImg}>
                        <img
                            className={styles.standardImage}
                            src="/misc/tv.png"
                            alt="TV Icon"
                        />
                        <div className={styles.singleCardStandardVideoContainer}>
                            <video className={styles.singleCardVideo} autoPlay={true} playsInline={true} muted={true} loop={true}>
                                <source src="/misc/video-tv-0819.m4v" type="video/mp4"/>
                            </video>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCardStandard