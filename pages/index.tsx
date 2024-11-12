import Image from "next/image";
import Footer from "./component/footer";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/meeting.png')" }}
      >
        <Navbar />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-6xl font-bold mb-4">
              SMART SOFTWARE <br /> SOLUTIONS
            </h1>
            <p className="text-2xl mb-6">
              "Transform your business with our innovative information systems"
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

      <div className="container mx-auto py-8">
        {/* About Section */}
        <div className="max-w-6xl mx-auto gap-10 flex flex-row mb-8 p-8 bg-white text-black">
          <div className="w-7/12">
            <Image
              src="/about/about-picture.png"
              alt="About Image"
              width={2000}
              height={1000}
              quality={100}
              priority
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col max-w-3xl">
            <hr className="w-9 bg-indigo-900 h-0.5 mb-2" />
            <span className="text-indigo-900 font-medium">OUR STORY</span>
            <h1 className="text-4xl font-bold mb-2">
              Turning visions into reality.
            </h1>
            <p className="text-sm mb-3">
              Dimata IT Solutions was founded in 2002 with a vision to develop
              smart information systems using the latest technologies. We have
              successfully delivered software solutions for various industries.
            </p>
            <button className="w-32 h-10 bg-blue-800 text-white hover:bg-blue-800">
              Read More
            </button>
          </div>
        </div>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center pt-6 pb-6">
          <div className="lg:w-1/2 pr-4">
            <h2 className="text-sm uppercase text-indigo-900">
              <hr className="bg-indigo-900 h-0.5 w-9" />
              Our Services
            </h2>
            <h1 className="text-4xl font-bold mt-2">
              Innovative solutions for <br /> every step forward.
            </h1>
            <p className="text-lg text-gray-500 mt-2">
              We provide software solutions for businesses, government, and
              public services. Our expertise includes integration of digital
              devices and 4.0 technologies.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-4">
            {[
              {
                src: "/webDev.png",
                title: "Web Development",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              },
              {
                src: "/mobileDev.png",
                title: "Mobile Development",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              },
              {
                src: "/internet.png",
                title: "Internet of Things",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              },
            ].map((service, index) => (
              <div key={index} className="flex space-x-4 items-center">
                <div className="w-2/5">
                  <Image
                    src={service.src}
                    alt={service.title}
                    width={400}
                    height={300}
                  />
                </div>
                <div className="w-3/5 flex flex-col">
                  <h4 className="text-lg font-bold">{service.title}</h4>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Products Section */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-sm uppercase text-indigo-900">
            <hr className="bg-indigo-900 h-0.5 w-9" />
            Our product
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start mb-4">
            <h1 className="text-4xl font-extrabold leading-tight mb-2">
              Empowering your success with every <br />
              product.
            </h1>
            <button className="w-32 h-12 bg-blue-800 text-white hover:bg-gray-700">
              See All
            </button>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Discover our range of innovative products designed to meet your
            needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array(6)
              .fill()
              .map((_, index) => (
                <div key={index} className="relative bg-white shadow-lg">
                  <Image
                    src="/content.png"
                    alt="Product"
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-lg font-semibold">
                    ProChain
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Work With Us Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Header Section */}
          <div className="flex items-start mb-6">
            <div className="text-left">
              <p className="text-blue-600 font-semibold mb-1">WORK WITH US</p>
              <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            </div>
            <div className="text-gray-600 ml-48 mt-1 text-left max-w-lg">
              Experience our unmatched expertise and dedication to delivering
              exceptional results, tailored to meet your unique needs.
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <Image
                  src="/ai icon.png"
                  alt="Expertise Icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                Expertise and Innovation
              </h3>
              <p className="text-gray-600">
                Our team comprises industry experts who leverage the latest
                technologies to create innovative software solutions tailored to
                your needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <Image
                  src="/fluent_communication-person-20-regular.png"
                  alt="Client-Centric Icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                Client-Centric Approach
              </h3>
              <p className="text-gray-600">
                We prioritize your goals by working closely with you throughout
                the development process, ensuring that our solutions align
                perfectly with your vision.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <Image
                  src="/arcticons_bejeweled-stars.png"
                  alt="Track Record Icon"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="font-semibold text-xl mb-2">
                Client-Centric Approach
              </h3>
              <p className="text-gray-600">
                Our software solutions are designed to grow with your business,
                ensuring long-term reliability and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Small Square Image Box with Text Overlay */}
            <div className="relative h-64 w-full bg-gray-300">
              <Image
                src="/image (3).png"
                alt="Love Bali"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                LOVE BALI
              </div>
            </div>

            {/* Text Section (Flush Left) */}
            <div className="md:col-span-2 flex flex-col justify-center text-left">
              <h2 className="text-sm uppercase text-blue-700 mb-2">
                Our Projects
              </h2>
              <h1 className="text-4xl font-bold text-black mb-4 leading-tight">
                Transforming ideas into impactful solutions for our clients.
              </h1>
              <button className="bg-blue-700 text-white px-4 py-2 hover:bg-blue-600">
                See All
              </button>
            </div>
          </div>

          {/* Additional Project Boxes */}
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {/* Project Image Box 1 */}
            <div className="relative h-64 bg-gray-300">
              <Image
                src="/image1.png"
                alt="Bridgewater Joy Residence"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                BRIDGEWATER JOY RESIDENCE
              </div>
            </div>

            {/* Orange Box */}
            <div className="relative h-64 bg-orange-500"></div>

            {/* Blue Box */}
            <div className="relative h-64 bg-blue-800"></div>

            {/* Project Image Box 2 */}
            <div className="relative h-64 bg-gray-300">
              <Image
                src="/image2.png"
                alt="Pleasantview Gem Inn"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
              />
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                PLEASANTVIEW GEM INN
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-indigo-600 text-sm uppercase mb-2">FAQ</h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {[
              {
                question:
                  "What technologies are commonly used to build software at Dimata IT Solutions?",
                answer:
                  "We use a variety of cutting-edge technologies, including web, mobile, and IoT solutions, tailored to our clients' needs.",
              },
              {
                question:
                  "How does Dimata IT Solutions ensure project success?",
                answer:
                  "Our dedicated team follows best practices in project management, ensuring clear communication, timelines, and deliverables.",
              },
              {
                question:
                  "Can Dimata IT Solutions provide ongoing support after project completion?",
                answer:
                  "Yes, we offer comprehensive support and maintenance packages to ensure long-term success for our clients.",
              },
              {
                question: "How can I get started with Dimata IT Solutions?",
                answer:
                  "You can contact us for a free consultation to discuss your project requirements and explore how we can assist you.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="border border-gray-300 rounded overflow-hidden group"
              >
                <summary className="bg-white p-4 font-semibold cursor-pointer hover:bg-gray-50 group-open:text-blue-600 group-open:bg-white">
                  {faq.question}
                </summary>
                <div className="p-4 bg-white text-gray-600 group-open:text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
