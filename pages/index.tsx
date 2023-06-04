import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import SingleCardStandard from "../src/components/common/SingleCard/SingleCardStandard";
import {singleCardStandardData} from "../data/singleCardStandardData";
import SingleCard from "../src/components/common/SingleCard/SingleCard";
import SingleCardFaq from "../src/components/common/SingleCard/SingleCardFaq";


export default function Home() {
    return (
        <>
            <Head>
                <title>Netflix Clone App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <SingleCard />
                {singleCardStandardData.map((el, index) => {
                    const rowReverseClass = index % 2 === 0 ? "" : "rowReverse"
                    return (
                        <SingleCardStandard
                            key={index}
                            headerOne={el.headerOne}
                            headerSubtitle={el.headerSubtitle}
                            imgSrc={el.imgSrc}
                            imgAlt={el.imgAlt}
                            videoSrc={el.videoSrc}
                            videoClass={el.videoClass}
                            rowReverseClass={rowReverseClass}
                        />
                    )
                })}
                <SingleCardFaq />
            </main>
        </>
    )
}
