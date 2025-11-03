import React from 'react';
import { ExternalLink, Github, Smartphone, Code } from 'lucide-react';

const projects = [
  {
    title: 'FlowTask — Productivity App',
    description:
      'A cross-platform task manager with offline-first sync, gesture-driven interactions, and beautiful transitions.',
    tags: ['React Native', 'Expo', 'SQLite'],
    links: { demo: '#', code: '#' },
    icon: <Smartphone className="h-5 w-5 text-teal-300" />,
  },
  {
    title: 'PulseFit — Fitness Tracker',
    description:
      'Track workouts, visualize progress, and stay motivated with streaks. Built with a clean, modular architecture.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    links: { demo: '#', code: '#' },
    icon: <Code className="h-5 w-5 text-teal-300" />,
  },
  {
    title: 'Café Finder — Local Discovery',
    description:
      'Discover nearby cafés with maps, reviews, and wishlists. Optimized for performance and accessibility.',
    tags: ['Next.js', 'TypeScript', 'Maps API'],
    links: { demo: '#', code: '#' },
    icon: <Smartphone className="h-5 w-5 text-teal-300" />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Featured Projects</h2>
          <p className="mt-2 text-sm text-neutral-400">
            A few things I’ve shipped recently. I love building polished, interactive apps.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 md:inline-flex"
        >
          Work with me
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 transition hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                {p.icon}
              </div>
              <h3 className="text-lg font-medium text-white">{p.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={p.links.demo}
                className="inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200"
              >
                <ExternalLink size={16} /> Live demo
              </a>
              <a
                href={p.links.code}
                className="inline-flex items-center gap-1 text-sm text-neutral-300 hover:text-white"
              >
                <Github size={16} /> Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
