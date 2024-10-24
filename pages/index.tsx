import Image from "next/image";
import Footer from "./component/footer";
import Navbar from "./component/navbar";

export default function Home() {
  const products = [
    { id: 1, title: "ProChain", imageUrl: "/Content.png" },
    { id: 2, title: "ProChain", imageUrl: "/Content.png" },
    { id: 3, title: "ProChain", imageUrl: "/Content.png" },
    { id: 4, title: "ProChain", imageUrl: "/Content.png" },
    { id: 5, title: "ProChain", imageUrl: "/Content.png" },
    { id: 6, title: "ProChain", imageUrl: "/Content.png" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/meeting.png')" }}
      >
        <Navbar />
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              SMART SOFTWARE SOLUTIONS
            </h1>
            <p className="text-lg mb-8">
              "Transformasikan bisnis Anda dengan sistem informasi inovatif
              kami"
            </p>
            <a
              href="#consultation"
              className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </header>

      {/* Our Services Section */}
      <div className="container mx-auto py-10">
        <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen">
          <div className="lg:w-1/2 pr-8 flex flex-col">
            <h2 className="text-sm font-bold uppercase text-indigo-900">
              <hr className="bg-indigo-900 h-0.5 w-9" />
              Our Services
            </h2>
            <h1 className="text-4xl font-bold mt-2">
              Innovative solutions for every step forward.
            </h1>
            <p className="text-lg text-gray-500 mt-4">
              We provide software solutions for businesses, government, and
              public services. Our expertise includes integration of digital
              devices and 4.0 technologies.
            </p>
          </div>

          {/* Right Side - Services */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="flex space-x-4 items-start">
              <div className="w-1/3">
                <Image
                  src="/webDev.png"
                  alt="Web Development"
                  width={200}
                  height={150}
                  className="rounded-md"
                />
              </div>
              <div className="w-2/3">
                <h3 className="text-lg font-bold">Web Development</h3>
                <p className="text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="flex space-x-4 items-start">
              <div className="w-1/3">
                <Image
                  src="/mobileDev.png"
                  alt="Mobile Development"
                  width={200}
                  height={150}
                  className="rounded-md"
                />
              </div>
              <div className="w-2/3">
                <h3 className="text-lg font-bold">Mobile Development</h3>
                <p className="text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            {/* Internet of Things */}
            <div className="flex space-x-4 items-start">
              <div className="w-1/3">
                <Image
                  src="/internet.png"
                  alt="Internet of Things"
                  width={200}
                  height={150}
                  className="rounded-md"
                />
              </div>
              <div className="w-2/3">
                <h3 className="text-lg font-bold">Internet of Things</h3>
                <p className="text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Our Products Section */}
      <div className="container mx-auto py-10">
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">
              Empowering your success with every product.
            </h2>
            <p className="text-gray-600 mt-2">
              Discover our range of innovative products designed to meet your
              needs.
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition"
            >
              See All
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="text-lg font-bold mt-4">{product.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
