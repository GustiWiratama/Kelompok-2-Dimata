const Footer = () => {
  return (
    <footer className="text-center pt-20 bg-white">
      <h1 className="text-4xl font-bold mb-4">
        "Dynamic Discussions, Visionary Decisions"
      </h1>
      <p className="text-lg mb-8">
        Choose a committed team or allow us to craft your vision into reality.
      </p>
      <button className="bg-[#2D3E98] text-white py-2 px-6 hover:bg-blue-700 transition">
        Schedule Here
      </button>

      <section className=" bg-[#2D3E98] text-white py-10 px-20 mt-40">
        <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-between">
          <div className="flex flex-col text-start w-full md:w-2/6 mb-8 md:mb-0 ">
            <h2 className="text-2xl font-bold mb-4">DIMATA</h2>
            <p className="mb-2">
              Jl. Danau Tempe No.21A, Sidakarya,
              <br />
              Denpasar Selatan, Kota Denpasar, Bali 80224
            </p>
            <p className="font-bold mt-2">Contact Us</p>
            <p className="mb-4">
              <a href="mailto:marketing@dimata.com" className="hover:underline">
                marketing@dimata.com
              </a>
              <br />
              +62 361 448-4425
            </p>
            <p className="font-bold mb-1">Follow Us</p>
            <div className="flex space-x-4">
              <a href="#">
                <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#">
                <img src="/ig.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#">
                <img src="/linkin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-wrap text-start justify-end">
            <div className="w-1/4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-1/4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Resource</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Training
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10 text-center text-sm">
          <p>© 2024 Dimata. All rights reserved.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
