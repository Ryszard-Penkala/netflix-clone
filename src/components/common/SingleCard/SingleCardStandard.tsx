import styles from './SingleCardStandard.module.scss'
import {SingleCardProps} from "../../../../data/singleCardStandardData";



const SingleCardStandard = ({...props}: SingleCardProps) => {
    return(
        <div className={styles.singleCardStandard}>
            <div className={`${styles.singleCardStandardContainer} ${styles[props.rowReverseClass]}`}>
                <div className={styles.singleCardStandardText}>
                    <h1 className={styles.singleCardStandardTitle}>
                        {props.headerOne}
                    </h1>
                    <h2 className={styles.singleCardStandardSubtitle}>
                        {props.headerSubtitle}
                    </h2>
                </div>
                <div className={styles.singleCardStandardImgContainer}>
                    <div className={styles.singleCardStandardImg}>
                        <img
                            className={styles.standardImage}
                            src={props.imgSrc}
                            alt={props.imgAlt}
                        />
                        { !props.videoSrc
                            ? null
                            : <div className={styles[props.videoClass]}>
                                <video className={styles.singleCardVideo} autoPlay={true} playsInline={true} muted={true} loop={true}>
                                    <source
                                        src={props.videoSrc}
                                        type="video/mp4"/>
                                </video>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCardStandard