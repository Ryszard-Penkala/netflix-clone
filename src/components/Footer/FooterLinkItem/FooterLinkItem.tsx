import styles from "./FooterLinkItem.module.scss";
import {FooterLinkDataProps} from "../../../../data/footerLinksData";

const FooterLinkItem = ({footerData, footerDataLink } :FooterLinkDataProps) => {
    return (
        <li className={styles.footerLinksListItem}>
             <a className={styles.footerLink} href={footerDataLink}>{footerData}</a>
        </li>
    )
}

export default FooterLinkItem