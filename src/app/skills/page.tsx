'use client';

import { motion, Variants } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiHtml5, SiCss3, SiQiskit,
  SiReact, SiNextdotjs, SiTailwindcss, SiFlutter, SiFirebase, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
  SiMysql, SiPostgresql, SiMongodb, SiSupabase, SiGooglecloud,
  SiFigma, SiCanva, SiKeras, SiDjango, SiFlask, SiGithub, SiNodedotjs
} from 'react-icons/si';
import { FaCamera, FaPenNib, FaSwimmer, FaTableTennis, FaPalette, FaDatabase, FaJava } from 'react-icons/fa';

const sections = [
  {
    title: 'Languages',
    skills: [
      { icon: <SiPython color="#3776AB" />, name: 'Python' },
      { icon: <FaJava color="#007396" />, name: 'Java' },
      { icon: <SiCplusplus color="#00599C" />, name: 'C++' },
      { icon: <SiJavascript color="#F7DF1E" />, name: 'JavaScript' },
      { icon: <SiTypescript color="#3178C6" />, name: 'TypeScript' },
      { icon: <SiHtml5 color="#E34F26" />, name: 'HTML' },
      { icon: <SiCss3 color="#1572B6" />, name: 'CSS' },
      { icon: <FaDatabase color="#f29111" />, name: 'SQL' },
      { icon: <SiQiskit color="#6929c4" />, name: 'Qiskit' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { icon: <SiReact color="#61DAFB" />, name: 'React' },
      { icon: <SiNextdotjs color="#000" />, name: 'Next.js' },
      { icon: <SiTailwindcss color="#38B2AC" />, name: 'Tailwind' },
      { icon: <SiFlutter color="#02569B" />, name: 'Flutter' },
      { icon: <SiFirebase color="#FFCA28" />, name: 'Firebase' },
      { icon: <SiTensorflow color="#FF6F00" />, name: 'TensorFlow' },
      { icon: <SiScikitlearn color="#F7931E" />, name: 'Scikit-learn' },
      { icon: <SiPandas color="#150458" />, name: 'Pandas' },
      { icon: <SiNumpy color="#013243" />, name: 'NumPy' },
      { icon: <SiKeras color="#D00000" />, name: 'Keras' },
      { icon: null, name: 'Seaborn' },
      { icon: null, name: 'Matplotlib' },
      { icon: <SiDjango color="#092E20" />, name: 'Django' },
      { icon: <SiFlask color="#000000" />, name: 'Flask' },
      { icon: <SiNodedotjs color="#339933" />, name: 'Node.js' },
      { icon: null, name: 'Streamlit' },
    ],
  },
  {
    title: 'Databases & Cloud',
    skills: [
      { icon: <SiMysql color="#4479A1" />, name: 'MySQL' },
      { icon: <SiPostgresql color="#336791" />, name: 'PostgreSQL' },
      { icon: <SiMongodb color="#47A248" />, name: 'MongoDB' },
      { icon: <SiSupabase color="#3ECF8E" />, name: 'Supabase' },
      { icon: <SiGooglecloud color="#4285F4" />, name: 'Google Cloud' },
      { icon: null, name: 'AWS' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { icon: <SiFigma color="#F24E1E" />, name: 'Figma' },
      { icon: <SiCanva color="#00C4CC" />, name: 'Canva' },
      { icon: <SiGithub color="#181717" />, name: 'GitHub' },
    ],
  },
  {
    title: 'Beyond Tech',
    skills: [
      { icon: <FaCamera color="#555" />, name: 'Photography' },
      { icon: <FaPenNib color="#555" />, name: 'Writing' },
      { icon: <FaTableTennis color="#555" />, name: 'Badminton' },
      { icon: <FaSwimmer color="#555" />, name: 'Swimming' },
      { icon: <FaPalette color="#555" />, name: 'Art' },
    ],
  },
  {
    title: 'Relevant Coursework',
    skills: [
      { icon: null, name: 'Data Structures and Algorithms' },
      { icon: null, name: 'Intro to Data Science and Python' },
      { icon: null, name: 'Probability and Statistics' },
      { icon: null, name: 'Machine Learning' },
      { icon: null, name: 'Quantum Mechanics' },
      { icon: null, name: 'Linear Algebra' },
      { icon: null, name: 'Ordinary Differential Equations' },
      { icon: null, name: 'Real Number Analysis' },
      { icon: null, name: 'Complex and Vector Algebra' },
    ],
  },
];

// Explicitly type all variants for Framer Motion v7+ compatibility
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
    rotateX: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15,
      duration: 0.8,
    },
  },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
};

const skillContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-12 lg:px-24 text-[#333]">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className="text-center mb-16"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-500 via-gray-600 to-sky-600 bg-clip-text text-transparent mb-5"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          My Skillset
        </motion.h1>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100px', opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
          className="h-1.5 bg-gradient-to-r from-sky-300 via-gray-400 to-sky-400 mx-auto rounded-full shadow-lg"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-6 text-base text-gray-600 font-medium"
        >
          Crafting digital experiences with passion and precision
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {sections.map((section) => (
          <motion.div
            key={section.title}
            variants={cardVariants}
            whileHover={{ y: -12, scale: 1.02, rotateY: 5 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="group relative rounded-3xl shadow-xl p-8 backdrop-blur-lg border border-white/60 bg-white/70 overflow-hidden"
          >
            <div className="absolute top-0 left-4 right-4 h-1 bg-gradient-to-r from-sky-300 via-gray-400 to-sky-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-lg" />
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-sky-300 via-gray-400 to-sky-500 rounded-r-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top shadow-lg" />

            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-gray-600 to-sky-600 mb-6 relative z-10">{section.title}</h2>
            <motion.div
              variants={skillContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 relative z-10"
            >
              {section.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{ scale: 1.08, y: -4, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/skill relative flex items-center gap-2 px-4 py-2 rounded-xl border border-pink-200 shadow-md bg-white/90 hover:bg-pink-50 transition-all overflow-hidden"
                >
                  <div className="relative flex-shrink-0 group-hover/skill:scale-110 transition-transform duration-300">
                    {skill.icon}
                    <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover/skill:opacity-20 blur-md transition-opacity duration-300" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 group-hover/skill:text-gray-900 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700 ease-out" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
