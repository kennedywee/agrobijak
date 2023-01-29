import GridPro from "../components/GridPro";
import AgroGrid from "../widgets/AgroGrid";
import GridStorage from "../widgets/GridStorage";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";

const DashboardScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser dashboard />

      <div className="container w-full">
        <AgroGrid></AgroGrid>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DashboardScreen;
