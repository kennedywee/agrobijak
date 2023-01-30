import { Link } from "react-router-dom";

const DeviceSidebar = ({ id, general, fields, token }) => {
  return (
    <ul className="flex flex-col space-y-5 ">
      <Link to={`/device/${id}/edit/`}>
        <i className={`cursor-pointer ${general ? "text-amber-900" : ""}`}>
          General Information
        </i>
      </Link>
      <Link to={`/device/${id}/edit/fields`}>
        <i className={`cursor-pointer ${fields ? "text-amber-900" : ""}`}>
          Device Fields
        </i>
      </Link>
      <Link to={`/device/${id}/edit/tokens`}>
        <i className={`cursor-pointer ${token ? "text-amber-900" : ""}`}>
          Device Token
        </i>
      </Link>
    </ul>
  );
};

export default DeviceSidebar;
