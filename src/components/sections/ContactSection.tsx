"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully");

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        alert(data.message);
      }

    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="text-zinc-400 mt-4">
            Tell us about your project and our team will contact you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 outline-none"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 outline-none"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 outline-none"
          >
            <option value="">Select Service</option>
            <option>Website Development</option>
            <option>App Development</option>
            <option>SEO Optimization</option>
            <option>Website Redesign</option>
            <option>Website Maintenance</option>
          </select>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 outline-none"
          >
            <option value="">Project Budget</option>
            <option>₹5k - ₹25k</option>
            <option>₹10k - ₹25k</option>
            <option>₹25k - ₹50k</option>
            <option>₹50k+</option>
          </select>

          <textarea
            name="message"
            rows={6}
            placeholder="Tell us about your project..."
            required
            value={formData.message}
            onChange={handleChange}
            className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-white text-black font-semibold py-4 rounded-xl hover:scale-[1.02] transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}