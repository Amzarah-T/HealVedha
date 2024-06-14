import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader, Input, Spinner } from "@nextui-org/react";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { Logo } from "@/components/icons";
import CarrosalView from "@/components/carrosal";
import IsVisibleComponent from "@/components/isVisibleComponent";
import Image from "next/image";
import image from '@/public/images/common.jpeg';
import axios from "axios";

async function getData() {
  const res = await axios.get('/api/welcome');
 
  console.log('....response', res)
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData()
  console.log('printin data', data);

  return (
    <main className="">
      <div className="text-foreground pop-up">
        <CarrosalView />
      </div>
      <div className="flex justify-center items-center h-svh bg-slate-100" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/001/966/000/large_2x/blurred-leaves-background-free-photo.jpg)', backgroundSize: 'cover' }}>
        <div className="">
          <IsVisibleComponent>
            <div className="text-3xl text-center p-5">Important!</div>
            <div className="pop-left p-5 bg-green-800/45 flex justify-center items-center rounded-md text-light text-white" style={{ height: 400, width: 500 }}>
              <div className="text-center">
                <p>
                  Herbs must be carefully selected and used according to specific guidelines to ensure safety and efficacy. The therapeutic potency of these plants is deeply influenced by factors such as climatic change, timing and method of collection, which are crucial for maintaining their active components. Integrating traditional knowledge with scientific validation underscores the importance of these practices in achieving optimal health benefits. Therefore, it is essential to use these herbs in an informed and guided manner to avoid potential health risks.
                </p>
              </div>
            </div>
          </IsVisibleComponent>
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center p-24">
        <div>
          <h1 className=" text-3xl font-bold text-center">Herbal Tips</h1>
          <div className="flex container p-10" style={{ width: 'calc(100vw - 10px)', overflowX: 'scroll' }}>
            <div className="mx-5" style={{ minWidth: 300 }}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={image}
                    width={270}
                    height={270}
                  />
                </CardBody>
              </Card>
            </div>

            <div className="mx-5" style={{ minWidth: 300 }}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={image}
                    width={270}
                    height={270}
                  />
                </CardBody>
              </Card>
            </div>

            <div className="mx-5" style={{ minWidth: 300 }}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={image}
                    width={270}
                    height={270}
                  />
                </CardBody>
              </Card>
            </div>

            <div className="mx-5" style={{ minWidth: 300 }}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={image}
                    width={270}
                    height={270}
                  />
                </CardBody>
              </Card>
            </div>
            <div className="mx-5" style={{ minWidth: 300 }}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={image}
                    width={270}
                    height={270}
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        <div>
          <h1 className=" text-3xl font-bold p-5 text-center">Why choose Ayurvedha?</h1>
          <div className="flex grid-cols-2 flex-wrap gap-3 justify-center">
            <div className="mx-5" style={{ minWidth: 300 }}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={image}
                    width={270}
                    height={270}
                  />
                </CardBody>
              </Card>
            </div>
            <div className="mx-5" style={{ minWidth: 300 }}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={image}
                    width={270}
                    height={270}
                  />
                </CardBody>
              </Card>
            </div>
            <div className="mx-5" style={{ minWidth: 300 }}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={image}
                    width={270}
                    height={270}
                  />
                </CardBody>
              </Card>
            </div>
            <div className="mx-5" style={{ minWidth: 300 }}>
              <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={image}
                    width={270}
                    height={270}
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
