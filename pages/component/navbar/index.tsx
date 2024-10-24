import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex w-full justify-between p-10 px-28 text-xl items-center bg-transparent text-white ">
        <Link href="/">
          <div className="title text-3xl font-bold ">DIMATA</div>
        </Link>
        <div className="menu ">
          <ul className="flex  text-center items-center">
            <li className="px-3 hover:text-orange-500 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-3 hover:text-orange-500 cursor-pointer">
              <Link href="../about">About</Link>
            </li>
            <li className="px-3 hover:text-orange-500 cursor-pointer">
              <Link href="../services">Services</Link>
            </li>
            <li className="px-3 hover:text-orange-500 cursor-pointer">
              <Link href="../products">Products</Link>
            </li>
            <li className="px-3 hover:text-orange-500 cursor-pointer">
              <Link href="../projects">Projects</Link>
            </li>
            <li className="px-3 hover:text-orange-500 cursor-pointer">
              <Link href="/">Contact</Link>
            </li>
            <li className="pl-6 pr-6 flex text-center items-center justify-center  bg-orange-500 h-10">
              Login
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
