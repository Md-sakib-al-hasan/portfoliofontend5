"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Layers, Monitor, GraduationCap, Briefcase, Code, Layout, Globe } from "lucide-react"
import sakib from "../../../public/sakib3.png"
import { getalldata } from "@/components/hooks/getalldata"
import { toast } from "sonner"
import {  useCallback, useEffect, useState } from "react"
import { TCourse, TEducation } from "@/types"

export default function AboutPage() {

  const [courses,setcourse] = useState<TCourse[] | []>([]);
  const [education,seteducation] = useState<TEducation[] | []>([]);



  const fetchData = useCallback(async () => {
    try {
      const data = await getalldata("des", undefined, "/course/get-all-courses");
      const result = await getalldata("des", undefined, "/education/get-all-educations");

      if (!data || !result) {
        toast.error("Something is wrong");
        return;
      }

      setcourse(data?.reulst || []);
      seteducation(result?.reulst || []);
    } catch (error) {
      toast.error((error as Error).message || "Something is wrong");
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);


  const skills = [
    {
      name: "Frontend Development",
      icon: <Monitor className="h-6 w-6" />,
      description: "HTML, CSS, JavaScript, React.js, Next.js",
    },
    {
      name: "CSS Frameworks",
      icon: <Layout className="h-6 w-6" />,
      description: "Tailwind CSS, Bootstrap",
    },
    {
      name: "TypeScript",
      icon: <Code className="h-6 w-6" />,
      description: "Type-safe JavaScript development",
    },
    {
      name: "Responsive Design",
      icon: <Globe className="h-6 w-6" />,
      description: "Cross-Browser Compatibility",
    },
    {
      name: "Version Control",
      icon: <Layers className="h-6 w-6" />,
      description: "Git, GitHub",
    },
  ]

  const experiences = [
    {
      title: "Web Design Intern",
      company: "Creative IT Institute",
      period: "Industrial Attachment",
      description:
        "Gained practical experience in front-end development, focusing on HTML, CSS, and JavaScript. Collaborated on projects to develop responsive and user-friendly web pages. Enhanced skills in design frameworks such as Tailwind CSS and Bootstrap to create visually appealing layouts.",
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
                      alt="Sakib Al Hasan"
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
                  SAKIB <span className="dark:text-[#00D2E0] text-red-400">AL HASAN</span>
                </motion.h1>
                <motion.h2
                  className="text-2xl md:text-left md:text-3xl text-center font-semibold text-black dark:text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Junior Web Developer
                </motion.h2>
              </div>
              <motion.p
                className="dark:text-gray-300 text-gray-700 md:text-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Junior Web Developer with expertise in HTML, CSS, Tailwind CSS, JavaScript, React, and TypeScript.
                Skilled in creating responsive, dynamic interfaces and leveraging frameworks for streamlined
                functionality. Eager to contribute to innovative projects in a collaborative team environment.
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
                  View Projects
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="w-full py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Contact</h2>
            <div className="w-20 h-1 bg-red-400 dark:bg-[#00D2E0] mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-3 max-w-3xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center"
              variants={item}
            >
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Phone</h3>
              <p className="text-gray-700 dark:text-gray-300">01625457343</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center"
              variants={item}
            >
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Email</h3>
              <p className="text-gray-700 dark:text-gray-300 break-all">md.sakib.al.hasan.programmer@gmail.com</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center"
              variants={item}
            >
              <h3 className="text-lg font-semibold text-black dark:text-white mb-2">Location</h3>
              <p className="text-gray-700 dark:text-gray-300">Jamgora, Ashulia, Savar, Dhaka</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Skills</h2>
            <div className="w-20 h-1 bg-red-400 dark:bg-[#00D2E0] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              I specialize in a range of technologies for web development, with a focus on creating responsive and
              user-friendly interfaces.
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
      <section id="experience" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Industrial Attachment</h2>
            <div className="w-20 h-1 bg-red-400 dark:bg-[#00D2E0] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              My practical experience in web development.
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
      <section id="education" className="w-full py-16 md:py-24">
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
                  <span className="text-sm font-medium text-red-500 dark:text-[#00D2E0] block mb-1">{edu.year}</span>
                  <h3 className="text-xl font-bold text-black dark:text-white">{edu.degree}</h3>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{edu.institution}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Courses</h2>
            <div className="w-20 h-1 bg-red-400 dark:bg-[#00D2E0] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              Professional development and specialized training.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="mb-12 relative pl-8 md:pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline line */}
                {index < courses.length - 1 && (
                  <div className="absolute left-3 md:left-4 top-6 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-red-400 dark:bg-[#00D2E0] flex items-center justify-center">
                  <GraduationCap className="h-3 w-3 text-white dark:text-black" />
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-medium text-red-500 dark:text-[#00D2E0] block mb-1">
                    {course.period}
                  </span>
                  <h3 className="text-xl font-bold text-black dark:text-white">{course.name}</h3>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{course.provider}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{course.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}



