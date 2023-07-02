import styles from "./FaqListItem.module.scss"
import {FrequentlyAskedQuestionsDataProps} from "../../../../../data/frequentlyAskedQuestionsData";

import PlusSign from "../../assets/PlusSign";

const FaqListItem = ({...props}: FrequentlyAskedQuestionsDataProps, ) => {

    return(
        <li className={styles.faqListItem} >
            <button className={styles.faqQuestion} onClick={()=> {
                if ((props.active === props.id) && props.setActive){
                    props.setActive('')
                } else {
                    props.setActive && props.setActive(props.id)
                }
            }}>
                {props.question}
                <PlusSign/>
            </button>
            <div className={`${styles.faqAnswer} ${styles.faqAnswerClosed}` + (props.active === props.id ? `${styles.faqAnswerOpen}` : ``)}>

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