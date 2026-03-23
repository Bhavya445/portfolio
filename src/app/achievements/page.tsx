'use client';

import { motion, Variants } from 'framer-motion';
import { FaAward, FaMedal, FaStar, FaTrophy, FaCertificate } from 'react-icons/fa';

const achievements = [
  {
    title: 'KrackHack 2.0 – 3rd Place',
    description:
      'Built a mobile/web platform for second-hand item exchange at IIT Mandi with real-time updates and authentication. Organized by Google Developers Group.',
    icon: <FaTrophy className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'SpaceCode Hackathon – 3rd Prize',
    description:
      'Enhanced pulsar detection system achieving 97.35% accuracy using advanced machine learning techniques.',
    icon: <FaStar className="text-purple-500 text-3xl" />,
  },
  {
    title: 'Orion Space Hackathon 2025 – 3rd Prize',
    description:
      'Built "Light Pollution Explorer", an interactive web tool visualizing pollution severity across 28 Indian states with real VIIRS satellite data.',
    icon: <FaMedal className="text-pink-500 text-3xl" />,
  },
  {
    title: 'Qualified JEE Advanced',
    description:
      'Cleared one of the toughest exams in the world – ranked in the top 25k out of 1.1 million aspirants.',
    icon: <FaAward className="text-blue-500 text-3xl" />,
  },
];

const certifications = [
  {
    title: 'Google Cloud Skills Boost',
    link: 'https://www.credly.com/users/bhavya-sunkari.5baa33e5',
  },
  {
    title: 'IBM Quantum Learning',
    link: 'https://www.credly.com/users/bhavya-sunkari.5baa33e5',
  },
];

// Explicitly type your variants for better TS compatibility
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 14 },
  },
};

export default function AchievementsPage() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-12 lg:px-24 text-[#333] dark:text-[#e5e7eb]">
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
          My Achievements
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
          className="mt-6 text-base text-black font-medium dark:text-gray-300"
        >
          A glimpse into moments that made the hustle worth it.
        </motion.p>
      </motion.div>

      {/* ACHIEVEMENT CARDS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group flex items-start gap-5 rounded-3xl shadow-xl p-6 backdrop-blur-xl border border-white/50 bg-white/60 hover:bg-white/70 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 transition-all relative"
          >
            {/* Hover gradient: top */}
            <div className="absolute top-0 left-4 right-4 h-1 bg-gradient-to-r from-sky-300 via-gray-400 to-sky-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-lg" />

            {/* Hover gradient: left */}
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-sky-300 via-gray-400 to-sky-500 rounded-r-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top shadow-lg" />

            {/* ICON */}
            <div className="z-10">{item.icon}</div>

            {/* CONTENT */}
            <div className="flex flex-col space-y-2 z-10">
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-gray-600 to-sky-600">
                {item.title}
              </h2>
              <p className="text-sm text-black dark:text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CERTIFICATIONS SECTION */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-16 flex flex-col gap-6"
      >
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="group flex items-start gap-4 rounded-3xl shadow-xl p-6 backdrop-blur-xl border border-white/50 bg-white/60 hover:bg-white/70 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 transition-all relative"
          >
            {/* Hover gradient: top */}
            <div className="absolute top-0 left-4 right-4 h-1 bg-gradient-to-r from-sky-300 via-gray-400 to-sky-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-lg" />

            {/* Hover gradient: left */}
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-sky-300 via-gray-400 to-sky-500 rounded-r-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top shadow-lg" />

            {/* ICON */}
            <div className="z-10">
              <FaCertificate className="text-gray-500 text-3xl" />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col space-y-2 z-10">
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-gray-600 to-sky-600">
                {cert.title}
              </h2>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline dark:text-sky-300 dark:hover:underline"
              >
                View Credential
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
