import Image from "next/image";
import Footer from "./component/footer";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <div>
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
        
      <Footer />
    </div>
  );
}
