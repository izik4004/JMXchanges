// import images
import LogoImg from '../src/assets/img/header/Vector.png';
import HeroImg from '../src/assets/img/hero/hero.png';
import OverviewProductImg from '../src/assets/img/overview/product.svg';
import FacebookImg from '../src/assets/img/overview/brands/facebook.svg';
import GoogleImg from '../src/assets/img/overview/brands/google.svg';
import CocaColaImg from '../src/assets/img/overview/brands/coca-cola.svg';
import LinkedInImg from '../src/assets/img/overview/brands/linkedin.svg';
import SamsungImg from '../src/assets/img/overview/brands/samsung.svg';
import Feature1Img from '../src/assets/img/files/person.png';
import Feature2Img from '../src/assets/img/files/identity.png';
import Feature3Img from '../src/assets/img/files/mobile.png';
import Feature4Img from '../src/assets/img/files/trading.png';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import CardIconImg1 from '../src/assets/img/files/data_encrypt.png';
import CardIconImg2 from '../src/assets/img/files/exchange.png';
import CardIconImg3 from '../src/assets/img/files/invite.png';
import Help1 from '../src/assets/img/files/chat.png';
import Help2 from '../src/assets/img/files/faq2.png';
import Help3 from '../src/assets/img/files/blog.png';
import AvatarImg1 from '../src/assets/img/testimonial/avatar1.png';
import AvatarImg2 from '../src/assets/img/testimonial/avatar2.png';
import AvatarImg3 from '../src/assets/img/testimonial/avatar3.png';
import AvatarImg4 from '../src/assets/img/testimonial/avatar4.png';
import AvatarImg5 from '../src/assets/img/testimonial/avatar5.png';
import CtaImg1 from '../src/assets/img/cta/image1.svg';
import CtaImg2 from '../src/assets/img/cta/image2.svg';
import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
import TwitterIcon from '../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../src/assets/img/copyright/linkedin.svg';

export const header = {
  logo: LogoImg,
  btnText: 'Get the app',
};

export const nav = [
  { name: 'Explore', href: '/' },
  { name: 'Developers', href: '/' },
  { name: 'Company', href: '/' }
];

export const hero = {
  title: 'Buy Cryptocurrency with zero stress',
  subtitle: 'The fastest way to buy and sell cryptocurrency everyday',
  btnText: 'Send a link',
  image: HeroImg,
};

export const heroItem = [
  { name: '$12 Billion', text: '24h trading volume on MJXchange' },
  { name: '$5 Million', text: 'Registered users who trust MJXchange' },
  { name: '200+', text: 'Cryptocurrencies listed' },
];

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      icon: FacebookImg,
      title: "Fund your account",
      text: "Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods"
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = [
  {
    title: 'Fund your account',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    image: Feature1Img,
  },
 {
    title: 'Verify your identity',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    image: Feature2Img,
  },
  {
    title: 'Mobile App',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    image: Feature3Img,
  },
  {
    title: 'Start Trading',
    subtitle:
    "You're good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Binance has to offer",
    image: Feature4Img,
  },
];

export const offers = [
  {
    title: "Advanced Data Encryption",
    text:
    "Your transaction data is secured via end-to-end encryption, ensuring that only you have access to your personal information.",
    image:CardIconImg1
  },
  {
    title: "MJXchange Earn",
    text:
    "Hodl your crypto asset and earn more.",
    image:CardIconImg2
  },
  {
    title: "Invite Friends",
    text:
    "Invite your friends with your account ID and enjoy commissions paid to your wallet instantly.",
    image:CardIconImg3
  }
]

export const services = [
  {
    title: "24/7 Chat Support",
    text:"Get 24/7 chat support with our friendly customer service agents at your service",
    image: Help1,
    link:"Chat now"

  },
  {
    title: "Faq",
    text:"View FAQs for detailed instructions on specific features.",
    image: Help2,
    link:"Learn more"

  },
  {
    title: "Blog",
    text:"Stay up to date with the latest stories and commentary.",
    image: Help3,
    link:"Learn more"

  },
];

export const testimonials = {
  title: 'We have millions of best wishers',
  clients: [
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg1,
      name: 'Cameron Williamson',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg2,
      name: 'Shirley Hand',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg3,
      name: 'Dr. Olivia Hansen',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg4,
      name: 'Aubrey Sanford',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg5,
      name: 'Terri Conroy',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: '20M+ downloaded from 32 different countries',
  subtitle: 'Try demo for 7 days with full features.',
  btnText: 'Try free demo',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/' },
    { name: 'Careers', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Blog', href: '/' },
  ],
  legal: [
    { name: 'Terms of use', href: '/' },
    { name: 'Terms of conditions', href: '/' },
    { name: 'Privacy policy', href: '/' },
    { name: 'Cookie policy', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Over 25000 people have subscribed',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Subscribe',
    smallText: 'We don’t sell your email and spam',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy & Terms',
    href: '/',
  },
  link2: {
    name: 'Contact us',
    href: '/',
  },
  copyText: 'Copyright @ 2022 xpence',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};
