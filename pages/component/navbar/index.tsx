import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path: string) => router.pathname === path;

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="flex w-full justify-between p-10 px-10 sm:px-28 text-xl items-center bg-transparent text-white">
        <Link href="/">
          <div className="title cursor-pointer w-2/5">
            <Image
              src="/nav/dimata-logo.svg"
              alt="logo"
              width={500} // lebar gambar
              height={300} // tinggi gambar
            />
          </div>
        </Link>
        <div className="relative">
          {/* Tombol Dropdown */}
          <button className="md:hidden" onClick={toggleDropdown}>
            <span className="text-3xl">{isDropdownOpen ? "×" : "☰"}</span>
          </button>

          {/* Menu Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 bg-black bg-opacity-80 rounded-md shadow-lg z-10 md:hidden">
              <ul className="flex flex-col text-center">
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/")
                      ? "text-orange-500 text-opacity-70"
                      : "hover:text-orange-500"
                  }`}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/about")
                      ? "text-orange-500 text-opacity-70"
                      : "hover:text-orange-500"
                  }`}
                >
                  <Link href="/about">About</Link>
                </li>
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/services")
                      ? "text-orange-500 text-opacity-70"
                      : "hover:text-orange-500"
                  }`}
                >
                  <Link href="/services">Services</Link>
                </li>
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/products")
                      ? "text-orange-500 text-opacity-70"
                      : "hover:text-orange-500"
                  }`}
                >
                  <Link href="/products">Products</Link>
                </li>
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/projects")
                      ? "text-orange-500 text-opacity-70"
                      : "hover:text-orange-500"
                  }`}
                >
                  <Link href="/projects">Projects</Link>
                </li>
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/contact")
                      ? "text-orange-500 text-opacity-70"
                      : "hover:text-orange-500"
                  }`}
                >
                  <Link href="https://wa.me/+6285737454512/" target="_blank">
                    Contact
                  </Link>
                </li>
                <li className="px-4 py-2 flex text-center items-center justify-center bg-orange-500 bg-opacity-70 cursor-pointer">
                  Login
                </li>
              </ul>
            </div>
          )}
          <div className="hidden md:flex ">
            <ul className="flex text-center items-center">
              <li
                className={`px-3 cursor-pointer ${
                  isActive("/")
                    ? "text-orange-500 text-opacity-70"
                    : "hover:text-orange-500"
                }`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`px-3 cursor-pointer ${
                  isActive("/about")
                    ? "text-orange-500 text-opacity-70"
                    : "hover:text-orange-500"
                }`}
              >
                <Link href="/about">About</Link>
              </li>
              <li
                className={`px-3 cursor-pointer ${
                  isActive("/services")
                    ? "text-orange-500 text-opacity-70"
                    : "hover:text-orange-500"
                }`}
              >
                <Link href="/services">Services</Link>
              </li>
              <li
                className={`px-3 cursor-pointer ${
                  isActive("/products")
                    ? "text-orange-500 text-opacity-70"
                    : "hover:text-orange-500"
                }`}
              >
                <Link href="/products">Products</Link>
              </li>
              <li
                className={`px-3 cursor-pointer ${
                  isActive("/projects")
                    ? "text-orange-500 text-opacity-70"
                    : "hover:text-orange-500"
                }`}
              >
                <Link href="/projects">Projects</Link>
              </li>
              <li
                className={`px-3 cursor-pointer ${
                  isActive("/contact")
                    ? "text-orange-500 text-opacity-70"
                    : "hover:text-orange-500"
                }`}
              >
                <Link href="https://wa.me/+6285737454512/" target="_blank">
                  Contact
                </Link>
              </li>
              <Link
                href="/login"
                className="pl-6 pr-6 flex text-center items-center justify-center bg-orange-500 bg-opacity-70 h-10 cursor-pointer hover:scale-105 transition duration-100"
              >
                Login
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
