import Link from "next/link";

const SubNavbar = () => {
  return (
    <div>
      <ul className="flex">
        <li className="p-5 hover:text-cyan-950 cursor-pointer">
          <Link href="#">All</Link>
        </li>
        <li className="p-5 hover:text-cyan-950 cursor-pointer">
          <Link href="#">Web</Link>
        </li>
        <li className="p-5 hover:text-cyan-950 cursor-pointer">
          <Link href="#">Mobile</Link>
        </li>
        <li className="p-5 hover:text-cyan-950 cursor-pointer">
          <Link href="#">Dekstop</Link>
        </li>
        <li className="p-5 hover:text-cyan-950 cursor-pointer">
          <Link href="#">Iot</Link>
        </li>
        <li className="p-5 hover:text-cyan-950 cursor-pointer">
          <Link href="#">Ai</Link>
        </li>
      </ul>
    </div>
  );
};

export default SubNavbar;
