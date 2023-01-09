import styles from "./Header.module.scss"
import Image from 'next/image'
import Button from "../common/Button/Button";

const Header = () => {
    return(
        <header className={styles.headerSection}>
            <div className={styles.logoContainer}>
                <Image
                    src="/logo.svg"
                    alt="Netflix logo"
                    layout="fill"
                    className={styles.logo}
                />
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.langPicker}>
                    <label htmlFor="langSwitcher" className={styles.langPickerLabel}>
                        <span className={styles.langSwitcherText}>Wybierz język</span>
                    </label>
                    <select name="langSwitcher" className={styles.langPickerSelect}>
                        <option value="polish">Polski</option>
                        <option value="english">English</option>
                    </select>
                </div>
                <Button type="buttonRed">
                    Sign In
                </Button>
            </div>
        </header>
    )
}

export default Header;