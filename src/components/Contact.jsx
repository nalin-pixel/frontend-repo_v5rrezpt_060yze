import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in touch</h2>
            <p className="mt-3 text-gray-600">Have a project in mind or just want to say hi? Let’s connect.</p>
            {status && (
              <div className="mt-4 rounded-md bg-green-50 text-green-700 px-4 py-3 border border-green-200">
                {status}
              </div>
            )}
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-gray-50">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" required />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-semibold shadow hover:bg-indigo-700"
              >
                <Send size={16} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
