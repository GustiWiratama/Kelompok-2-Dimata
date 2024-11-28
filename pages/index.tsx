import Image from "next/image";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  const testimonialsData = [
    {
      id: 1,
      name: "Saraswati",
      role: "Client",
      message: "Lorem Ipsum is simply dummy text of the printing.",
      imageUrl: "/image/woman.png",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Customer",
      message: "This is a sample testimonial from a satisfied customer.",
      imageUrl: "/image/woman.png",
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Client",
      message: "Great service and support. Highly recommend!",
      imageUrl: "/image/woman.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonial, setTestimonial] = useState(testimonialsData[0]);

  useEffect(() => {
    setTestimonial(testimonialsData[currentIndex]);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < testimonialsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // About Section data
  const aboutSlides = [
    {
      title: "William John Doe.",
      sectionName: "OUR DIRECTOR", // Nama untuk slide pertama
      description:
        "William John Doe is the visionary leader of Dimata IT Solutions, which he founded in 2002. With over 20 years in the IT sector, he drives innovation that enhances client efficiency across various industries. His commitment to accessible technology and a creative workplace has established Dimata as a leader in the tech field..",
      imageUrl: "/about/about picture (1).svg",
    },
    {
      title: "Turning visions into reality.",
      sectionName: "OUR SERVICE", // Nama untuk slide kedua
      description:
        "Dimata IT Solutions was founded in 2002 with a vision to develop smart information systems using the latest technologies. We have successfully delivered software solutions for various industries.",
      imageUrl: "/about/Group 43 (1).svg",
    },
  ];

  const [aboutIndex, setAboutIndex] = useState(0);

  const handleAboutNext = () => {
    if (aboutIndex < aboutSlides.length - 1) {
      setAboutIndex(aboutIndex + 1);
    }
  };

  function handleAboutPrevious() {
    setAboutIndex(
      (prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length
    );
  }

  return (
    <>
      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/meeting.png')" }}
      >
        <div className="absolute top-0 left-0 right-0 z-20">
          <Navbar />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-semibold mb-4">
              SMART SOFTWARE <br /> SOLUTIONS
            </h1>
            <p className="text-2xl mb-6 italic">
              "Transform your business with our innovative information systems"
            </p>
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 bg-opacity-70 text-white py-3 px-6 hover:bg-orange-600 transition"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto pb-8">
        {/* About Section */}
        <div className="flex flex-col md:flex-row gap-10 m-10 justify-center items-center relative z-20 bg-white text-black p-10">
          <div className="w-full md:w-1/2 mx-auto px-5">
            <div className="relative w-full h-500">
              {" "}
              {/* Fixed height for consistency */}
              <Image
                src={aboutSlides[aboutIndex].imageUrl}
                alt={`About Image ${aboutIndex + 1}`}
                width={500}
                height={500}
                quality={100}
                priority
                className="object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-2xl">
            <hr className="w-9 bg-indigo-900 h-1 mb-2" />
            <span className="text-xl text-indigo-900 font-medium">
              {aboutSlides[aboutIndex].sectionName}
            </span>
            <h1 className="text-5xl font-bold font-sans my-4">
              {aboutSlides[aboutIndex].title}
            </h1>
            <p className="w-full text-sm mb-5 leading-loose">
              {aboutSlides[aboutIndex].description}
            </p>
            <div className="flex justify-between">
              <button
                className="w-32 h-12 bg-blue-800 text-white hover:bg-blue-700 transition disabled:opacity-50"
                onClick={handleAboutPrevious}
                disabled={aboutIndex === 0}
              >
                Previous
              </button>
              <button
                className={`w-32 h-12 bg-blue-800 text-white hover:bg-blue-700 transition ${
                  aboutIndex === aboutSlides.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={handleAboutNext}
                disabled={aboutIndex === aboutSlides.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center pt-6 pb-6 py-20">
        <div className="lg:w-1/2 max-w-6xl mx-auto px-8">
          <h2 className="text-sm uppercase text-indigo-900">
            <hr className="bg-indigo-900 h-0.5 w-9" />
            Our Services
          </h2>
          <h1 className="text-4xl font-bold mt-2">
            Innovative solutions for <br /> every step forward.
          </h1>
          <p className="text-lg text-gray-500 mt-2">
            We provide software solutions for businesses, government, and public
            services. Our expertise includes integration of digital devices and
            4.0 technologies.
          </p>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 gap-4">
          {[
            {
              src: "/services/webDev.png",
              title: "Web Development",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              src: "/services/mobileDev.png",
              title: "Mobile Development",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              src: "/services/internet.png",
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
                <p className="text-gray-500 text-sm w-[90%]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <div className="py-20">
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
            {Array.from({ length: 6 }).map((_, index) => (
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
        <div className="max-w-6xl mx-auto px-8">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-6">
            <div className="text-left">
              <hr className="w-9 bg-indigo-900 h-1 mb-2 " />
              <span className="text-sm text-indigo-900 font-medium">
                WORK WITH US
              </span>
              <h2 className="text-3xl font-bold  mt-5">Why Choose Us?</h2>
            </div>
            <div className="text-gray-600 ml-48 mt-1 text-right max-w-lg">
              Experience our unmatched expertise and dedication to delivering
              exceptional results, tailored to meet your unique needs.
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6  shadow-md">
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
            <div className="bg-white p-6  shadow-md">
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
            <div className="bg-white p-6  shadow-md">
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
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            {/* Small Square Image Box with Text Overlay */}
            <div className="relative h-64 w-64 bg-gray-300 flex items-center justify-center">
              <Image
                src="/image (3).png"
                alt="Love Bali"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                LOVE BALI
              </div>
            </div>
            <div className="relative h-64 w-64 bg-blue-800"></div>
            {/* Text Section (Flush Left) */}
            <div className="md:col-span-2 flex flex-col justify-start items-end text-right">
              <h2 className="text-sm uppercase text-indigo-900 flex flex-col justify-start items-end">
                <hr className="bg-indigo-900 h-0.5 w-9 items-end" />
                Our projects
              </h2>
              <h1 className="text-4xl font-bold text-black my-5 leading-tight">
                Transforming ideas into impactful solutions for our clients.
              </h1>
              <button className="w-32 h-12 bg-blue-800 text-white hover:bg-gray-700 ">
                See All
              </button>
            </div>
          </div>

          {/* Additional Project Boxes */}
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {/* Project Image Box 1 */}
            {/* Orange Box */}
            <div className="flex flex-col">
              <div className="flex flex-row-reverse">
                <div className="relative h-32 w-32 bg-orange-500"></div>
                <div className="relative h-32 w-32 bg-white"></div>
              </div>
              <div className="flex flex-row">
                <div className="relative h-32 w-32 bg-blue-800"></div>
                <div className="relative h-32 w-32 bg-white"></div>
              </div>
            </div>
            <div className="relative h-64 bg-gray-300 flex items-center justify-center">
              <Image
                src="/image (4).png"
                alt="Bridgewater Joy Residence"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg font-semibold">
                <div>BRIDGEWATER JOY</div>
                <div className="text-xl mt-2">RESIDENCE</div>
              </div>
            </div>

            {/* Blue Box */}
            <div className="relative h-64 bg-orange-500"></div>

            {/* Project Image Box 2 */}
            <div className="relative h-64 bg-gray-300 flex items-center justify-center">
              <Image
                src="/image (5).png"
                alt="Pleasantview Gem Inn"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg font-semibold">
                <div>PLEASANTVIEW</div>
                <div className="text-xl mt-2">GEM INN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-indigo-800 text-sm uppercase mb-2">FAQ</h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
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
              {
                question: "What industries does Dimata IT Solutions serve?",
                answer:
                  "We serve a wide range of industries, including healthcare, finance, education, retail, and technology.",
              },
              {
                question:
                  "Can Dimata IT Solutions help with custom software development?",
                answer:
                  "Yes, we specialize in creating custom software solutions tailored to your business needs.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="border border-gray-300 rounded overflow-hidden group"
              >
                <summary className="bg-white p-5 font-semibold cursor-pointer flex items-center justify-between group-open:bg-blue-800 group-open:text-white">
                  {faq.question}
                  <img
                    src="/Vector (1).png"
                    alt="Arrow icon closed"
                    className="ml-2 transition-transform transform group-open:hidden w-5 h-5"
                  />
                  <img
                    src="/Vector.png"
                    alt="Arrow icon open"
                    className="ml-2 transition-transform transform hidden group-open:block w-5 h-5"
                  />
                </summary>
                <div className="p-5 bg-white text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="flex pt-16 md:pt-32 font-sans">
        <div className="flex flex-col lg:flex-row lg:p-32 p-5 justify-between items-center bg-[url('/image/testibg.png')] w-full h-[50vh] lg:h-[90vh] bg-cover bg-center">
          <div className="flex flex-col items-center lg:items-start justify-start text-white gap-3">
            <h1 className="text-xl md:text-2xl italic font-medium">
              TESTIMONIAL
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold">
              What They Say About Us
            </h1>
          </div>

          <div className="flex flex-col p-5 gap-5 bg-white w-full max-w-lg lg:max-w-md shadow-lg rounded-lg">
            <div className="flex flex-row justify-end items-center gap-4">
              <div className="flex flex-col justify-center items-end">
                <h1 className="font-bold text-lg md:text-xl">
                  {testimonial.name}
                </h1>
                <p className="text-sm">{testimonial.role}</p>
              </div>
              <Image
                src={testimonial.imageUrl}
                alt="pp"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col text-right">
              <p className="text-sm md:text-base">{testimonial.message}</p>
            </div>
            <div className="flex flex-row gap-3 items-center justify-end">
              <FaArrowLeftLong
                size={24}
                className="cursor-pointer"
                onClick={handlePrevious}
              />
              <FaArrowRightLong
                size={24}
                className="cursor-pointer"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
