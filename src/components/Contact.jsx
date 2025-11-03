import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 -z-[1] h-40 bg-gradient-to-b from-teal-500/10 to-transparent" />
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Let’s build something great</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-300">
          I’m available for freelance work and collaborations. If you have a project in mind or just want to say hi,
          drop a message and I’ll get back to you.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-teal-400 px-4 py-2.5 font-medium text-neutral-900 transition hover:bg-teal-300"
          >
            <Mail size={18} /> Email me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-white transition hover:bg-white/10"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-white transition hover:bg-white/10"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
