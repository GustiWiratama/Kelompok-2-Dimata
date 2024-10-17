import Image from "next/image";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import SubNavbar from "./component/subNavbar";
import { title } from "process";

export default function Product() {
  const cards = [
    {
      title: "ProChain",
      description: "Asset Management System",
      image: "/Content.png",
    },
    {
      title: "ProChain",
      description: "Asset Management System",
      image: "/Content.png",
    },
    {
      title: "ProChain",
      description: "Asset Management System",
      image: "/Content.png",
    },
    {
      title: "ProChain",
      description: "Asset Management System",
      image: "/Content.png",
    },
    {
      title: "ProChain",
      description: "Asset Management System",
      image: "/Content.png",
    },
    {
      title: "ProChain",
      description: "Asset Management System",
      image: "/Content.png",
    },
    {
      title: "ProChain",
      description: "Asset Management System",
      image: "/Content.png",
    },
    {
      title: "ProChain",
      description: "Asset Management System",
      image: "/Content.png",
    },
  ];
  return (
    <div className="relative">
      <title>Products</title>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="relative z-10 p-20 text-white text-center">
        <h1 className="text-6xl">PRODUCTS</h1>
      </div>
      <div className="absolute inset-0 z-1">
        <Image
          src="/Products.png"
          alt="Product Picture"
          width={2000}
          height={1000}
          priority
          className=""
        ></Image>
      </div>
      <div className=" relative  mt-72 flex flex-col text-center items-center">
        <div className="font-bold text-4xl mb-4">
          Empowering your succes with every product
        </div>
        <p className="w-4/6 text-slate-400">
          Discover our range of innovative products designed to meet your needs.
        </p>
        <div>
          <SubNavbar />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="">
              <Image
                src={card.image}
                alt={card.title}
                width={350}
                height={150}
                className="w-full h-50 object-cover"
              ></Image>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
