import FaceBook from '../assets/images/facebook.svg'
import Tweet from '../assets/images/tweet.svg'
import LinkedIn from '../assets/images/linked.svg'
import BottomIcon1 from '../assets/images/bottom_icons_1.svg'
import BottomIcon2 from '../assets/images/bottom_icons_2.svg'
import BottomIcon3 from '../assets/images/bottom_icons_3.svg'

import image from "../assets/images/up_1.png"
import image2 from "../assets/images/up_2.png";
import image3 from "../assets/images/up_3.png";
import loader from "../assets/images/progressLoder.svg";

import highLight1 from "../assets/images/hightlight_1.png";
import highLight2 from "../assets/images/hightlight_4.png";
import highLight3 from "../assets/images/hightlight_3.png";

import up1 from "../assets/images/up_1.png";

export const socialIcons = [
    { icon: FaceBook },
    { icon: Tweet },
    { icon: LinkedIn },
]

export const footerOptions = [
    {
        mainLabel: 'ABOUT US',
        childLabel: [
            { label: 'About us', url: '#' },
            { label: 'Leadership', url: '#' },
            { label: 'Newsroom', url: '#' },
            { label: 'Blog', url: '#' },
            { label: 'Carrers', url: '#' }
        ]
    },
    {
        mainLabel: 'SUPPORT',
        childLabel: [
            { label: 'Contact Us', url: '#' },
            { label: 'FAQs', url: '#' },
            { label: 'Privacy Policy', url: '#' },
            { label: 'User Agreement', url: '#' },
            { label: 'Accessibility', url: '#' }
        ]
    },
    {
        mainLabel: 'BUYING & SELLING',
        childLabel: [
            { label: 'Seller Login', url: '#' },
            { label: 'Buyer Sign Up', url: '#' },
            { label: 'Apply to Sell', url: '#' },
            { label: 'Buying | Selling', url: '#' },
            { label: 'Market Reports', url: '#' }
        ]
    },
    {
        mainLabel: 'POLICY',
        childLabel: [
            { label: 'Privacy Policy', url: '#' },
            { label: 'DMCA Policy', url: '#' },
            { label: 'Cookies Policy', url: '#' },
            { label: 'CA Privacy Policy and Rights', url: '#' },
            { label: 'Your Privacy Choices', url: '#' }
        ]
    },
]

export const bottomIcons = [
    { icon: BottomIcon1 },
    { icon: BottomIcon2 },
    { icon: BottomIcon3 }
]

export const states = [
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'California', value: 'CA' },
    { label: 'Florida', value: 'FL' },
    { label: 'New Jersey', value: 'NJ' },
]

export const category = [
    { label: 'Frontier Landscape', value: 'Landscape' },
    { label: 'Frontier Livestock', value: 'Livestock' },
    { label: 'Frontier Seeding', value: 'Seeding' },
    { label: 'Frontier Tillage', value: 'Tillage' },
    { label: 'Frontier Loader', value: 'Loader' },
]

export const vehicleCategories = [
    {label: 'Aggregate Equipment', count: 12},
    {label: 'Air Compressors', count: 239},
    {label: 'Campers', count: 263},
    {label: 'Forklifts', count: 19},
    {label: 'Tractors', count: 93},
    {label: 'Trailers', count: 55},
    {label: 'Trenchers', count: 166},
    {label: 'Trucks', count: 53},
]

export const ListData =[
    {
        title: "Wel-Cum In Farms Equipment Retirement Dispersal",
        dateTime: "Friday, March 3 | 9:00 AM Eastern",
        StateCity: "Marion, NY",
        description: "Join us for one of the most immaculate farm dispersals ever conducted! Ron Magde and Don Magde of Wel-Cum In Farms has bought most of this equipment…",
        time: "5 Hours 55 Minutes",
        descriptionFinishTime: "To go until live auction begins",
        participate: "PARTICIPATE",
        setRemainder: "SET REMINDER",
        btnEquipment: "View Equipment",
        image: image,
        loader: loader
    },
    {
        title: "Oilfield, Truck, and Construction Equipment",
        dateTime: "Tuesday, March 7 | 9:00 AM Central",
        StateCity: "Midland, TX",
        description: "Oilfield Equipment | Parts & Components | Trucks | Trailers | Construction Equipment and more…",
        time: "4 Days 6 Hours",
        descriptionFinishTime: "To go until live auction begins",
        participate: "PARTICIPATE",
        setRemainder: "SET REMINDER",
        btnEquipment: "View Equipment",
        image: image2,
        loader: loader
    },
    {
        title: "Wel-Cum In Farms Equipment Retirement Dispersal",
        dateTime: "Friday, March 3 | 9:00 AM Eastern",
        StateCity: "Marion, NY",
        description: "Join us for one of the most immaculate farm dispersals ever conducted! Ron Magde and Don Magde of Wel-Cum In Farms has bought most of this equipment…",
        time: "5 Hours 55 Minutes",
        descriptionFinishTime: "To go until live auction begins",
        participate: "PARTICIPATE",
        setRemainder: "SET REMINDER",
        btnEquipment: "View Equipment",
        image: image3,
        loader: loader
    }
]

