'use client';

import { motion, Variants } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  
    {
      title: 'DocuSage – Your Documentation Expert',
      description: `DocuSage is an AI-powered chat agent that learns any technical documentation you provide and becomes a specialized assistant, helping you debug code, understand concepts, and build faster. Built on a RAG pipeline — it scrapes a documentation URL, chunks and embeds the content into a ChromaDB vector database, then uses Google Gemini to answer your questions with full source transparency. Inspired by getting stuck on Qiskit errors!`,
      stack: [
        'Python',
        'Google Gemini 1.5 Flash',
        'LangChain',
        'ChromaDB',
        'SentenceTransformers',
        'Gradio',
        'BeautifulSoup4',
      ],
      github: 'https://github.com/Bhavya445/docu-sage',
      demo: '',
      image: '/docusage.jpeg',
    },
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
    image: '/sust.png',
  },
  {
    title: 'Dealora Marketplace',
    description: `Dealora is a web and mobile platform for seamless second-hand item trading. The web app is wrapped in a WebView for Android and iOS, allowing a native-like experience. Users can create listings, browse available items, and send purchase requests with custom messages.`,
    stack: [
      'React (TypeScript)',
      'Node.js (Express)',
      'Supabase (PostgreSQL)',
    ],
    github: 'https://github.com/Bhavya445/Dealora-Marketplace',
    demo: '',
    image: '/dealora.png',
  },
  {
    title: 'Asha AI – Empowering Women Through AI Support',
    description: `Asha AI is an intelligent, feminist career assistant built using LangChain and Streamlit. It helps women explore job opportunities, join community events, access mentorship, and connect with supportive groups — all through a warm and empowering chatbot interface.`,
    stack: [
      'LangChain',
      'Streamlit',
      'Python',
      'Pinecone',
      'Hugging Face',
      'HerKey APIs',
    ],
    github: 'https://github.com/Bhavya445/asha_ai_bot',
    demo: '',
    image: '/asha.jpg',
  },
  
  {
    title: 'Meeting Audio Summarizer',
    description: `A desktop app that converts meeting audio to text and generates a concise summary using Cohere's LLM. Built with PyQt6 for GUI, it supports multi-format audio, customizable word limits, and real-time summarization.`,
    stack: [
      'Python',
      'Cohere LLM',
      'Google Speech Recognition',
      'PyQt6',
      'Pydub',
    ],
    github: 'https://github.com/Bhavya445/audio_summary',
    demo: '',
    image: '/summary.png',
  },
  {
    title: 'Quantum Random Art Generator',
    description: `An abstract art generator using quantum randomness via Qiskit. It creates colorful, overlapping digital visuals with randomly placed shapes and RGBA color values, producing truly unique artwork each time.`,
    stack: [
      'Python',
      'Qiskit',
      'Qiskit Aer',
      'Matplotlib',
      'NumPy',
    ],
    github: 'https://github.com/Bhavya445/art_generator',
    demo: '',
    image: '/art.png',
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

const cardVariants: Variants = {
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
    <main className="min-h-screen py-16 px-4 md:px-12 lg:px-24 text-[#333] dark:text-[#e5e7eb]">
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
          className="mt-6 text-base text-black font-medium dark:text-gray-300"
        >
          Building ideas that matter, one prototype at a time.
        </motion.p>
      </motion.div>

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
            className="group flex flex-col md:flex-row items-start gap-6 rounded-3xl shadow-xl p-6 backdrop-blur-xl border border-white/50 bg-white/60 hover:bg-white/70 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 transition-all relative"
          >
            <div className="absolute top-0 left-4 right-4 h-1 bg-gradient-to-r from-sky-300 via-gray-400 to-sky-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-lg" />
            <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-sky-300 via-gray-400 to-sky-500 rounded-r-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top shadow-lg" />
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-36 h-auto rounded-xl shadow-md border border-gray-300 dark:border-gray-700 z-10"
              />
            )}
            <div className="flex flex-col flex-1 space-y-3 z-10">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-gray-600 to-sky-600">
                {project.title}
              </h2>
              <p className="text-black dark:text-gray-300">{project.description}</p>
              <p className="text-sm text-black dark:text-gray-400">
                <span className="font-semibold">Stack:</span> {project.stack.join(', ')}
              </p>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline dark:text-sky-300 dark:hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-blue-700 hover:underline dark:text-sky-300 dark:hover:underline"
                  >
                    <FaExternalLinkAlt /> Demo
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