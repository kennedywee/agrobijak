import { Link } from "react-router-dom";

const DeviceSidebar = ({ general, metadata, fields }) => {
  return (
    <ul className="flex flex-col space-y-5 ">
      <Link to="/device/add">
        <i className={`cursor-pointer ${general ? "text-amber-900" : ""}`}>
          General Information
        </i>
      </Link>
      <Link to="/device/add/metadata">
        <i className={`cursor-pointer ${metadata ? "text-amber-900" : ""}`}>
          Meta Data
        </i>
      </Link>
      <Link to="/device/add/fields">
        <i className={`cursor-pointer ${fields ? "text-amber-900" : ""}`}>
          Device Fields
        </i>
      </Link>
    </ul>
  );
};

export default DeviceSidebar;
