"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import sakib from "../../../public/sakib3.png"


const About = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-8 md:grid-cols-2 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative mx-auto"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-[280px] h-[320px] md:w-[320px] md:h-[360px] lg:w-[380px] lg:h-[420px]">
              <motion.div
                className="absolute inset-0 bg-red-400 dark:bg-[#00D2E0] rounded-[30%] rotate-[60deg]"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute inset-0 border-4 border-red-400  dark:border-[#00D2E0] rounded-[30%] rotate-[60deg]"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              />
              <div className="absolute inset-0 overflow-hidden rounded-[30%] ">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={sakib.src}
                    alt="Professional developer portrait"
                    width={400}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <motion.h2
                className="text-4xl md:text-5xl md:text-left sm:text-center font-bold tracking-tight dark:text-white text-black"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                About <span className="dark:text-[#00D2E0] text-red-400 ">Me</span>
              </motion.h2>
              <motion.h3
                className="text-2xl md:text-left md:text-3xl text-center font-semibold text-black dark:text-white"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
               Full Stack Web Developer
              </motion.h3>
            </div>
            <motion.p
              className=" dark:text-white text-black md:text-"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
             {`I'm a full stack developer with a passion for crafting clean, responsive UIs and building powerful backends. From Figma to Firebase, I work across the stack using tools like React, Next.js, TypeScript, Express, MongoDB, and more. With a focus on performance and usability, I turn ideas into functional web applications that scal`}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="inline-flex md:w-auto sm:w-full items-center justify-center rounded-full dark:bg-[#00D2E0] bg-red-400 px-6 py-3 text-sm font-medium text-white dark:text-black hover:bg-red-500 dark:hover:bg-[#00B8C4] transition-colors"
              >
                Read More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About;