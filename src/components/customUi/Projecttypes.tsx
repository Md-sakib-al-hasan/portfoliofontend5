"use client"
import { Typewriter } from "react-simple-typewriter";
const Projecttypes = ({title}:{title:string}) => {
  return (
    <div className="mt-2 md:text-lg text-sm text-white  ">
        <Typewriter
              words={[title]}
              loop={0} 
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
    </div>
  )
}

export default Projecttypes
