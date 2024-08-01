import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

import onlineStore from '@/public/images/online-store.png';
import ayush from '@/public/images/stores/ayush.webp';
import gampaha from '@/public/images/stores/gampaha.png';
import herbal from '@/public/images/stores/herbal.lk.jpg';
import himalaya from '@/public/images/stores/himalaya.jpg';
import osuhala from '@/public/images/stores/osuhala.png';
import sanjeewanie from '@/public/images/stores/sanjeewanie.png';
import SDC from '@/public/images/stores/SDC.png';
import siddapella from '@/public/images/stores/siddapella.jpg';
import spaceylon from '@/public/images/stores/spaceylon.png';
import swadeshi from '@/public/images/stores/swadeshi.png';

import ayrvedaparagon from '@/public/images/hotels/ayrvedaparagon.webp';
//import ayulanka from '@/public/images/hotels/ayulanka.png';
import barberynreef from '@/public/images/hotels/barberynreef.webp';
import heritance from '@/public/images/hotels/heritance.webp';
import isolabella from '@/public/images/hotels/isolabella.jpg';
import Karunalarala from '@/public/images/hotels/Karunalarala.jpg';
import LankaAyurveda from '@/public/images/hotels/LankaAyurveda.webp';
import plamgarden from '@/public/images/hotels/plamgarden.jpg';
import siddhalepa from '@/public/images/hotels/siddhalepa.jpg';



export default function ExplorePage() {
  const stores = [
    {
      id: 1,
      image: ayush,
      link: 'https://ayush.lk/',
      alt: 'ayush',
      description: "Ayush"
    },
    {
      id: 2,
      image: gampaha,
      link: 'https://www.gampahawickramaratchi.lk/',
      alt: 'gampaha',
      description: "Gampaha Wickramaratchi"
    },
    {
      id: 3,
      image: herbal,
      link: 'https://herbal.lk/',
      alt: 'https://herbal.lk/',
      description: "Herbal.lk"
    },
    {
      id: 4,
      image: himalaya,
      link: 'https://himalayawellness.in/',
      alt: 'https://himalayawellness.in/',
      description: "Himalaya"
    },
    {
      id: 5,
      image: osuhala,
      link: 'https://osuhala.lk/',
      alt: 'https://osuhala.lk/',
      description: "Osuhala"
    },
    {
      id: 6,
      image: sanjeewanie,
      link: 'https://local.sanjeewanieayurveda.com/',
      alt: 'https://local.sanjeewanieayurveda.com/',
      description: "Sanjeewani Ayurveda"
    },
    {
      id: 7,
      image: SDC,
      link: 'https://sladc.lk/en/shop/',
      alt: 'https://sladc.lk/en/shop/',
      description: "SriLanka Drug Coporation"
    },
    {
      id: 8,
      image: siddapella,
      link: 'https://siddhalepa.com/index.php/products',
      alt: 'https://siddhalepa.com/index.php/products',
      description: "Siddalepa"
    },
    {
      id: 9,
      image: spaceylon,
      link: 'https://lk.spaceylon.com/',
      alt: 'https://lk.spaceylon.com/',
      description: "Spa Ceylon"
    },
    {
      id: 10,
      image: swadeshi,
      link: 'https://swadeshiherbal.com/shop/',
      alt: 'https://swadeshiherbal.com/shop/',
      description: "Swadeshi"
    }
  ];

  const hotels = [
    {
      id: 1,
      image: ayrvedaparagon,
      link: 'https://www.paragonsrilanka.com/',
      alt: 'https://www.paragonsrilanka.com/',
      description: "The Ayurveda Paragon"
    },
   /* {
      id: 2,
      image: ayulanka,
      link: '',
      alt: 'ayulanka',
      description: "add descriptions if want"
    },*/
    {
      id: 3,
      image: barberynreef,
      link: 'https://www.barberynresorts.com/',
      alt: 'https://www.barberynresorts.com/',
      description: "Barberyn Ayurveda Resorts"
    },
    {
      id: 4,
      image: heritance,
      link: 'https://www.heritancehotels.com/ayurveda/?utm_source=google&utm_medium=organic&utm_campaign=ayurveda&utm_term=gbp',
      alt: 'https://www.heritancehotels.com/ayurveda/?utm_source=google&utm_medium=organic&utm_campaign=ayurveda&utm_term=gbp',
      description: "Heritance Hotels"
    },
    {
      id: 5,
      image: isolabella,
      link: 'https://www.isolabella-ayurveda.com/',
      alt: 'https://www.isolabella-ayurveda.com/',
      description: "Isolabella Ayurveda Resort"
    },
    {
      id: 6,
      image: Karunalarala,
      link: 'https://karunakarala.com/sparesort/',
      alt: 'https://karunakarala.com/sparesort/',
      description: "Karunakarala Ayurveda Resort"
    },
    {
      id: 7,
      image: LankaAyurveda,
      link: 'https://www.ayurveda-garden.de/',
      alt: 'https://www.ayurveda-garden.de/',
      description: "Ayurveda Garden"
    },
    {
      id: 8,
      image: plamgarden,
      link: 'https://palmgarden-resort.com/',
      alt: 'https://palmgarden-resort.com/',
      description: "Plam Garden Ayurveda"
    },
    {
      id: 9,
      image: siddhalepa,
      link: 'https://www.siddhaleparesort.com/',
      alt: 'https://www.siddhaleparesort.com/',
      description: "Siddalepha Ayurveda Hotels"
    }
  ];

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl text-white p-10 bg-green-600">Discover and connect with online stores through HealVedha</h1>
      </div>
      <div>
        {/* <h1 className="text-center text-3xl pt-10">Check Stores</h1> */}
        <div className="flex container pb-20 items-center pt-20" style={{ width: 'calc(100vw - 10px)', overflowX: 'scroll' }}>
          {
            stores.map(store => {
              return (
                <div key={store.id} className="mx-5" style={{ minWidth: 300 }}>
                  <Card className="py-4" style={{height:350}}>
                    <Link href={store.link} target='_blank'>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt={store.alt}
                          className="object-cover rounded-xl"
                          src={store.image}
                          width={270}
                          height={270}
                          style={{height: 270}}
                        />
                        <div className="text-center py-4">{store.description}</div>
                      </CardBody>
                    </Link>
                  </Card>
                </div>
              )
            })
          }
        </div>
      </div>

      <div>
        <h1 className="text-center text-4xl text-white p-10 bg-green-600">Connect with HealVedha for rejuvenating holidays at top Ayurvedic resorts and hotels</h1>
      </div>
      <div>
{/*      <h1 className="text-center text-3xl pt-10">Find a Holiday with a Hotel</h1> */}
        <div className="flex container pt-20 pb-20 items-center" style={{ width: 'calc(100vw - 10px)', overflowX: 'scroll' }}>
          {
            hotels.map(hotel => {
              return (
                <div key={hotel.id} className="mx-5" style={{ minWidth: 300 }}>
                  <Card className="py-4" style={{height:350}}>
                    <Link href={hotel.link} target='_blank'>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt={hotel.alt}
                          className="object-cover rounded-xl"
                          src={hotel.image}
                          width={270}
                          height={270}
                          style={{height:270}}
                        />
                        <div className="text-center py-4">{hotel.description}</div>
                      </CardBody>
                    </Link>
                  </Card>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* <Image src={onlineStore} alt="Store Image" /> */}
    </div>
  );
}
