import { Link } from "react-router-dom";

const AlertSidebar = ({ id, general }) => {
  return (
    <ul className="flex flex-col space-y-5 ">
      <Link to={`/alert/${id}/`}>
        <i className={`cursor-pointer ${general ? "text-amber-900" : ""}`}>
          General Information
        </i>
      </Link>
    </ul>
  );
};

export default AlertSidebar;