export const cardData = [
    {
        title: "Knop Farms LLCKnop Farms LLCKnop Farms LLC",
        StateCity: "Steeleville, IL",
        dateTime: "March 10, 2023 - Knop Farms Knop Farms LLCKnop Farms LLC",
        image: highLight1
    },
    {
        title: "Mark Hauschildt Estate",
        StateCity: "Gladboork, IA",
        dateTime: "March 14, 2023 - Mark Hauschildt Estate",
        image: highLight2
    },
    {
        title: "Cory Connelly Retirement",
        StateCity: "Tescott, KS",
        dateTime: "March 16, 2023 - Cory Connelly Retirement",
        image: highLight3
    },
    {
        title: "Cory Connelly Retirement",
        StateCity: "Tescott, KS",
        dateTime: "March 16, 2023 - Cory Connelly Retirement",
        image: highLight3
    }
]

export const lotList =[
    {
        lotNo: "Lot#1",
        name: "Portable Radiator (CP0560)",
        companyName: "Brunswick, MO 65236",
        auctionBoard: "Enters Live Auction Board",
        dateTime: "March 21, 2023 | 10:00 AM - 10:05 AM CDT",
        bidNo: "7 Bids",
        titleHighBid:"HIGHEST BID",
        amountHighBid:"$600",
        user:" rr1box121",
        image:up1
    },
    {
        lotNo: "Lot#2",
        name: "Portable Radiator (CP0560)",
        companyName: "Brunswick, MO 65236",
        auctionBoard: "Enters Live Auction Board",
        dateTime: "March 27, 2023 | 11:00 AM - 11:05 AM CDT",
        bidNo: "10 Bids",
        titleHighBid:"HIGHEST BID",
        amountHighBid:"$800",
        user:" rr1box121",
        image:up1
    }
]
export const lotTimeLine =[
    {
        lotNo: "Lot#1",
        name: "Portable Radiator (CP0560)",
        companyName: "Brunswick, MO 65236",
        auctionBoard: "Enters Live Auction Board",
        dateTime: "March 21, 2023 | 10:00 AM - 10:05 AM CDT",
        bidNo: "7 Bids",
        titleHighBid:"HIGHEST BID",
        amountHighBid:"$600",
        user:" rr1box121",
        image:up1
    },
    {
        lotNo: "Lot#2",
        name: "Portable Radiator (CP0560)",
        companyName: "Brunswick, MO 65236",
        auctionBoard: "Enters Live Auction Board",
        dateTime: "March 27, 2023 | 11:00 AM - 11:05 AM CDT",
        bidNo: "10 Bids",
        titleHighBid:"HIGHEST BID",
        amountHighBid:"$800",
        user:" rr1box121",
        image:up1
    }
]
export const FrequentlyAskedQuestions = [
    {
        question : "Do I Have to Register for every Auction?",
        answerStrong: "This is the first item's accordion body.",
        answerNormal: "It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the",
        andCode:".accordion-body",
        afterCodeText:", though the transition does limit overflow."
    },
    {
        question : "How does placing a MAXIMUM BID work?",
        answerStrong: "This is the second item's accordion body.",
        answerNormal: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the",
        andCode:".accordion-body",
        afterCodeText:", though the transition does limit overflow."
    },
    {
        question : "Can I place bids on behalf of another buyer?",
        answerStrong: "This is the third item's accordion body.",
        answerNormal: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the",
        andCode:".accordion-body",
        afterCodeText:", though the transition does limit overflow."
    },
    {
        question : "How long do I have to pay for my items?",
        answerStrong: "This is the four item's accordion body.",
        answerNormal: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the",
        andCode:".accordion-body",
        afterCodeText:", though the transition does limit overflow."
    },
    {
        question : "Is there a bidding extension?",
        answerStrong: "This is the fifth item's accordion body.",
        answerNormal: "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the",
        andCode:".accordion-body",
        afterCodeText:", though the transition does limit overflow."
    }
]