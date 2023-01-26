import GridPro from "../components/GridPro";
import NavbarUser from "../components/NavbarUser";
import HumidityWidget from "../widgets/HumidityWidget";

const DashboardScreen = () => {
  return (
    <div>
      <div>
        <NavbarUser />
      </div>
      <div className="container w-full">
        <GridPro></GridPro>
      </div>
    </div>
  );
};

export default DashboardScreen;
