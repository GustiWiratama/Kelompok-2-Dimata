import Image from "next/image";
import Footer from "./component/footer";
import Navbar from "./component/navbar";

export default function detailProduct() {
  return (
    <div className="relative">
      <div className="relative w-full h-[50vh]">
        <Image
          src="/detail_product.svg"
          alt="Detail Content"
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
          <h1 className="text-5xl font-semibold text-white mt-10">PROCHAIN</h1>
        </div>
      </div>
      <div className="gap-20 justify-center items-center relative  bg-white text-black p-10 flex flex-row">
        <div className="ml-20 mt-28">
          <Image
            src="/Image about product.svg"
            alt="about product"
            width={3000}
            height={1500}
            quality={100}
            className=""
          />
        </div>
        <hr />
        <div className="flex flex-col max-w-3xl space-y-4 m-16 p-16">
          <hr className="w-9 bg-indigo-900 h-0.5" />
          <span className="text-indigo-900 font-medium tracking-wide">
            ABOUT PRODUCT
          </span>
          <h1 className="text-4xl font-bold font-sans">What Is ProChain?</h1>
          <p className="w-full text-sm mr-20 pr-24">
            ProChain is a powerful, web-based inventory and sales management
            platform designed to streamline your operations and drive business
            growth. With real-time tracking, automated workflows, and advanced
            reporting, ProChain helps you manage your stock, optimize sales, and
            stay ahead of the competition.
          </p>
          <button className="bg-[#2D3E98] text-white py-2 px-6 hover:bg-blue-700 transition w-[40%]  mt-5">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col m-32 z-30 justify-center items-center">
        <hr className="w-16 bg-indigo-900 h-0.5 " />
        <p className="text-indigo-900 font-medium ">BENEFITS PRODUCT</p>
        <h1 className="text-4xl font-bold font-sans ">
          How Our Product Helps You
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 m-20">
        <div className="mb-2">
          <img
            src="/hugeicons_ai-innovation-01.svg"
            alt="ai icon"
            className=""
          />
          <br />
          <p className="font-bold">Expertise and Innovation</p>
          <p>
            Our team comprises industry experts who leverage the latest
            technologies to create innovative software solutions tailored to
            your needs.
          </p>
        </div>
        <div className="mb-8">
          <img
            src="/hugeicons_ai-innovation-01.svg"
            alt="ai icon"
            className=""
          />
          <br />
          <p className="font-bold">Expertise and Innovation</p>
          <p>
            Our team comprises industry experts who leverage the latest
            technologies to create innovative software solutions tailored to
            your needs.
          </p>
        </div>
        <div className="mb-8">
          <img
            src="/hugeicons_ai-innovation-01.svg"
            alt="ai icon"
            className=""
          />
          <br />
          <p className="font-bold">Expertise and Innovation</p>
          <p>
            Our team comprises industry experts who leverage the latest
            technologies to create innovative software solutions tailored to
            your needs.
          </p>
        </div>
        <div>
          <img
            src="/hugeicons_ai-innovation-01.svg"
            alt="ai icon"
            className=""
          />
          <br />
          <p className="font-bold">Expertise and Innovation</p>
          <p>
            Our team comprises industry experts who leverage the latest
            technologies to create innovative software solutions tailored to
            your needs.
          </p>
        </div>
        <div>
          <img
            src="/hugeicons_ai-innovation-01.svg"
            alt="ai icon"
            className=""
          />
          <br />
          <p className="font-bold">Expertise and Innovation</p>
          <p>
            Our team comprises industry experts who leverage the latest
            technologies to create innovative software solutions tailored to
            your needs.
          </p>
        </div>
        <div>
          <img
            src="/hugeicons_ai-innovation-01.svg"
            alt="ai icon"
            className=""
          />
          <br />
          <p className="font-bold">Expertise and Innovation</p>
          <p>
            Our team comprises industry experts who leverage the latest
            technologies to create innovative software solutions tailored to
            your needs.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
