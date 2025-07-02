'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'SustainX',
    description: `SustainX is a smart sustainability app built for campus environments. It empowers students and institutions to monitor real-time electricity usage, air quality, and personal carbon footprint. It also includes EcoAI, an AI chatbot that suggests sustainable actions, and a news module that fetches up-to-date environmental news using APIs. With integrated IoT support via NodeMCU, users can remotely control energy consumption.`,
    stack: [
      'Flutter',
      'Firebase (Auth + Storage)',
      'Gemini AI',
      'Air Quality APIs',
      'News APIs',
      'NodeMCU',
    ],
    github: 'https://github.com/Bhavya445/sustainX',
    demo: 'https://drive.google.com/drive/folders/1jp_IASbSIMQF8FFF3a0K4CrohQv0uEmR',
    image: '/sust.png', // Ensure this image is in your /public folder
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-12 lg:px-24 text-[#333]">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className="text-center mb-16"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-500 via-gray-600 to-sky-600 bg-clip-text text-transparent mb-5"
        >
          My Projects
        </motion.h1>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100px', opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-1.5 bg-gradient-to-r from-sky-300 via-gray-400 to-sky-400 mx-auto rounded-full shadow-lg"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-base text-gray-600 font-medium"
        >
          Building ideas that matter, one prototype at a time.
        </motion.p>
      </motion.div>

      {/* PROJECT CARDS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group flex flex-col md:flex-row items-start gap-6 rounded-3xl shadow-xl p-6 backdrop-blur-xl border border-white/50 bg-white/60 hover:bg-white/70 transition-all relative"
          >
            {/* Hover gradient border: top */}
            <div className="absolute top-0 left-4 right-4 h-1 bg-gradient-to-r from-sky-300 via-gray-400 to-sky-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-lg" />

            {/* Hover gradient border: left */}
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-sky-300 via-gray-400 to-sky-500 rounded-r-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top shadow-lg" />

            {/* IMAGE LEFT */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-36 h-auto rounded-xl shadow-md border border-gray-300 z-10"
              />
            )}

            {/* CONTENT RIGHT */}
            <div className="flex flex-col flex-1 space-y-3 z-10">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-gray-600 to-sky-600">
                {project.title}
              </h2>

              <p className="text-gray-700">{project.description}</p>

              <p className="text-sm text-gray-600">
                <span className="font-semibold">Stack:</span> {project.stack.join(', ')}
              </p>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline"
                  >
                    <FaExternalLinkAlt /> APK + Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
