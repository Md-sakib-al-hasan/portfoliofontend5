"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Database,
  Layers,
  Lightbulb,
  Monitor,
  Server,
  GraduationCap,
  Briefcase,
 
} from "lucide-react"
import sakib from "../../../public/sakib3.png"


export default function AboutPage() {
  const skills = [
    {
      name: "Frontend Development",
      icon: <Monitor className="h-6 w-6" />,
      description: "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      name: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      description: "Node.js, Express, MongoDB, PostgreSQL",
    },
    { name: "Full Stack", icon: <Layers className="h-6 w-6" />, description: "End-to-end application development" },
    {
      name: "Database Management",
      icon: <Database className="h-6 w-6" />,
      description: "MongoDB, PostgreSQL, Firebase",
    },
    { name: "Web Performance", icon: <Lightbulb className="h-6 w-6" />, description: "Optimization, SEO, Analytics" },
  ]

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Leading development of enterprise web applications using Next.js, TypeScript, and MongoDB. Implemented CI/CD pipelines and improved site performance by 40%.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 - 2021",
      description:
        "Developed responsive user interfaces using React and Redux. Collaborated with designers to implement pixel-perfect UIs and improve user experience.",
    },
    {
      title: "Web Developer Intern",
      company: "StartUp Hub",
      period: "2018 - 2019",
      description:
        "Assisted in developing web applications using JavaScript and PHP. Gained hands-on experience with modern web development practices.",
    },
  ]

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2017 - 2019",
      description: "Specialized in Web Technologies and Software Engineering. Graduated with honors.",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "State University",
      period: "2013 - 2017",
      description:
        "Focused on Programming and Database Management. Participated in multiple hackathons and coding competitions.",
    },
  ]

  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 border-b border-gray-200 dark:border-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
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
                  className="absolute inset-0 border-4 border-red-400 dark:border-[#00D2E0] rounded-[30%] rotate-[60deg]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  viewport={{ once: true }}
                />
                <div className="absolute inset-0 overflow-hidden rounded-[30%]">
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
                <motion.h1
                  className="text-4xl md:text-5xl md:text-left sm:text-center font-bold tracking-tight dark:text-white text-black"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  About <span className="dark:text-[#00D2E0] text-red-400">Me</span>
                </motion.h1>
                <motion.h2
                  className="text-2xl md:text-left md:text-3xl text-center font-semibold text-black dark:text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Full Stack Web Developer
                </motion.h2>
              </div>
              <motion.p
                className="dark:text-gray-300 text-gray-700 md:text-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                {`I'm a full stack developer with a passion for crafting clean, responsive UIs and building powerful backends. From Figma to Firebase, I work across the stack using tools like React, Next.js, TypeScript, Express, MongoDB, and more. With a focus on performance and usability, I turn ideas into functional web applications that scale.`}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full dark:bg-[#00D2E0] bg-red-400 px-6 py-3 text-sm font-medium text-white dark:text-black hover:bg-red-500 dark:hover:bg-[#00B8C4] transition-colors"
                >
                  Contact Me
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-transparent border border-red-400 dark:border-[#00D2E0] px-6 py-3 text-sm font-medium text-red-500 dark:text-[#00D2E0] hover:bg-red-50 dark:hover:bg-gray-800 transition-colors"
                >
                  View projects
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">My Expertise</h2>
            <div className="w-20 h-1 bg-red-400 dark:bg-[#00D2E0] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              I specialize in a range of technologies across the full stack development spectrum, with a focus on
              creating scalable and maintainable web applications.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-100 dark:bg-[#00D2E0]/20 rounded-full text-red-500 dark:text-[#00D2E0]">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">{skill.name}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Professional Journey</h2>
            <div className="w-20 h-1 bg-red-400 dark:bg-[#00D2E0] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              My career path in web development, from internship to senior roles.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-12 relative pl-8 md:pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-3 md:left-4 top-6 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-red-400 dark:bg-[#00D2E0] flex items-center justify-center">
                  <Briefcase className="h-3 w-3 text-white dark:text-black" />
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-medium text-red-500 dark:text-[#00D2E0] block mb-1">{exp.period}</span>
                  <h3 className="text-xl font-bold text-black dark:text-white">{exp.title}</h3>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{exp.company}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Education</h2>
            <div className="w-20 h-1 bg-red-400 dark:bg-[#00D2E0] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              My academic background and qualifications.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="mb-12 relative pl-8 md:pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline line */}
                {index < education.length - 1 && (
                  <div className="absolute left-3 md:left-4 top-6 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-red-400 dark:bg-[#00D2E0] flex items-center justify-center">
                  <GraduationCap className="h-3 w-3 text-white dark:text-black" />
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-medium text-red-500 dark:text-[#00D2E0] block mb-1">{edu.period}</span>
                  <h3 className="text-xl font-bold text-black dark:text-white">{edu.degree}</h3>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{edu.institution}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

     
    </main>
  )
}
