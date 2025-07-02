'use client';

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-[#333] font-[Poppins]">
      <h1 className="text-4xl font-semibold mb-8 text-slate-600">My Resume</h1>

      <a
        href="https://drive.google.com/drive/folders/16m4s69rXr_jJvn_YE8GXFQkv0YgnsmcQ?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-sky-400 via-gray-500 to-sky-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:from-sky-500 hover:to-sky-700 transition-all duration-300"
      >
        View Resume
      </a>
    </div>
  );
}
