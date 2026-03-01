"use client";

import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send data to your backend or 3rd party service
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section 
      className="relative w-full py-20 md:py-32"
      style={{
        backgroundImage: "url('https://static.wixstatic.com/media/511aa7_e274d44a45ab468f90f942fcc9c1cc55~mv2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#8B1A1A'
      }}
    >
      <div className="max-w-2xl mx-auto px-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <div>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-md bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-ladong-cream font-medium text-lg"
            />
          </div>
          
          <div>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-md bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-ladong-cream font-medium text-lg"
            />
          </div>

          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-md bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-ladong-cream font-medium text-lg"
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Message"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-6 py-4 rounded-md bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-ladong-cream font-medium text-lg resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="w-full px-8 py-4 rounded-md bg-ladong-dark-red text-white font-bold text-lg shadow-lg hover:bg-ladong-red transition-colors disabled:opacity-50"
          >
            {submitted ? "SUBMITTED!" : "SUBMIT FORM"}
          </button>
        </form>
      </div>
    </section>
  );
}
