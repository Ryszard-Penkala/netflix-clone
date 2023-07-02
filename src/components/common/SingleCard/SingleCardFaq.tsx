import styles from "./SingleCardFaq.module.scss"

import {
    FrequentlyAskedQuestionsData,
} from "../../../../data/frequentlyAskedQuestionsData"
import FaqListItem from "./FaqListItem/FaqListItem";
import {useState} from "react";

const SingleCardFaq = () => {

    const [active, setActive] = useState('')


    return(
        <div className={styles.singleCardStandard}>
            <div className={styles.singleCardStandardContainer}>
                <h1 className={styles.singleCardStandardTitle}>
                    Frequently Asked Questions
                </h1>
                <ul className={styles.faqList} >
                    {FrequentlyAskedQuestionsData.map((el, index) => {

                        return (
                            <FaqListItem
                                key={index}
                                id = {String(index)}
                                question={el.question}
                                answerPartOne={el.answerPartOne}
                                answerPartTwo={el.answerPartTwo}
                                active={active}
                                setActive={setActive}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SingleCardFaq;