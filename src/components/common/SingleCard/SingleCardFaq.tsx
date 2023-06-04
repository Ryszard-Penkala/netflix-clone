import styles from "./SingleCardFaq.module.scss"

import {
    FrequentlyAskedQuestionsData,
} from "../../../../data/frequentlyAskedQuestionsData"
import FaqListItem from "./FaqListItem/FaqListItem";

const SingleCardFaq = () => {
    return(
        <div className={styles.singleCardStandard}>
            <div className={styles.singleCardStandardContainer}>
                <h1 className={styles.singleCardStandardTitle}>
                    Frequently Asked Questions
                </h1>
                <ul className={styles.faqList}>
                    {FrequentlyAskedQuestionsData.map((el, index) => {
                        return (
                            <FaqListItem
                                key={index}
                                question={el.question}
                                answerPartOne={el.answerPartOne}
                                answerPartTwo={el.answerPartTwo}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SingleCardFaq;