import styles from "./FaqListItem.module.scss"
import {FrequentlyAskedQuestionsDataProps} from "../../../../../data/frequentlyAskedQuestionsData";

import PlusSign from "../../assets/PlusSign";

const FaqListItem = ({...props}: FrequentlyAskedQuestionsDataProps) => {
    return(
        <li className={styles.faqListItem}>
            <button className={styles.faqQuestion}>
                {props.question}
                <PlusSign/>
            </button>
            <div className={`${styles.faqAnswer} ${styles.faqAnswerClosed}`}>
                            <span>
                                {props.answerPartOne}
                                {props.answerPartTwo
                                    ?
                                    <>
                                        <br/>
                                        <br/>
                                        {props.answerPartTwo}
                                    </>
                                    :
                                    ''
                                }
                            </span>
            </div>
        </li>
    )
}

export default FaqListItem;