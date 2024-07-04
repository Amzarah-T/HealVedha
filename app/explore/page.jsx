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


export default function ExplorePage() {
  const stores = [
    {
      id: 1,
      image: ayush,
      link: 'https://ayush.lk/',
      alt: 'ayush'
    },
    {
      id: 2,
      image: gampaha,
      link: 'https://www.gampahawickramaratchi.lk/',
      alt: 'gampaha'
    },
    {
      id: 3,
      image: herbal,
      link: 'https://herbal.lk/',
      alt: 'https://herbal.lk/'
    },
    {
      id: 4,
      image: himalaya,
      link: 'https://himalayawellness.in/',
      alt: 'https://himalayawellness.in/'
    },
    {
      id: 5,
      image: osuhala,
      link: 'https://osuhala.lk/',
      alt: 'https://osuhala.lk/'
    },
    {
      id: 6,
      image: sanjeewanie,
      link: 'https://local.sanjeewanieayurveda.com/',
      alt: 'https://local.sanjeewanieayurveda.com/'
    },
    {
      id: 7,
      image: SDC,
      link: 'https://sladc.lk/en/shop/',
      alt: 'https://sladc.lk/en/shop/'
    },
    {
      id: 8,
      image: siddapella,
      link: 'https://siddhalepa.com/index.php/products',
      alt: 'https://siddhalepa.com/index.php/products'
    },
    {
      id: 9,
      image: spaceylon,
      link: 'https://lk.spaceylon.com/',
      alt: 'https://lk.spaceylon.com/'
    },
    {
      id: 10,
      image: swadeshi,
      link: 'https://swadeshiherbal.com/shop/',
      alt: 'https://swadeshiherbal.com/shop/'
    }
  ];

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl text-white p-10 bg-cyan-600">Discover and connect with online stores through HealVedha</h1>
      </div>
      <div>
        <h1 className="text-center text-3xl p-10">Check Stores</h1>
          <div className="flex container p-10 items-center" style={{ width: 'calc(100vw - 10px)', overflowX: 'scroll' }}>
          {
            stores.map(store => {
              return (
                <div key={store.id} className="mx-5" style={{ minWidth: 300 }}>
                  <Card className="py-4">
                    <Link href={store.link} target='_blank'>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt={store.alt}
                          className="object-cover rounded-xl"
                          src={store.image}
                          width={270}
                          height={270}
                        />
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
