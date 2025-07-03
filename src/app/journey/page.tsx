'use client';

import { motion, Variants } from 'framer-motion';
import {
  FaUniversity,
  FaBookReader,
  FaChalkboardTeacher,
  FaMicroscope,
  FaStar,
  FaRocket,
  FaAward,
  FaUserFriends,
} from 'react-icons/fa';

const journey = [
  {
    year: 'July 2025',
    title: 'Qiskit Global Summer School & SheFi Scholar',
    description:
      'Selected for Qiskit’s prestigious summer school and as a SheFi Scholar—focusing on Web3 and crytpography.',
    icon: <FaRocket className="text-purple-500 text-xl" />,
  },
  {
    year: 'June 2025',
    title: 'Womanium Scholar',
    description:
      'Selected as a Womanium Scholar, diving into quantum computing, entrepreneurship, and future technologies.',
    icon: <FaAward className="text-pink-500 text-xl" />,
  },
  {
    year: 'Feb 2025',
    title: 'SheCodes Scholar',
    description:
      'Chosen as a SheCodes Scholar for my passion and work in tech. Focused on growing my skills in AI and community-driven projects.',
    icon: <FaStar className="text-fuchsia-500 text-xl" />,
  },
  {
    year: 'Dec 2024',
    title: 'Winter Research Intern – IIT Mandi',
    description:
      'Worked under Dr. Ravindra on quantum dots. Reviewed scientific papers, drafted a review, and conducted hands-on experiments.',
    icon: <FaMicroscope className="text-blue-600 text-xl" />,
  },
  {
    year: 'June 2024',
    title: 'JEE Mentor – PhysicsWallah',
    description:
      'Mentored JEE aspirants, helped them strengthen concepts and stay motivated during prep season.',
    icon: <FaChalkboardTeacher className="text-yellow-500 text-xl" />,
  },
  {
    year: 'April 2024',
    title: 'Media Volunteer – Miraz Fest',
    description:
      'Handled media coverage and coordination during IIT Mandi’s cultural-sports-tech fest, Miraz.',
    icon: <FaUserFriends className="text-red-500 text-xl" />,
  },
  {
    year: 'Oct 2023',
    title: 'Sub-Councilor – UG Academic Council',
    description:
      'Began representing my branch in the UG Academic Council, contributing to academic decisions and student issues.',
    icon: <FaBookReader className="text-sky-600 text-xl" />,
  },
  {
    year: 'Aug 2023',
    title: 'Joined IIT Mandi – B.Tech',
    description:
      'Started my B.Tech in Materials Science and Engineering with a minor in Computer Science.',
    icon: <FaUniversity className="text-green-600 text-xl" />,
  },
];

// Explicitly type all variants for Framer Motion v7+ compatibility
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
};

export default function JourneyPage() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-12 lg:px-24 text-[#333]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className="text-center mb-16"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-500 via-gray-600 to-sky-600 bg-clip-text text-transparent mb-5"
        >
          My Journey
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
          Tracing the steps that shaped my tech journey.
        </motion.p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative pl-6 border-l-2 border-slate-300 space-y-10"
      >
        {journey.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative flex gap-4 items-start group"
          >
            {/* Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-sky-300 via-gray-400 to-sky-500 border-2 border-white shadow-lg" />

            {/* Icon */}
            <div className="p-2 bg-white border border-gray-200 rounded-xl shadow-md">
              {step.icon}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg font-semibold text-sky-700">{step.year}</h3>
              <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-gray-600 to-sky-600 mb-1">
                {step.title}
              </h4>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
