import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <ul>
      <li>
        <Link to="/" className="nav-link">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/customers" className="nav-link">
          Users
        </Link>
      </li>
    </ul>
  );
};
export default Sidebar;
