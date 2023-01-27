import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";

const ProfileScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser />

      <div className="container w-full"></div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ProfileScreen;
