"use client";
import { useState } from "react";

export function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
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
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 rounded-xl shadow-lg p-8 flex flex-col gap-6 border border-neutral-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-neutral-200 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent font-medium text-lg"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-neutral-200 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent font-medium text-lg"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-neutral-200 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent font-medium text-lg"
          />
        </div>
        <div>
          <label htmlFor="guests" className="block text-neutral-700 font-medium mb-2">
            Guests
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min="1"
            max="20"
            required
            value={form.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-neutral-200 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent font-medium text-lg"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-neutral-700 font-medium mb-2">
            Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            value={form.date}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-neutral-200 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent font-medium text-lg"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-neutral-700 font-medium mb-2">
            Time
          </label>
          <input
            id="time"
            name="time"
            type="time"
            required
            value={form.time}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded border border-neutral-200 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent font-medium text-lg"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded border border-neutral-200 bg-neutral-50 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-accent font-medium text-lg"
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-8 py-3 rounded bg-accent text-white font-semibold text-lg shadow hover:bg-neutral-900 transition-colors"
      >
        {submitted ? "Submitted!" : "Submit Reservation"}
      </button>
    </form>
  );
}
