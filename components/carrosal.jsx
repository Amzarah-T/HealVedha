"use client"

import { Logo } from "./icons";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useRef, useState } from "react";
import Autoplay from 'embla-carousel-autoplay'
import IsVisibleComponent from "./isVisibleComponent";
import {useSession} from "next-auth/react";

const image1 = "https://images.thequint.com/thequint-fit%2F2019-04%2F3e191d19-c232-4c96-af2c-48ed5d32699d%2FiStock_669861852.jpg?rect=0%2C405%2C3863%2C2173&auto=format%2Ccompress&fmt=webp&width=440&w=1200"
const image2 = "https://www.ayurvedacollege.net/images/blogs/blog126.jpeg";
const image3 = "https://ronfieldsnutrition.co.uk/wp-content/uploads/2020/02/Ayurvedic-herb.jpg"

function CarrosalView() {
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
                <div className="embla__container">
                    <div className="embla__slide flex justify-center items-center" style={{ width: '100%', height: '60vh', backgroundSize: 'cover', backgroundImage: `url(${image1})` }} >
                        <IsVisibleComponent>
                            <div className="pop-up text-4xl align-center bg-green-800/45 p-10 text-white">Welcome to Heal Vedha</div>
                        </IsVisibleComponent>
                    </div>
                    <div className="embla__slide">
                            <div className="flex justify-center bg-slate-100 items-center" style={{ width: '100%', height: '60vh' }} >
                                <IsVisibleComponent>
                                    <div className="pop-up"><Logo size={400} /></div>
                                </IsVisibleComponent>
                            </div>
                    </div>
                    <div className="embla__slide flex justify-center items-center" style={{ width: '100%', height: '60vh', backgroundSize: 'cover', backgroundImage: `url(${image2})` }} >
                        <IsVisibleComponent>
                            <div className={`pop-up text-4xl align-center bg-green-800/45 p-10 text-white`}>Best Herbal Services</div>
                        </IsVisibleComponent> 
                    </div>
                    <div className="embla__slide flex justify-center items-center" style={{ width: '100%', height: '60vh', backgroundSize: 'cover', backgroundImage: `url(${image3})` }} >
                        <IsVisibleComponent>
                            <div className="pop-up text-4xl align-center bg-green-800/45 p-10 text-white">Herbal Dictionaries and Diseases and Treatements</div>
                        </IsVisibleComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarrosalView;