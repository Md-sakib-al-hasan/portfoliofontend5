

import About from "@/components/customUi/About";
import Banner from "@/components/customUi/Banner";
import EssentialTools from "@/components/customUi/EssentialTools";
import Portfoliohiliths from "@/components/customUi/Portfoliohiliths";


export default function Home() {

  return (
    <div  className="container mx-auto">
       <Banner/>
       <EssentialTools/>
       <Portfoliohiliths/>
       <About/>
    </div>
  );
}
