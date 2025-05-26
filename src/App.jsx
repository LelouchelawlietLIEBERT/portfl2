import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  FloatingNav,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import { GrProjects } from "react-icons/gr";
import { IoBag } from "react-icons/io5";
import { FaHouseUser } from "react-icons/fa";

function App() {
  const navItems = [{name:"About",link:"#about",icon:<FaHouseUser />},{name:"Work",link:"#work",icon:<IoBag/>},{name:"Projects",link:"#projects",icon:<GrProjects/>},]
  return (
    <>
      <BrowserRouter>
        <div className="relative bg-primary z-0">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <FloatingNav navItems={navItems}/>
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
