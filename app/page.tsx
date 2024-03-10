import Image from "next/image";
import ThreeDCardDemo from "./components/ThreeD";
import { HeroParallaxDemo } from "./components/Parallax";
import { HeroParallaxDemo2 } from "./components/parallax2";
import PickleSweet from "./components/CartItems";
import { itemdata } from "./assets/ItemData";


export default function Home() {
  const data = itemdata;
  return (
    <>
      <ThreeDCardDemo />
      <HeroParallaxDemo />
      <HeroParallaxDemo2 />
      <div className='grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-5 mt-6 min-h-full'>
        {data?.map((itemdata) => (
          <PickleSweet item={itemdata} />
        ))}
      </div>
    </>
  );
}
