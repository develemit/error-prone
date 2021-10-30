import { Link } from "react-router-dom";
import "./index.css";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

const renderLink = ({ title, path }) => (
  <Link to={path} className="nav-item">
    {title}
  </Link>
);

export default function Navbar() {
  return <nav className="nav-container center">{links.map(renderLink)}</nav>;
}
