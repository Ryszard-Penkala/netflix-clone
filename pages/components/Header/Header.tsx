import styles from "./Header.module.scss"
import Image from 'next/image'
import Button from "../common/Button/Button";

const Header = () => {
    return(
        <header className={styles.headerSection}>
            <div className={styles.logo}>
                <Image src="/logo.svg" alt="Netflix logo" width={108} height={32}/>
            </div>
            <div className={styles.buttonContainer}>
                <Button>
                    English
                </Button>
                <Button>
                    Signup
                </Button>
            </div>
        </header>
    )
}

export default Header;