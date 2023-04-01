export type SingleCardProps = {
    headerOne: string;
    headerSubtitle: string;
    imgSrc: string;
    imgAlt: string;
    videoSrc?: string;
    videoClass: string;
    rowReverseClass: "" | "rowReverse";
}

export const singleCardStandardData: Omit<SingleCardProps, 'rowReverseClass'>[] = [
    {
        headerOne: "Enjoy on your TV.",
        headerSubtitle: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
        imgSrc: "/misc/tv.png",
        imgAlt: "TV Icon",
        videoSrc: "/misc/video-tv-0819.m4v",
        videoClass: "singleCardStandardVideoContainer"
    },
    {
        headerOne: "Download your shows to watch offline.",
        headerSubtitle: "Save your favorites easily and always have something to watch.",
        imgSrc: "/misc/home-mobile.jpg",
        imgAlt: "Download Icon",
        videoSrc: "",
        videoClass: "",
    },
    {
        headerOne: "Watch everywhere.",
        headerSubtitle: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
        imgSrc: "/misc/device-pile.png",
        imgAlt: "Device Pile Icon",
        videoSrc: "/misc/video-devices.m4v",
        videoClass: "singleCardSmallerVideoContainer",
    },
    {
        headerOne: "Create profiles for kids.",
        headerSubtitle: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
        imgSrc: "/misc/kids.png",
        imgAlt: "Kids Icon",
        videoSrc: "",
        videoClass: "",
    }
]

