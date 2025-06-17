import SedansIcon from '../assets/images/icon-sedans.svg';
import SUVsIcon from '../assets/images/icon-suvs.svg';
import LuxuryIcon from '../assets/images/icon-luxury.svg';


export interface CardDataFormate {
    id: number,
    icon: string,
    title: string,
    paragraph: string,
    btnText: string,
    StyleMode: string
}


export const CardData:CardDataFormate[] = [
    {
      id: 0,
      icon:  SedansIcon ,
      title: 'Sedans',
      paragraph: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      btnText: 'Learn more',
      StyleMode: 'bg-Bright-orange w-[330px] h-[445px]  lg:w-[311px] lg:h-[500px] '
    },
    {
      id: 1,
      icon: SUVsIcon,
      title: 'SUVs',
      paragraph: ' Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      btnText: 'Learn more',
      StyleMode: 'bg-Dark-cyan w-[330px] h-[445px]  lg:w-[311px] lg:h-[500px]'
    },
    {
      id: 2,
      icon: LuxuryIcon,
      title: 'Luxury',
      paragraph: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
     btnText: 'Learn more',
      StyleMode: 'bg-dark-cyan w-[330px] h-[445px]  lg:w-[311px] lg:h-[500px]'
    }
]

