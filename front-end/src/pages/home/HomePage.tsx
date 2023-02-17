import {Hero} from "../../components/Hero/Hero";
import {FeatureList} from "../../components/Features/FeatureList/FeatureList";
import {FeatureItemProps} from "../../components/Features/FeatureItem/FeatureItem";

const features: FeatureItemProps[] = [
    {
        icon: {
            name: 'chat',
            filename: 'icon-chat.png'
        },
        title: 'You are our #1 priority',
        children: [
            'Need to talk to a representative?',
            'You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
        ].join(' '),
    },
    {
        icon: {
            name: 'money',
            filename: 'icon-money.png',
        },
        title: 'More savings means higher rates',
        children: 'The more you save with us, the higher your interest rate will be!',
    },
    {
        icon: {
            name: 'security',
            filename: 'icon-security.png',
        },
        title: 'Security you can trust',
        children: 'We use top of the line encryption to make sure your data and money is always safe.',
    },
];

function HomePage() {
    return (
        <main className="main">
            <Hero />
            <FeatureList features={features} />
        </main>
    );
}

export default HomePage;
