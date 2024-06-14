import Image from "next/image";
import image from '@/public/images/common/dict.jpg'
export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-foreground text-3xl">Services</h1>
      <div className="flex min-h-screen flex-col items-center p-24">
        <Image src={image} className="w-full h-full" alt="Dict" />
      </div>
    </div>
  );
}
