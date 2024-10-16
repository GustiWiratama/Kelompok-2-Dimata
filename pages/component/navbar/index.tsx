const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between p-4 pl-10 pr-10 items-center bg-slate-700 text-white ">
        <div className="title font-bold text-3xl">DIMATA</div>
        <div className="menu ">
          <ul className="flex  text-center text-2xl items-center">
            <li className="pl-4 pr-4 hover:text-orange-700">Home</li>
            <li className="pl-4 pr-4 hover:text-orange-700">About</li>
            <li className="pl-4 pr-4 hover:text-orange-700">Services</li>
            <li className="pl-4 pr-4 hover:text-orange-700">Product</li>
            <li className="pl-4 pr-4 hover:text-orange-700">Projects</li>
            <li className="pl-4 pr-4 hover:text-orange-700">Contact</li>
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
