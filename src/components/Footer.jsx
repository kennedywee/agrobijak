import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Footer = () => {
  return (
    <footer className="border mt-8 border-gray-300">
      <div className="container py-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-poppins">
              Copyright © 2023 AgroBijak Sdn Bhd. All rights reserved.
            </h3>
          </div>

          <div className="border rounded-md px-5 py-1 flex items-center">
            <h3 className="font-poppins mr-2">Status:</h3>
            <FiberManualRecordIcon
              className="text-green-600 mr-2"
              fontSize="small"
            />
            <span>All systems normal.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
