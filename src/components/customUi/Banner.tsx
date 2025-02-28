"use client"
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image"
import { RiFacebookCircleLine } from "react-icons/ri"
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { VscGithub } from "react-icons/vsc"
import sakib from "../../../public/sakib.png"
import sakib2 from "../../../public/sakib2.png"
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="md:flex flex-row-reverse items-center xl:px-0 px-8 lg:py-32 md:py-24 py-10">
      <div className="md:w-4/12 flex flex-col items-center md:pb-0 pb-20">
        <motion.div
          initial={{ y: -50 }} 
          animate={{ y: 50 }} 
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" }} 
          className="w-8/12"
        >
          <Image src={sakib} alt="sakib" className="w-full hidden dark:block" />
          <Image src={sakib2} alt="sakib" className="w-full block dark:hidden" />
        </motion.div>
      </div>

      <motion.ul 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        className="space-y-4 md:w-8/12 w-full md:text-left text-center"
      >
        <motion.li initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <span className="text-2xl font-semibold">{`Hello it's Me`}</span>
        </motion.li>

        <motion.li initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <span className="md:text-5xl text-3xl font-semibold">Sakib AL Hasan</span>
        </motion.li>

        <motion.li initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          <span className="text-2xl font-semibold inline-block">{`And I'm `}</span>
          <span className="text-2xl font-semibold inline text-red-400 dark:text-customBlue">
            <Typewriter
              words={[" a web developer"]}
              loop={0} 
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.li>

        <motion.li initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <span className="text-md">
            Passionate Web Developer | React, Next.js, Tailwind CSS | Focused on Clean Code & Best Practices | Enthusiast of Performance Optimization & Responsive Design
          </span>
        </motion.li>

        <motion.li initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.9 }}>
          <div className="flex items-center md:justify-start justify-center md:gap-2 gap-4">
            <span><Link href="https://www.facebook.com/md.sakib.al.hasan.289901"><RiFacebookCircleLine size={30} className="dark:text-[#00eeff] text-red-400 hover:bg-red-400 dark:hover:bg-[#00eeff] rounded-full hover:text-white dark:hover:text-[#1f232e]" /></Link></span>
            <span><Link href="https://www.linkedin.com/in/md-sakib-al-hasan-46942126b"><TiSocialLinkedinCircular size={36} className="dark:text-[#00eeff] text-red-400 hover:bg-red-400 dark:hover:bg-[#00eeff] rounded-full hover:text-white dark:hover:text-[#1f232e]" /></Link></span>
            <span><Link href="https://github.com/Md-sakib-al-hasan"><VscGithub size={26} className="dark:text-[#00eeff] text-red-400 hover:bg-red-400 dark:hover:bg-[#00eeff] rounded-full hover:text-white dark:hover:text-[#1f232e]" /></Link></span>
          </div>
        </motion.li>

        <motion.li initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <Link className="block" href="https://drive.google.com/uc?export=download&id=1Blmf8vRue8RcamRqX7IRvi1yCOjKwk28" download>
            <button className="bg-red-400 dark:bg-[#00eeff] py-1 px-4 rounded-md text-white dark:text-[#1f232e] shadow-lg shadow-red-400 dark:shadow-[#00eeff]/50">
              Download CV
            </button>
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default Banner;
