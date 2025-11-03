import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative mx-auto max-w-7xl px-6 pt-10 md:pt-16 lg:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
            <Rocket size={14} className="text-teal-300" />
            App Developer • Interactive & Performant
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            I build delightful apps that feel fast, polished, and playful.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
            From prototypes to production, I craft modern mobile and web experiences with a focus on smooth interactions, clean architecture, and maintainable code.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-teal-400 px-5 py-2.5 font-medium text-neutral-900 transition hover:bg-teal-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/10 bg-white/5 px-5 py-2.5 font-medium text-white transition hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="relative h-[420px] w-full md:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-xl border border-white/10 bg-black/20 shadow-xl">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* soft glow overlay that doesn't block interactions */}
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-teal-400/10 via-fuchsia-400/5 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
