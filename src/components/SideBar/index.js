import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ul>
      <li>
        <Link to="/" className="nav-link">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/users" className="nav-link">
          Users
        </Link>
      </li>
    </ul>
  );
};
export default SideBar;
