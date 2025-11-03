import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold tracking-tight text-white">
          dev<span className="text-teal-400">.portfolio</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          <a href="#projects" className="text-sm text-neutral-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-sm text-neutral-300 hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-neutral-300 transition hover:bg-white/5 hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-neutral-300 transition hover:bg-white/5 hover:text-white"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
