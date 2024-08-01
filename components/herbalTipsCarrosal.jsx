"use client"

import { Logo } from "./icons";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useRef, useState } from "react";
import Autoplay from 'embla-carousel-autoplay'
import IsVisibleComponent from "./isVisibleComponent";
import {useSession} from "next-auth/react";
import { Card, CardBody } from "@nextui-org/react";

const image1 = "https://images.thequint.com/thequint-fit%2F2019-04%2F3e191d19-c232-4c96-af2c-48ed5d32699d%2FiStock_669861852.jpg?rect=0%2C405%2C3863%2C2173&auto=format%2Ccompress&fmt=webp&width=440&w=1200"
const image2 = "https://www.ayurvedacollege.net/images/blogs/blog126.jpeg";
const image3 = "https://ronfieldsnutrition.co.uk/wp-content/uploads/2020/02/Ayurvedic-herb.jpg"

function HerbalTipsCarrosal() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const session = useSession();

    console.log('carrosal session', session);

    useEffect(() => {
        if (emblaApi) {
            emblaApi.slideNodes()
        }
    }, [emblaApi])
    return (
        <div>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container bg-green-800/45">
                    <div className="embla__slide flex justify-center items-center" style={{ width: '100%', height: '40vh' }} >
                        <IsVisibleComponent>
                            <div className="pop-right text-4xl align-center bg-green-800/45 p-10 text-white">
                            <div className="mx-5" style={{ minWidth: 300 }}>
                                <Card className="py-4">
                                    <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src={'/images/homepage/1.png'}
                                        width={270}
                                        height={270}
                                    />
                                    </CardBody>
                                </Card>
                                </div>
                            </div>
                        </IsVisibleComponent>
                    </div>
                    <div className="embla__slide flex justify-center items-center" style={{ width: '100%', height: '40vh' }} >
                        <IsVisibleComponent>
                            <div className="pop-right text-4xl align-center bg-green-800/45 p-10 text-white">
                            <div className="mx-5" style={{ minWidth: 300 }}>
                                <Card className="py-4">
                                    <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src={'/images/homepage/2.png'}
                                        width={270}
                                        height={270}
                                    />
                                    </CardBody>
                                </Card>
                                </div>
                            </div>
                        </IsVisibleComponent>
                    </div>
                    <div className="embla__slide flex justify-center items-center" style={{ width: '100%', height: '40vh' }} >
                        <IsVisibleComponent>
                            <div className="pop-right text-4xl align-center bg-green-800/45 p-10 text-white">
                            <div className="mx-5" style={{ minWidth: 300 }}>
                                <Card className="py-4">
                                    <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src={'/images/homepage/3.png'}
                                        width={270}
                                        height={270}
                                    />
                                    </CardBody>
                                </Card>
                                </div>
                            </div>
                        </IsVisibleComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HerbalTipsCarrosal;