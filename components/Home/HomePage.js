// import { Divider, IconButton, Switch } from "@mui/joy";
import NavigationBar from "../Navigation/NavigationBar";
import LeftSide from "./HomePage/LeftSide";
import { Separator } from "../ui/separator";
import HomeComponent from "./HomePage/HomeComponent";

function HomePage() {
  return (
    
    <div className="min-w-max  min-h-[100vh] sticky top-0">
      <div className=" h-[6vh]" />
       <div className=" flex flex-row justify-evenly min-h-[70vh] max-h-[80vh]">
       <LeftSide />
         <Separator orientation="vertical" className=" h-[70vh]" />
         <HomeComponent />
        
      </div>
    </div>
  );
}

export default HomePage;
