import styles from "src/components/Footer/Footer.module.scss"
import LangPicker from "../common/LangPicker/LangPicker";

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerWrapper}>
                <p className={styles.footerTop}>
                    Questions? Call <a className={styles.footerTopA} href="tel: 00 800 112 4393">00 800 112 4393</a>
                </p>
                <div className={styles.footerLinks}>
                    <a className={styles.footerLink} href="https://help.netflix.com/en/node/412">FAQ</a>
                    <a className={styles.footerLink} href="https://help.netflix.com/en/">Help Center</a>
                    <a className={styles.footerLink} href="https://www.netflix.com/pl-en/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">Account</a>
                    <a className={styles.footerLink} href="https://media.netflix.com/en/">Media Center</a>
                    <a className={styles.footerLink} href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a>
                    <a className={styles.footerLink} href="https://jobs.netflix.com/">Jobs</a>
                    <a className={styles.footerLink} href="https://www.netflix.com/pl-en/redeem">Redeem Gift Cards</a>
                    <a className={styles.footerLink} href="https://www.netflix.com/gift-cards">Buy Gift Cards</a>
                    <a className={styles.footerLink} href="https://devices.netflix.com/en/">Ways to Watch</a>
                    <a className={styles.footerLink} href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
                    <a className={styles.footerLink} href="https://help.netflix.com/legal/privacy">Privacy</a>
                    <a className={styles.footerLink} href="https://www.netflix.com/pl-en/#">Cookie Preferences</a>
                    <a className={styles.footerLink} href="https://help.netflix.com/legal/corpinfo">Corporate Information</a>
                    <a className={styles.footerLink} href="https://help.netflix.com/en/contactus">Contact Us</a>
                    <a className={styles.footerLink} href="https://fast.com/">Speed Test</a>
                    <a className={styles.footerLink} href="https://help.netflix.com/en/node/125888">Legal Guarantee</a>
                    <a className={styles.footerLink} href="https://help.netflix.com/legal/notices">Legal Notices</a>
                    <a className={styles.footerLink} href="https://www.netflix.com/pl-en/browse/genre/839338">Only on Netflix</a>
                </div>
                <div className={styles.footerLangPicker}>
                    <LangPicker />
                </div>
                <div className={styles.footerCountry}>Netflix Poland</div>
            </div>
        </footer>
    )
}

export default Footer;