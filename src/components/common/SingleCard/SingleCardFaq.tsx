import styles from "./SingleCardFaq.module.scss"
import PlusSign from "../assets/PlusSign";

import {FrequentlyAskedQuestionsData} from "../../../../data/frequentlyAskedQuestionsData"

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
                            {FrequentlyAskedQuestionsData[0].question}
                            <PlusSign/>
                        </button>
                        <div className={`${styles.faqAnswer} ${styles.faqAnswerOpen}`}>
                            <span>
                                {FrequentlyAskedQuestionsData[0].answerPartOne}
                                {FrequentlyAskedQuestionsData[0].answerPartTwo
                                    ?
                                        <>
                                            <br/>
                                            <br/>
                                            {FrequentlyAskedQuestionsData[0].answerPartTwo}
                                        </>
                                    :
                                        ''
                                }
                            </span>
                        </div>
                    </li>
                    <li className={styles.faqListItem}>
                        <button className={styles.faqQuestion}>
                            {FrequentlyAskedQuestionsData[1].question}
                            <PlusSign/>
                        </button>
                        <div className={`${styles.faqAnswer} ${styles.faqAnswerClosed}`}>
                            <span>
                                {FrequentlyAskedQuestionsData[1].answerPartOne}
                                {FrequentlyAskedQuestionsData[1].answerPartTwo
                                    ?
                                    <>
                                        <br/>
                                        <br/>
                                        {FrequentlyAskedQuestionsData[1].answerPartTwo}
                                    </>
                                    :
                                    ''
                                }
                            </span>
                        </div>
                    </li>
                    <li className={styles.faqListItem}>
                        <button className={styles.faqQuestion}>
                            {FrequentlyAskedQuestionsData[2].question}
                            <PlusSign/>
                        </button>
                        <div className={`${styles.faqAnswer} ${styles.faqAnswerClosed}`}>
                            <span>
                                {FrequentlyAskedQuestionsData[2].answerPartOne}
                                {FrequentlyAskedQuestionsData[2].answerPartTwo
                                    ?
                                    <>
                                        <br/>
                                        <br/>
                                        {FrequentlyAskedQuestionsData[2].answerPartTwo}
                                    </>
                                    :
                                    ''
                                }
                            </span>
                        </div>
                    </li>
                    <li className={styles.faqListItem}>
                        <button className={styles.faqQuestion}>
                            {FrequentlyAskedQuestionsData[3].question}
                            <PlusSign/>
                        </button>
                        <div className={`${styles.faqAnswer} ${styles.faqAnswerClosed}`}>
                            <span>
                                {FrequentlyAskedQuestionsData[3].answerPartOne}
                                {FrequentlyAskedQuestionsData[3].answerPartTwo
                                    ?
                                    <>
                                        <br/>
                                        <br/>
                                        {FrequentlyAskedQuestionsData[3].answerPartTwo}
                                    </>
                                    :
                                    ''
                                }
                            </span>
                        </div>
                    </li>
                    <li className={styles.faqListItem}>
                        <button className={styles.faqQuestion}>
                            {FrequentlyAskedQuestionsData[4].question}
                            <PlusSign/>
                        </button>
                        <div className={`${styles.faqAnswer} ${styles.faqAnswerClosed}`}>
                            <span>
                                {FrequentlyAskedQuestionsData[4].answerPartOne}
                                {FrequentlyAskedQuestionsData[4].answerPartTwo
                                    ?
                                    <>
                                        <br/>
                                        <br/>
                                        {FrequentlyAskedQuestionsData[4].answerPartTwo}
                                    </>
                                    :
                                    ''
                                }
                            </span>
                        </div>
                    </li>
                    <li className={styles.faqListItem}>
                        <button className={styles.faqQuestion}>
                            {FrequentlyAskedQuestionsData[5].question}
                            <PlusSign/>
                        </button>
                        <div className={`${styles.faqAnswer} ${styles.faqAnswerClosed}`}>
                            <span>
                                {FrequentlyAskedQuestionsData[5].answerPartOne}
                                {FrequentlyAskedQuestionsData[5].answerPartTwo
                                    ?
                                    <>
                                        <br/>
                                        <br/>
                                        {FrequentlyAskedQuestionsData[5].answerPartTwo}
                                    </>
                                    :
                                    ''
                                }
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SingleCardFaq;