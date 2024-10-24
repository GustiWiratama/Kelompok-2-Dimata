import Image from "next/image";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

export default function detailProduct() {
  return (
    <div className="relative">
      <title>ProChain</title>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="relative z-10 p-20 text-white text-center">
        <h1 className="text-6xl font-bold">PROCHAIN</h1>
      </div>
      <div className="absolute inset-0 z-1">
        <Image
          src="/DetailProduct.png"
          alt="Detail Content"
          width={2000}
          height={1000}
          quality={100}
          priority
          className=""
        />
      </div>
      <div className="gap-20 justify-center items-center relative z-20 bg-white text-black p-10 flex flex-row">
        <div className="w-[70%] h-[70%]">
          <Image
            src="/about product.png"
            alt="about product"
            width={2000}
            height={1000}
          />
        </div>
        <hr />
        <div className="flex flex-col max-w-3xl">
          <hr className="w-9 bg-indigo-900 h-0.5 " />
          <span className="text-indigo-900 font-medium ">ABOUT PRODUCT</span>
          <h1 className="text-4xl font-bold font-sans ">What Is ProChain?</h1>
          <p className="w-full text-sm">
            ProChain is a powerful, web-based inventory and sales management
            platform designed to streamline your operations and drive business
            growth. With real-time tracking, automated workflows, and advanced
            reporting, ProChain helps you manage your stock, optimize sales, and
            stay ahead of the competition.
          </p>
          <button className="bg-[#2D3E98] text-white py-2 px-6 hover:bg-blue-700 transition w-[20%]">
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
        <div>
          <img src="/ai icon.png" alt="ai icon" className="" />
          <p className="font-bold">Expertise and Innovation</p>
          <p>
            Our team comprises industry experts who leverage the latest
            technologies to create innovative software solutions tailored to
            your needs.
          </p>
        </div>
        <div>
          <img src="/ai icon.png" alt="ai icon" className="" />
          <p className="font-bold">Expertise and Innovation</p>
          <p>
            Our team comprises industry experts who leverage the latest
            technologies to create innovative software solutions tailored to
            your needs.
          </p>
        </div>
        <div>
          <img src="/ai icon.png" alt="ai icon" className="" />
          <p className="font-bold">Expertise and Innovation</p>
          <p>
            Our team comprises industry experts who leverage the latest
            technologies to create innovative software solutions tailored to
            your needs.
          </p>
        </div>
        <div>
          <img src="/ai icon.png" alt="ai icon" className="" />
          <p className="font-bold">Expertise and Innovation</p>
          <p>
            Our team comprises industry experts who leverage the latest
            technologies to create innovative software solutions tailored to
            your needs.
          </p>
        </div>
        <div>
          <img src="/ai icon.png" alt="ai icon" className="" />
          <p className="font-bold">Expertise and Innovation</p>
          <p>
            Our team comprises industry experts who leverage the latest
            technologies to create innovative software solutions tailored to
            your needs.
          </p>
        </div>
        <div>
          <img src="/ai icon.png" alt="ai icon" className="" />
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
