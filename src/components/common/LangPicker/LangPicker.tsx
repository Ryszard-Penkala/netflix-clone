import styles from "./LangPicker.module.scss";

const LangPicker = () => {
    return(
        <>
            <label htmlFor="langSwitcher" className={styles.langPickerLabel}>
                <span className={styles.langSwitcherText}>Wybierz język</span>
            </label>
            <select name="langSwitcher" className={styles.langPickerSelect}>
                <option value="polish">Polski</option>
                <option value="english">English</option>
            </select>
        </>
    )
}

export default LangPicker;