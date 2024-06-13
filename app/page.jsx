import { title } from "@/components/primitives";
import { Input, Spinner } from "@nextui-org/react";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { Logo } from "@/components/icons";
import CarrosalView from "@/components/carrosal";
import IsVisibleComponent from "@/components/isVisibleComponent";

export default function Home() {
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
      <div className="flex min-h-screen flex-col items-center justify-between p-24">

      </div>
    </main>
  );
}
