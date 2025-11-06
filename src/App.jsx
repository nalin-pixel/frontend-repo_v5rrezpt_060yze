import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">Rizal<span className="text-indigo-600">.</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-semibold hover:bg-indigo-700">Hire Me</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Mohammad Rizal Agustiawan. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-indigo-600">Privacy</a>
            <a href="#" className="hover:text-indigo-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
