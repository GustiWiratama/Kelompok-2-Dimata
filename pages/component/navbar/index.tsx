import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between p-10 items-center bg-transparent text-white ">
        <div className="title font-bold text-3xl">DIMATA</div>
        <div className="menu ">
          <ul className="flex  text-center text-2xl items-center">
            <li className="pl-4 pr-4 hover:text-orange-700 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="pl-4 pr-4 hover:text-orange-700 cursor-pointer">
              About
            </li>
            <li className="pl-4 pr-4 hover:text-orange-700 cursor-pointer">
              <Link href="../services">Services</Link>
            </li>
            <li className="pl-4 pr-4 hover:text-orange-700 cursor-pointer">
              <Link href="../products">Product</Link>
            </li>
            <li className="pl-4 pr-4 hover:text-orange-700 cursor-pointer">
              <Link href="../projects">Projects</Link>
            </li>
            <li className="pl-4 pr-4 hover:text-orange-700 cursor-pointer">
              Contact
            </li>
            <li className="pl-6 pr-6 flex text-center items-center justify-center  bg-orange-400 h-10">
              Login
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
