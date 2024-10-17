import Image from "next/image";
import Footer from "./component/footer";
import Navbar from "./component/navbar";

export default function Services() {
  const cards = [
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/webDev.png", // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Mobile Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/mobileDev.png", // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Internet Of Things",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/internet.png", // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Artificial Intelligence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/ai.png", // Ganti dengan path gambar yang sesuai
    },
  ];
  return (
    <div className="relative">
      <title>Services</title>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="relative z-10 p-20 text-white text-center">
        <h1 className="text-6xl">SERVICES</h1>
      </div>
      <div className="absolute inset-0 z-1">
        <Image
          src="/services.png"
          alt="Services Image"
          width={2000}
          height={1000}
          priority
          className=""
        />
      </div>
      <div className=" relative  mt-72 flex flex-col text-center items-center">
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
