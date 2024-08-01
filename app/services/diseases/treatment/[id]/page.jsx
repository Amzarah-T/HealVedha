'use client'

import { getImage } from "@/utils/validations";
import { Button, Card } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


export default function ServicesPage({ params }) {
    const [results, setResults] = useState([]);
    const [result, setResult] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const searchRef = useRef();

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const res = await fetch('http://localhost:3000/api/public/diseases/treatment?dist=' + params.id, { cache: 'no-store' })
        const data = await res.json();

        setResult(data.result);
        setResults(data.result);
        setFilteredData(data.result);
    }

    return (
        <div className="w-full ">
            <div className="text-left">
                <Link href={'/services/diseases'}><Button variant='ghost' color="primary" radius='sm'>{'< Back'}</Button></Link>
            </div>
            <div>
                <div className="text-left text-3xl py-4">Disease</div>

                <Card className="bg-green-600 text-white p-5">
                    <h1 className="text-3xl">{result.titleEn}</h1>
                    <h1 className="text-xl">{result.titleSn}</h1>
                    <h1 className="text-xl">{result.titleTm}</h1>
                </Card>
                {/* <div
                    className="h-64 bg-cover bg-center rounded-lg w-full mt-10"
                    style={{ backgroundImage: `url(${getImage(result.image)})` }}
                ></div> */}
                

                <div className="pt-10 container m-auto">
                    <div className="text-left text-3xl pb-4">Symptoms</div>
                    <ul className="space-y-4 flex flex-col">
                        {result.DiseaseSymptoms?.map((dataObject) => (
                            <li key={dataObject.id} className="p-6 bg-green-50 shadow-md min-w-64 flex-1">

                                <h2 className="text-2xl font-semibold my-2">{dataObject.descEn}</h2>
                                <p className="text-gray-700">{dataObject.descTm}</p>
                                <p className="text-gray-700">{dataObject.descSn}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-10 container m-auto">
                    <div className="text-left text-3xl pb-4">Treatments</div>
                    <ul className="space-y-4 flex flex-col">
                        {result.DiseaseTreatments?.map((dataObject) => (
                            <li key={dataObject.id} className="p-6 bg-green-50 shadow-md min-w-64 flex-1">

                                <h2 className="text-2xl font-semibold my-2">{dataObject.descEn}</h2>
                                <p className="text-gray-700">{dataObject.descTm}</p>
                                <p className="text-gray-700">{dataObject.descSn}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}