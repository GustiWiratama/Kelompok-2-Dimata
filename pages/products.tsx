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
      link: "/about_product",
      image: "/Content1.png",
    },
  ];
  return (
    <div className="relative">
      <title>Products</title>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="relative z-10 p-20 text-white text-center">
        <h1 className="text-6xl font-bold">PRODUCTS</h1>
      </div>
      <div className="absolute inset-0 z-1">
        <Image
          src="/Products.png"
          alt="Product Picture"
          width={2000}
          height={1000}
          quality={100}
          priority
          className=""
        />
      </div>
      <div className=" relative  mt-72 flex flex-col text-center items-center">
        <div className="font-bold text-4xl mb-4">
          Empowering your succes with every product
        </div>
        <p className="w-4/6 text-gray-700">
          Discover our range of innovative products designed to meet your needs.
        </p>
        <div>
          <SubNavbar />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="">
              <a href={card.link} className="block">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={200}
                  quality={100}
                  className="w-fit"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
