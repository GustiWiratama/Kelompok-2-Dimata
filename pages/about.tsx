import { useState } from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Image from "next/image";

export default function About() {
  const profile = [
    {
      name: "John Doe",
      potition: "director",
      image: "/about/image-20.png",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/about/image-20.png",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/about/image-20.png",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/about/image-20.png",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/about/Xiangling.jpg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/about/Hu-Tao.jpg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/about/Kequing.jpg",
    },
    {
      name: "John Doe",
      potition: "director",
      image: "/about/Chiori.jpg",
    },
  ];

  // State untuk mengatur posisi slide saat ini
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk mengatur index ketika tombol next di klik
  const handleNext = () => {
    if (currentIndex < profile.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Fungsi untuk mengatur index ketika tombol prev di klik
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative min-h-screen flex-col flex-grow">
      {/* Background image section */}
      <div className="relative w-full h-[50vh] ">
        <Image
          src="/about/about.png"
          alt="about Image"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
          priority
        />

        {/* Navbar di bagian atas */}
        <div className="absolute top-0 left-0 right-0 z-20 ">
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
            src="/about/about-picture.png"
            alt="about Image"
            width={2000}
            height={1000}
            quality={100}
            priority
          />
        </div>
        <hr />
        <div className="flex flex-col max-w-3xl">
          <hr className="w-9 bg-indigo-900 h-0.5 " />
          <span className="text-indigo-900 font-medium ">OUR STORY</span>
          <h1 className="text-4xl font-bold font-sans ">
            Turning visions into reality.
          </h1>
          <p className="w-full text-sm">
            Dimata IT Solutions was founded in 2002 with a vision to develop
            smart information systems using the latest technologies. We have
            successfully delivered software solutions for various industries.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col text-center items-center">
        <Image
          src="/about/image-17.png"
          alt="about Image"
          width={2000}
          height={1000}
          quality={100}
          priority
        />
        <div className="absolute m-20 z-30 flex flex-col justify-center text-center">
          <hr className=" text-white w-16 h-0.5 my-1 mx-auto" />
          <h1 className=" text-white text-2xl">Vision and Mission</h1>
        </div>
        <div className="absolute top-10 left-0 z-30 w-full h-full flex justify-center items-center">
          <div className="absolute left-0 z-30 w-full h-full flex justify-center items-center gap-10">
            <div className=" w-1/3 h-1/2 bg-white text-center justify-center p-4">
              <p>
                <br />
                <b className="text-5xl">VISION</b>
                <hr className=" w-72 bg-indigo-900 h-1 my-4 mx-auto" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  sint nisi perferendis adipisci doloribus laudantium nihil
                  facere alias molestias, assumenda omnis tenetur quasi
                  molestiae quibusdam sunt soluta. Ut, aperiam nostrum.
                </p>
              </p>
            </div>
            <div className="w-1/3 h-1/2 bg-white text-center justify-center p-4">
              <p>
                <br />
                <b className="text-5xl">MISSION</b>
                <hr className=" w-72 bg-indigo-900 h-1 my-4 mx-auto" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  sint nisi perferendis adipisci doloribus laudantium nihil
                  facere alias molestias, assumenda omnis tenetur quasi
                  molestiae quibusdam sunt soluta. Ut, aperiam nostrum.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="text-left m-48">
        <div className="flex justify-between">
          <div>
            <hr className="w-24 bg-indigo-900 h-0.5 " />
            <p className="text-xl">OUR TEAM</p>
            <br />
            <p className="text-5xl">
              <b>The Minds Behind Dimata</b>
            </p>
            <p>
              Dimata’s success is powered by a passionate team committed to
              innovation, collaboration, and delivering impactful solutions to
              our clients.
            </p>
          </div>
          <div className="flex mt-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 ${
                currentIndex === 0 ? "opacity-50" : "opacity-100"
              }`}
            >
              <Image
                src="/about/prev.png"
                alt="about Image"
                width={30}
                height={30}
                quality={100}
                priority
              />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= profile.length - 4}
              className={`p-2 ${
                currentIndex >= profile.length - 4
                  ? "opacity-50"
                  : "opacity-100"
              }`}
            >
              <Image
                src="/about/next.png"
                alt="about Image"
                width={30}
                height={30}
                quality={100}
                priority
              />
            </button>
          </div>
        </div>

        {/* Profile Slider Section */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }} // Adjust to 25% per card
          >
            {profile.map((card, index) => (
              <div key={index} className="min-w-[25%] px-2">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={350}
                  height={150}
                  className="w-full h-50 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
