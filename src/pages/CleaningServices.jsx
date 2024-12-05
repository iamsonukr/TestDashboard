import Card from "../components/Card";
import Navbar from "../components/Navbar";

function CleaningServices({isAuthenticated=true}) {
  return (
    <div className="w-full h-full">
      <Navbar isAuthenticated={isAuthenticated} />
      <div className="w-full h-full">
        <Card />
      </div>
    </div>
  );
}

export default CleaningServices;
