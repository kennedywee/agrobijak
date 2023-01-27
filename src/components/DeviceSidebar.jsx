const DeviceSidebar = ({ general, metadata, fields }) => {
  return (
    <ul className="flex flex-col space-y-5 ">
      <i className={`cursor-pointer ${general ? "text-amber-900" : ""}`}>
        General Information
      </i>
      <i className={`cursor-pointer ${metadata ? "text-amber-900" : ""}`}>
        Meta Data
      </i>
      <i className={`cursor-pointer ${fields ? "text-amber-900" : ""}`}>
        Device Fields
      </i>
    </ul>
  );
};

export default DeviceSidebar;
