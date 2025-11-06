import { User, Code2, Cpu } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: Code2, title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind', 'Vite'] },
    { icon: Cpu, title: 'Backend', items: ['FastAPI', 'Node.js', 'MongoDB', 'Prisma'] },
    { icon: User, title: 'Other', items: ['CI/CD', 'Docker', 'Cloud', 'Testing'] },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Passionate engineer with a strong focus on user-centric design and scalable systems. I love turning ideas into products that are fast, accessible, and beautiful.
            </p>
            <p className="mt-3 text-gray-600">
              Currently exploring 3D/interactive interfaces and AI-assisted developer tooling.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-2xl border border-gray-200 p-5 shadow-sm bg-gray-50">
                <div className="flex items-center gap-2 text-indigo-600">
                  <Icon size={18} />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-gray-700">
                  {items.map((it) => (
                    <li key={it} className="leading-6">• {it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
