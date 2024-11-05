import Link from "next/link";

const SubNavbar = () => {
  return (
    <div>
      <ul className="flex text-xl">
        <li className="p-5 hover:text-blue-800 cursor-pointer">
          <Link href="#">All</Link>
        </li>
        <li className="p-5 hover:text-blue-800 cursor-pointer">
          <Link href="#">Web</Link>
        </li>
        <li className="p-5 hover:text-blue-800 cursor-pointer">
          <Link href="#">Mobile</Link>
        </li>
        <li className="p-5 hover:text-blue-800 cursor-pointer">
          <Link href="#">Dekstop</Link>
        </li>
        <li className="p-5 hover:text-blue-800 cursor-pointer">
          <Link href="#">IoT</Link>
        </li>
        <li className="p-5 hover:text-blue-800 cursor-pointer">
          <Link href="#">AI</Link>
        </li>
      </ul>
    </div>
  );
};

export default SubNavbar;
