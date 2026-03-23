export default function Home() {
  return (
    <section className="px-6 py-10 flex flex-col items-center text-center space-y-6 min-h-screen">
      <img
        src="/me.jpeg"
        alt="Bhavya"
        className="w-48 h-48 rounded-xl shadow-lg border border-[#ccc] dark:border-gray-700 object-cover"
      />

      {/* Glassmorphic card - NO CHANGES MADE TO STYLING */}
      <div className="relative max-w-3xl rounded-2xl border-2 border-slate-400 bg-white/30 dark:border-slate-700 dark:bg-white/5 backdrop-blur-xl shadow-xl">
        <div className="rounded-[14px] px-6 py-6 leading-relaxed">
          {/* - text-[#000000] forces absolute black (no grey tints)
            - font-extrabold (800 weight) ensures the letters don't get lost in the blur
          */}
          <p className="text-lg text-[#111111]  dark:text-black">
            <span className="text-3xl font-[900] block mb-2">Hey there,</span><br />
            First off, thank you for opening this and taking the time to get to know me.
            So yeah, I’m just another human thriving on this planet—curious, a little restless, and always questioning everything. I like to find the why behind things, and I’m constantly exploring the many ways technology can improve our lives.
            I’ve dabbled in Web Development, App Development, AI, Machine Learning, Cryptography, Quantum Computing, Material modeling and simulation, UI/UX design—you name it. I enjoy experimenting across domains and finding connections between them.
            I love challenging myself—the adrenaline rush of pushing limits genuinely makes me happy. That’s probably why I enjoy taking part in hackathons so much. There’s something incredibly fun about teaming up with others to brainstorm solutions, build prototypes from scratch, and bring ideas to life under pressure.
            When I’m not playing around with tech, I’m probably reading about the universe (especially how it all began—yes, I’m a Big Bang theory nerd), staring at the stars, or getting lost in novels. I also enjoy photography, writing occasionally, and running around—literally. I also love playing badminton.<br /><br />
            My ultimate goal? To travel the world—maybe even space if I’m lucky—and leave this place a little better than I found it.<br /><br />
            Feel free to reach out—whether it’s for a tech chat, a hackathon, a book recommendation, or just to share cool sky photos.
          </p>
        </div>
      </div>
    </section>
  );
}