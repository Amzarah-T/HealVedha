'use client'

import { useEffect, useRef, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { SearchIcon } from "@/components/icons";
import Link from "next/link";
import { getImage } from "@/utils/validations";
import Image from "next/image";
import herbImage from '@/public/images/herb.png';
import treatmentImage from '@/public/images/treatment.png';


export default function Page() {
    return (
        <div>
            <div className="flex min-h-screen flex-col items-center pt-10">
                {/* <h1 className="text-3xl py-5">Ayurwedic & Medical Plants</h1> */}
                <Image src={herbImage} alt="herbal banner" className="w-screen" />
                <div className="gap-4 flex flex-col p-10">
                    <p className="text-justify">Ayurveda understands health as a reflection of a man living in harmony with nature and disease arises when this harmony gets disturbed. In ancient times, rishis and sages believed in Ayurvedic herbs as the solution to cure several health problems and sickness. They conducted thorough studies and experimented with these herbs before arriving at any conclusion regarding the accuracy of the medicinal values of these herbs and their effectiveness in treating various ailments and diseases. Due to their natural Ayurvedic herbs are free of any side effects and thus enjoy a global appeal.</p>
                    <p className="text-justify">Herbs play a vital role in the Ayurvedic system, and a small herb is known to dissolve stones in the kidney, bladder and gallbladder easily and effectively. Apart from timely cure, Ayurvedic herbs are also known to provide permanent relief from a disease by removing the metabolic toxins from the body. Know more about the various Medicinal Plants and Their Uses.</p>
                    <Link href={'/services/herbs'}><Button color="primary">Find a Herb</Button></Link>
                </div>
                {/* <h1 className="text-3xl py-5">Ayurwedic Treatments</h1> */}
                <Image src={treatmentImage} alt="herbal banner" className="w-screen" />
                <div className="gap-4 flex flex-col p-10">
                    <p className="text-justify">Ayurvedic treatment is also called “Ayurvedic Healing”. It combines products which are mainly derived from plants, herbs and minerals followed by a well – balanced diet, exercise, and a healthy lifestyle. Unlike other methods of treatments, the ayurvedic treatments are targeted toward specific health problems. The treatments are specifically designed considering a human being’s physical, emotional and social wellbeing by balancing between all three of these elements.</p>
                    <p className="text-justify">Treatment in Ayurveda is a healing process which aims at getting rid of the disease, preventing its future occurrence and ensuring overall well-being. The treatment attacks the root cause of the problem as its objective is not just restoring health but also to create balance in the body. It is achieved by balancing the doshas which in turn eliminates toxins and strengths the digestive system thereby opening channels and rejuvenating the tissues.</p>
                    <Link href={'/services/diseases'}><Button color="primary">Find a Treatment</Button></Link>
                </div>
            </div>
        </div>
    );
}