import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const splineScene = 'https://prod.spline.design/N7q4xS9W9b3z2z0R/scene.splinecode';

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-700 mb-6">
              <Rocket size={16} />
              <span className="text-sm font-medium">Elevating ideas into experiences</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Mohammad Rizal Agustiawan
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
              Software Engineer focused on building delightful web experiences with React, TypeScript, and modern cloud-native architectures.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700 transition-colors"
              >
                View Projects
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 hover:bg-gray-50 shadow-sm"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 hover:bg-gray-50 shadow-sm"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50">
            <Spline scene={splineScene} style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
