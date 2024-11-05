import Image from "next/image";
import Footer from "./component/footer";
import Navbar from "./component/navbar";

export default function Services() {
  const cards = [
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/services/webDev.png",
    },
    {
      title: "Mobile Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/services/mobileDev.png",
    },
    {
      title: "Internet Of Things",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/services/internet.png",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/services/ai.png",
    },
  ];
  return (
    <div className="relative">
      <div className="relative w-full h-[50vh]">
        <Image
          src="/services/services1.png"
          alt="service Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
        />

        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar />
        </div>

        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white mt-10 ">SERVICES</h1>
        </div>
      </div>
      <div className=" relative  mt-40 flex flex-col text-center items-center">
        <div className="font-bold text-4xl mb-4">
          Innovative solutions for every step forward
        </div>
        <p className="w-4/6">
          We provide software solutions for businesses, government, and public
          services. Our expertise includes integration of digital devices and
          4.0 technologies.
        </p>
      </div>
      <div className="max-w-screen-lg mx-auto p-4 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white  shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={500}
                height={300}
                className="w-full h-50 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
