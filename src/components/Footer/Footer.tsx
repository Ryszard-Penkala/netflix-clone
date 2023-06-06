import styles from "src/components/Footer/Footer.module.scss";
import {FooterLinksData} from "../../../data/footerLinksData";

import LangPicker from "../common/LangPicker/LangPicker";
import FooterLinkItem from "./FooterLinkItem/FooterLinkItem";

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <p className={styles.footerTop}>
                    Questions? Call <a className={styles.footerTopA} href="tel: 00 800 112 4393">00 800 112 4393</a>
                </p>
                    <ul className={styles.footerLinksList}>
                        {FooterLinksData.map((el, index)=>{
                            return (
                                <FooterLinkItem
                                    key = {index}
                                    footerData = {el.footerData}
                                    footerDataLink = {el.footerDataLink}
                                />
                            )
                        })}
                    </ul>
                <div className={styles.footerLangPicker}>
                    <LangPicker />
                </div>
                <div className={styles.footerCountry}>Netflix Poland</div>
            </div>
        </footer>
    )
}

export default Footer;