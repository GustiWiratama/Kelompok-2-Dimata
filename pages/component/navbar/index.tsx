import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <div>
      <nav className="flex w-full justify-between p-10 px-28 text-xl items-center bg-transparent text-white ">
        <Link href="/">
          <div className="title text-3xl font-bold cursor-pointer">DIMATA</div>
        </Link>
        <div className="menu">
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
              <Link href="/contact">Contact</Link>
            </li>
            <li className="pl-6 pr-6 flex text-center items-center justify-center bg-orange-500 bg-opacity-70 h-10 cursor-pointer hover:scale-105 transition duration-100">
              Login
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
