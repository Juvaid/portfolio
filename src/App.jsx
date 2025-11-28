import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Youtube,
  Instagram,
  ExternalLink,
  Menu,
  X,
  Palette,
  Video,
  Code,
  Smartphone,
  ChevronDown,
  Bot, // <--- Added Bot icon for AI
} from 'lucide-react';

// --- Data Section ---

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const SKILLS = [
  { name: 'AI Prompt Engineering', icon: <Bot size={20} />, level: 'Advanced' }, // <--- Added AI Skill
  { name: 'Adobe Photoshop', icon: <Palette size={20} />, level: 'Expert' },
  { name: 'Davinci Resolve', icon: <Video size={20} />, level: 'Advanced' },
  { name: 'Premiere Pro', icon: <Video size={20} />, level: 'Advanced' },
  { name: 'Graphic Design', icon: <Palette size={20} />, level: 'Expert' },
  { name: 'Video Editing', icon: <Video size={20} />, level: 'Expert' },
  {
    name: 'HTML & Basic Code',
    icon: <Code size={20} />,
    level: 'Intermediate',
  },
  {
    name: 'Technical Troubleshooting',
    icon: <Smartphone size={20} />,
    level: 'Advanced',
  },
];

const PROJECTS = [
  {
    id: 1,
    title: 'Viral Thumbnail Design',
    category: 'Graphic Design',
    description:
      'High-CTR thumbnail designs replicating top creator styles like Dhruv Rathee. Focus on typography, compositing, and visual storytelling.',
    tags: ['Photoshop', 'Branding', 'CTR'],
    // Using a placeholder that represents the "India is Burning" concept from resume
    image:
      'https://placehold.co/600x400/1a1a1a/e11d48?text=Viral+Thumbnail+Design',
    link: 'https://ytjobs.co/talent/profile/407137?r=243&t=tnp',
  },
  {
    id: 2,
    title: '3D Minecraft Renders',
    category: '3D Art',
    description:
      'Custom 3D character renders and environment design for "One Heart SMP". Creating immersive gaming assets and cover art.',
    tags: ['Blender', '3D', 'Gaming'],
    // Placeholder for Minecraft art
    image:
      'https://placehold.co/600x400/0f172a/22d3ee?text=3D+Minecraft+Renders',
    link: '#',
  },
  {
    id: 3,
    title: 'Tech Product Reviews',
    category: 'Video Production',
    description:
      'Full production tech reviews for products like Kreo webcams and Android projectors. Scripting, filming, and editing.',
    tags: ['Premiere Pro', 'Tech', 'Review'],
    // Placeholder for Tech reviews
    image:
      'https://placehold.co/600x400/171717/fbbf24?text=Tech+Product+Reviews',
    link: 'https://www.youtube.com/@juvaidpb13',
  },
  {
    id: 4,
    title: 'Software Tutorials',
    category: 'Educational Content',
    description:
      'Clear, concise tutorials for software like Scrcpy GUI. Focusing on pacing and visual clarity for complex technical topics.',
    tags: ['Davinci Resolve', 'Tutorial', 'Software'],
    // Placeholder for tutorials
    image: 'https://placehold.co/600x400/020617/4ade80?text=Software+Tutorials',
    link: 'https://www.youtube.com/@juvaidpb13',
  },
];

