// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5 px-4 md:px-8">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            Arjun Sreekumar
          </Link>
        </div>

        <ul className="flex flex-row space-x-6 text-sm">
          <li>
            <Link href="/#about" className="text-white transition-colors duration-300 hover:text-pink-600">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="text-white transition-colors duration-300 hover:text-pink-600">
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="text-white transition-colors duration-300 hover:text-pink-600">
              SKILLS
            </Link>
          </li>
          <li>
            <Link href="/#education" className="text-white transition-colors duration-300 hover:text-pink-600">
              EDUCATION
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-white transition-colors duration-300 hover:text-pink-600">
              PROJECTS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
