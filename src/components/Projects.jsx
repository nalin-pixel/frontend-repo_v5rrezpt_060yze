import { ExternalLink, Layout, Globe, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    desc: 'Immersive personal website with 3D scenes and smooth micro-interactions.',
    tags: ['React', 'Spline', 'Framer Motion'],
    url: '#',
    icon: Globe,
  },
  {
    title: 'E-commerce Dashboard',
    desc: 'Analytics dashboard with real-time sales, cohorts, and funnel insights.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    url: '#',
    icon: Layout,
  },
  {
    title: 'Mobile Design System',
    desc: 'Reusable UI kit for rapid product prototyping on mobile.',
    tags: ['TypeScript', 'Tailwind'],
    url: '#',
    icon: Smartphone,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Projects</h2>
          <a href="#contact" className="text-indigo-600 font-medium hover:text-indigo-700">
            Let’s collaborate
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(({ title, desc, tags, url, icon: Icon }) => (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 text-indigo-600">
                <Icon size={20} />
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-2 text-gray-600">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full border border-indigo-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-indigo-600">
                <span className="font-medium">Preview</span>
                <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
