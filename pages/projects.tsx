import Image from "next/image";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import SubNavbar from "./component/subNavbar";

export default function Projects() {
  return (
    <div>
      <div className="relative w-full h-[50vh]">
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
          <h1 className="text-6xl text-white">PROJECTS</h1>
        </div>
      </div>
      <div className=" relative  mt-72 flex flex-col text-center items-center">
        <div className="font-bold text-4xl mb-4">
          Transforming ideas into impactful solutions for our clients
        </div>
        <p className="w-4/6 text-slate-400">
          Explore our impressive portfolio that have been successfully delivered
          to our clients.{" "}
        </p>
        <div>
          <SubNavbar />
        </div>
      </div>
      <section className="container mx-auto pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
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
            <div className="p-20">
              <h3 className="text-2xl font-bold mb-4 text-start">Love Bali</h3>
              <p className="text-start">
                We have supported development of Love Bali Sistem for Bali
                Government.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="p-20">
              <h3 className="text-2xl font-bold mb-4 text-end">
                Bridgewater Joy Residence
              </h3>
              <p className="text-end">
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
            <div className="p-20">
              <h3 className="text-2xl font-bold mb-4 text-start">
                Pleasantview Gem Inn
              </h3>
              <p className="text-start">
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
