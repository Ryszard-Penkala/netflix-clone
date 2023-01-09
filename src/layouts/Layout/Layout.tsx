import styles from "./Layout.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

type Props = {
    children: JSX.Element
}

const Layout = ({ children }: Props) => {
    return(
        <div className={styles.mainContent}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;