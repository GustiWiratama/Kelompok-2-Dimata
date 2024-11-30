import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "./component/footer";
import Navbar from "./component/navbar";

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
    // Other profile items...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNext = () => {
    if (currentIndex < profile.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative min-h-screen flex-col flex-grow">
      <div className="relative w-full h-[50vh]">
        <Image
          src="/about/about.svg"
          alt="about Image"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
          priority
        />
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar />
        </div>
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white mt-10">ABOUT US</h1>
        </div>
      </div>
      <div className="gap-20 m-10 justify-center items-center relative z-20 bg-white text-black p-10 flex flex-row">
        <div className="w-1/2  flex justify-center">
          <Image
            src="/about/about-picture.svg"
            alt="about Image"
            width={700}
            height={5000}
            quality={100}
            priority
          />
        </div>
        <hr />
        <div className="flex flex-col max-w-2xl w-1/2">
          <hr className="w-9 bg-indigo-900 h-1 mb-2" />
          <span className="text-xl text-indigo-900 font-medium">OUR STORY</span>
          <h1 className="text-5xl font-bold font-sans">
            Turning visions into reality.
          </h1>
          <br />
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
          <hr className="text-white w-16 h-0.5 my-1 mx-auto" />
          <h1 className="text-white text-2xl">Vision and Mission</h1>
        </div>
        <div className="absolute top-10 left-0 z-30 w-full h-full flex justify-center items-center gap-10 flex-wrap px-4">
          <div className="bg-white text-center p-4 w-full md:w-1/3 h-auto md:h-1/2">
            <b className="text-xl md:text-2xl lg:text-3xl">VISION</b>
            <hr className="w-24 md:w-72 bg-indigo-900 h-1 my-4 mx-auto" />
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
              dolorem quisquam iste totam consectetur dolorum laudantium nulla
              incidunt eos molestias, aliquid alias enim blanditiis laborum id
              est voluptatum!
            </p>
          </div>
          <div className="bg-white text-center p-4 w-full md:w-1/3 h-auto md:h-1/2">
            <b className="text-1xl md:text-2xl lg:text-3xl">MISSION</b>
            <hr className="w-24 md:w-72 bg-indigo-900 h-1 my-4 mx-auto" />
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
              dolorem quisquam iste totam consectetur dolorum laudantium nulla
              incidunt eos molestias, aliquid alias enim blanditiis laborum id
              est voluptatum!
            </p>
          </div>
        </div>
      </div>
      <div className="text-left m-48">
        <div className="flex justify-between">
          <div>
            <hr className="w-24 bg-indigo-900 h-1 mb-2" />
            <p className="text-xl">OUR TEAM</p>
            <br />
            <p className="text-5xl">
              <b>The Minds Behind Dimata</b>
            </p>
            <br />
            <p>
              Dimata’s success is powered by a passionate team committed to
              innovation, collaboration, and delivering impactful solutions to
              our clients.
            </p>
            <br />
          </div>
          {isClient && (
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
                  alt="prev"
                  width={30}
                  height={30}
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
                  alt="next"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          )}
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {profile.map((card, index) => (
              <div key={index} className=" min-w-[25%] px-2 text-center">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={350}
                  height={150}
                  className="w-full h-50 object-cover  shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
                />
                <p className="mt-4 font-bold text-lg">{card.name}</p>
                <p className="text-gray-600">{card.potition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full gap-2 bg-slate-100 justify-center  items-center px-16 py-28">
        <div className="mb-12 w-1/2">
          <hr className="w-14 mb-2 h-1 bg-indigo-900" />
          <p className="text-indigo-900 text-2xl">OUR EXPERIENCE</p>
          <br />
          <p className="text-4xl md:text-4xl font-bold">
            Building Success Through Experience
          </p>
        </div>
        <div className="flex justify-center w-1/2  h-full content-center gap-4">
          {/* Elemen 1 */}
          <div className="flex flex-col  border-solid border-2 py-3 border-black items-center w-1/3">
            <p className="text-6xl md:text-6xl font-bold">20+</p>
            <p className="text-xl md:text-base font-bold">
              Years of Experience
            </p>
          </div>

          {/* Garis Vertikal */}
          <div className="h-28 w-px bg-gray-400"></div>

          {/* Elemen 2 */}
          <div className="flex flex-col border-solid border-2 py-3 border-black items-center w-1/3">
            <p className="text-6xl md:text-6xl font-bold">10+</p>
            <p className="text-xl md:text-base font-bold">Project Completed</p>
          </div>

          {/* Garis Vertikal */}
          <div className="h-28 w-px bg-gray-400"></div>

          {/* Elemen 3 */}
          <div className="flex flex-col border-solid border-2 py-3 border-black items-center w-1/3">
            <p className="text-6xl md:text-6xl font-bold">15+</p>
            <p className="text-xl md:text-base font-bold">Happy Clients</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-16 m-28">
        <div className="w-1/2 flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.846030212877!2d115.23796897589622!3d-8.706167791342807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241bfead42cb1%3A0x24c6e2d6d2d87689!2sDimata%20IT%20and%20Software!5e0!3m2!1sid!2sid!4v1730960400785!5m2!1sid!2sid"
            width="550"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="max-w-3xl place-content-center w-1/2 p-6">
          <hr className="w-20 mb-2 h-1 bg-indigo-900" />
          <p className="text-indigo-900 text-2xl">OUR OFFICE</p>
          <br />
          <p className="text-4xl">
            <b>Where Innovation Happens</b>
          </p>
          <br />
          <p>
            A space built to drive progress and foster creativity. Our modern,
            tech-forward office reflects our commitment to cutting-edge
            solutions and provides the ideal environment for innovation and
            collaboration.
          </p>
        </div>
      </div>
      <div></div>

      <Footer />
    </div>
  );
}
