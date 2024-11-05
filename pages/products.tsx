import Image from "next/image";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import SubNavbar from "./component/subNavbar";
import { title } from "process";

export default function Product() {
  const cards = [
    {
      title: "ProChain",
      link: "/detail_product",
      image: "/Content1.png",
    },
    {
      title: "ProChain",
      link: "/detail_product",
      image: "/Content1.png",
    },
    {
      title: "ProChain",
      link: "/detail_product",
      image: "/Content1.png",
    },
    {
      title: "ProChain",
      link: "/detail_product",
      image: "/Content1.png",
    },
    {
      title: "ProChain",
      link: "/detail_product",
      image: "/Content1.png",
    },
    {
      title: "ProChain",
      link: "/detail_product",
      image: "/Content1.png",
    },
    {
      title: "ProChain",
      link: "/detail_product",
      image: "/Content1.png",
    },
    {
      title: "ProChain",
      link: "/detail_product",
      image: "/Content1.png",
    },
  ];
  return (
    <div className="relative">
      <div className="relative w-full h-[50vh]">
        <Image
          src="/Products.png"
          alt="Product Picture"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
          className=""
        />
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar />
        </div>
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <h1 className="text-6xl text-white font-semibold mt-10">PRODUCT</h1>
        </div>
      </div>
      <div className=" relative mt-40 flex flex-col text-center items-center">
        <div className="font-bold text-4xl mb-4">
          Empowering your succes with every product
        </div>
        <p className="w-4/6 text-gray-700">
          Discover our range of innovative products designed to meet your needs.
        </p>
        <div className="mt-10">
          <SubNavbar />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pr-12 pl-12 pt-12 pb-12 mt-12 mb-12 ml-12 mr-12">
        {cards.map((card, index) => (
          <div key={index} className="w-full">
            <a href={card.link} className="block">
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={150}
                quality={100}
                className="w-full h-[50vh]"
              />
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
