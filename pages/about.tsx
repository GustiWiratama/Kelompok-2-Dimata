import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative">
      {/* Background image section */}
      <div className="relative w-full h-[50vh]">
        {" "}
        {/* Sesuaikan tinggi background */}
        <Image
          src="/about.png" // Pastikan gambar ini memiliki orientasi landscape
          alt="about Image"
          layout="fill" // Gambar memenuhi seluruh div
          objectFit="cover" // Menjaga proporsi gambar
          objectPosition="center" // Posisi tengah gambar
          quality={100} // Kualitas tinggi
          priority
        />
        {/* Navbar di bagian atas */}
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar />
        </div>
        {/* Teks "ABOUT US" di tengah background */}
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <h1 className="text-6xl text-white">ABOUT US</h1>
        </div>
      </div>

      {/* Section untuk Our Story */}
      <div className="gap-20 justify-center items-center relative z-20 bg-white text-black p-10 flex flex-row">
        <div className="w-[20%]">
          <Image
            src="/image-10.png" // Pastikan gambar ini memiliki orientasi landscape
            alt="about Image"
            width={2000}
            height={1000}
            quality={100} // Kualitas tinggi
            priority
          />
        </div>
        <hr />
        <div className="flex flex-col max-w-3xl">
          <p className="text-2xl text-blue-700">OUR STORY</p>
          <p className="text-5xl">
            <b>Turning Vision Into Reality</b>
          </p>
          <p>
            Dimata IT Solutions was founded in 2002 with a vision to develop
            smart information systems using the latest technologies. We have
            successfully delivered software solutions for various industries
          </p>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/image-17.png" // Pastikan gambar ini memiliki orientasi landscape
          alt="about Image"
          width={2000}
          height={1000}
          quality={100} // Kualitas tinggi
          priority
        />
        <div className="relative">
          <div>sadfsadf</div>
          <div>sdfsdfd</div>
        </div>
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
