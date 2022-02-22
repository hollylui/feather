//! From libaray
import { Link } from "react-router-dom";

export default function Navbar() {
  const linkStyles = "mr-5 hover:text-yellow-300";

  return (
    <nav className="bg-black text-white h-10 flex items-center justify-end">
      <Link className={linkStyles} to="/">
        Home
      </Link>
      <Link className={linkStyles} to="/login">
        Login
      </Link>
      <Link className={linkStyles} to="/policy">
        Policy
      </Link>
    </nav>
  );
}
