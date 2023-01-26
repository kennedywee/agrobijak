import NavbarUser from "../components/NavbarUser";
import Card from "../components/Card";

const OverviewScreen = () => {
  return (
    <div>
      <NavbarUser />
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            <Card />
          </div>

          <div className="">
            <Card />
          </div>

          <div className="">
            <Card />
          </div>

          <div className="">
            <Card />
          </div>

          <div className="">
            <Card />
          </div>

          <div className="">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewScreen;