const EXPERIENCE = [
  {
    role: '3D Graphic Designer',
    company: 'Alpthaquad Ventures LLP',
    period: '07/2025 - Present',
    description:
      'Specializing in 3D modeling, rendering, and visual content creation.',
    current: true,
  },
  {
    role: 'Freelance Video & Graphics Designer',
    company: 'Self-Employed',
    period: '03/2024 - 06/2025',
    description:
      'Creating high-quality graphic designs and video content for diverse clients using Adobe Suite and Davinci Resolve.',
    current: false,
  },
  {
    role: 'Air-Fiber Installation Engineer',
    company: 'Reliance Jio',
    period: '01/2025 - 03/2025',
    description:
      'Technical role involving installation, troubleshooting, and resolving issues related to air fiber devices at customer premises.',
    current: false,
  },
  {
    role: 'Field Sales Executive',
    company: 'Reliance Jio',
    period: '02/2023 - 02/2024',
    description:
      'Conducted market research, competitor analysis, and assisted in launching new products to drive revenue growth.',
    current: false,
  },
  {
    role: 'Sales Associate',
    company: 'Grewal Mobile Hub',
    period: '01/2021 - 03/2023',
    description:
      'Managed sales transactions, inventory records, and provided excellent customer service for mobile technology products.',
    current: false,
  },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-2xl tracking-tighter text-white">
            JUVAID<span className="text-red-500">.</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-red-500 font-medium tracking-widest text-sm md:text-base uppercase animate-fade-in-up">
            Video Editor & Graphics Designer
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white mb-6">
            JUVAID KHAN
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
            Crafting compelling visuals and immersive video content. Turning
            complex ideas into viral-ready thumbnails and engaging edits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              Work With Me <Mail size={18} />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              View Portfolio
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-12 text-gray-500">
            <a
              href="https://www.youtube.com/@juvaidpb13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <Youtube size={28} />
            </a>
            <a
              href="https://instagram.com/juva1d"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <Instagram size={28} />
            </a>
            <a
              href="mailto:juvaidjhuner@gmail.com"
              className="hover:text-white transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-gray-400 max-w-2xl">
            A showcase of thumbnails, video edits, and graphic design projects
            spanning gaming, tech reviews, and viral content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 bg-red-600 text-white rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-500 bg-black/50 px-2 py-1 rounded border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:text-red-400 transition-colors"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-black text-white border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold mb-6">Technical Arsenal</h2>
            <p className="text-gray-400 mb-8">
              My workflow relies on industry-standard tools for video editing
              and graphic design. I am constantly learning new software to stay
              ahead of creative trends.
            </p>
            <div className="p-6 bg-zinc-900 rounded-xl border border-white/10">
              <h4 className="font-bold text-lg mb-2">Language Proficiency</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>English</span>
                  <span className="text-gray-400">Professional</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Hindi</span>
                  <span className="text-gray-400">Native</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Punjabi</span>
                  <span className="text-gray-400">Native</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-zinc-900/50 hover:bg-zinc-800 rounded-xl border border-white/5 transition-colors"
                >
                  <div className="p-3 bg-red-600/10 text-red-500 rounded-lg mr-4">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-bold">{skill.name}</h3>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work History</h2>
          <p className="text-gray-400">
            My professional journey from sales to creative direction.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-px bg-white/10"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((job, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 top-0 transform md:-translate-x-1/2 w-2.5 h-2.5 bg-red-500 rounded-full border-4 border-black z-10"></div>

                {/* Content */}
                <div className="ml-6 md:ml-0 md:w-1/2 px-4">
                  <div
                    className={`p-6 rounded-2xl border border-white/5 bg-zinc-900/40 hover:bg-zinc-900 transition-colors ${
                      job.current ? 'border-red-500/30' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                        {job.period}
                      </span>
                      {job.current && (
                        <span className="px-2 py-0.5 text-[10px] bg-red-500 text-white rounded-full">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                    <h4 className="text-gray-400 text-sm mb-4">
                      {job.company}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute -top-[20%] right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">
          Let's Create Something <span className="text-red-600">Legendary</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Available for freelance video editing and graphic design projects.
          Check out my profiles below or drop me an email.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <a
            href="mailto:juvaidjhuner@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform"
          >
            <Mail size={20} />
            juvaidjhuner@gmail.com
          </a>
          <div className="flex gap-4">
            <a
              href="https://www.youtube.com/@juvaidpb13"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-zinc-900 rounded-xl hover:text-red-500 hover:bg-zinc-800 border border-white/10 transition-all"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://instagram.com/juva1d"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-zinc-900 rounded-xl hover:text-pink-500 hover:bg-zinc-800 border border-white/10 transition-all"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Juvaid Khan. All Rights Reserved.
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Jhuner, Malerkotla Road, Punjab, India
          </p>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      <Hero />
      <Portfolio />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
