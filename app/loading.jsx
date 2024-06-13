import { Spinner } from "@nextui-org/react";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="flex w-screen h-screen justify-center items-center"><Spinner size="lg" color="success" /></div>

}