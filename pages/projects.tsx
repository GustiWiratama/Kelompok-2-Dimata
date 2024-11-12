import Image from "next/image";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import SubNavbar from "./component/subNavbar";

export default function Projects() {
  return (
    <div>
      <div className="relative w-full h-[50vh] sm:h-[40vh] md:h-[60vh]">
        <Image
          src="/nav-img.png"
          alt="projects Image"
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-semibold mt-10">
            PROJECTS
          </h1>
        </div>
      </div>
      <div className="relative mt-20 sm:mt-32 md:mt-44 flex flex-col text-center items-center px-4 sm:px-6">
        <div className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
          Transforming ideas into impactful solutions for our clients
        </div>
        <p className="w-full sm:w-5/6 md:w-4/6 text-slate-400">
          Explore our impressive portfolio that have been successfully delivered
          to our clients.
        </p>
        <div className="mt-4">
          <SubNavbar />
        </div>
      </div>
      <section className="container mx-auto pt-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <Image
              src="/project1.png"
              alt="project Image"
              width={2000}
              height={1000}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex items-center">
            <div className="p-6 md:p-20 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
                Love Bali
              </h3>
              <p>
                We have supported development of Love Bali Sistem for Bali
                Government.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="p-6 md:p-20 text-center md:text-right">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
                Bridgewater Joy Residence
              </h3>
              <p>
                Co-designed by the world-renowned architect James Smith, our
                Bridgewater Joy residences offer top views of the nearby lake
                Michigan. Perfect for a small family, a professional couple, or
                anyone looking to set up a home office.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/project2.png"
              alt="project Image"
              width={2000}
              height={1000}
              priority
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="relative">
            <Image
              src="/project3.png"
              alt="project Image"
              width={2000}
              height={1000}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex items-center">
            <div className="p-6 md:p-20 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
                Pleasantview Gem Inn
              </h3>
              <p>
                Not just pleasant on the outside, our Pleasantview Gem Inn
                properties are especially popular among families. With
                underground parking and floor-to-ceiling windows, there’s no
                shortage of natural light or space.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
