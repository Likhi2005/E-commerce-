import logo from './logo.webp'
import hero from './hero_img.jpg'
import stripeLogo from './StripeLogo.jpg'
import razorpay from './razorpay.webp'
import contactUs from './contactUs.jpg'

import p_img1 from './p_img1.webp'
import p_img2 from './p_img2.jpeg'
import p_img3 from './p_img3.webp'
import p_img4 from './p_img4.avif'
import p_img5 from './p_img5.avif'


export const assets={
    logo,
    hero,
    stripeLogo,
    razorpay,
    contactUs,
}

export const products=[

    {
        _id: 1,
        name: 'Women Chudidhar',
        description: 'A lightWeight Coton',
        price: 200,
        image: [hero,p_img1,p_img2,p_img3],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 12345788,
        bestSeller: true

    },
    {
        _id: 2,
        name: 'Cassandra Petite Cut Out Plisse Midi',
        description: 'Lightweight plisse fabrication woven with metallic fibres',
        price: 300,
        image: [p_img1],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 12345788,
        bestSeller: true

    },
    {
        _id: 3,
        name: 'Levi\'S Men\'s Chino Jogger',
        description: 'Bewakoof Green Regular Fit Joggers',
        price: 100,
        image: [p_img3],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L"],
        date: 12345788,
        bestSeller: true

    },
    {
        _id: 4,
        name: 'Denim Jacket',
        description: 'lightweight to look classy during spring',
        price: 250,
        image: [p_img2],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 12345788,
        bestSeller: true

    },
    {
        _id: 5,
        name: 'Girls Baby Pink Embroidered Dress',
        description: 'A wonderful mix of style and comfort, this baby pink sleeveless dress from BIBA Girls will be an apt inclusion to your little one\'s wardrobe',
        price: 250,
        image: [p_img4],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 12345788,
        bestSeller: true

    },
    {
        _id: 6,
        name: 'Nap Chief Blue Printed Relaxed Fit T-Shirt&Joggers',
        description: 'Make your little one step out in style with this PRODUCT TYPE from Nap Chief. It combines a playful design that\'s perfect for active kids.It adds a touch of charm to your child\'s wardrobe. Easy to care for and crafted for durability, it\'s a must- have for every parent seeking both practicality and style for their child.',
        price: 250,
        image: [p_img5],
        category: "Kids",
        subCategory: "Summerwear",
        sizes: ["S", "M", "L"],
        date: 12345788,
        bestSeller: true

    }
]