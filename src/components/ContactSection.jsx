import React, { useState } from "react";
import { motion } from "framer-motion";
import Tag from "./Tag";
import Button from "./Button";
import { fadeInUp } from "../lib/motion";

const ContactSection = () => {
  const [form, setForm] = useState({ email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 items-start gap-4">
      {/* Left: Tag, Title, Desc */}
      <motion.div {...fadeInUp} className="mb-8 md:mb-0">
        <Tag>Contact</Tag>
        <div className="mt-4 text-2xl md:text-3xl font-geist font-semibold text-stone-900">
          Let's talk!
        </div>
        <div className="mt-2 text-stone-500 text-base font-inter max-w-xs text-wrap">
          Have a question, want a demo, or just want to say hi? Fill out the
          form and our team will get back to you soon.
        </div>
      </motion.div>
      {/* Right: Form */}
      <motion.form
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.1 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow p-8 flex flex-col gap-6 w-full"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-stone-700 font-inter mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-stone-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none font-inter text-stone-900 bg-stone-50"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-stone-700 font-inter mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-stone-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none font-inter text-stone-900 bg-stone-50 resize-none"
            placeholder="How can we help you?"
          />
        </div>
        <Button type="submit" theme="primary" className="w-full mt-2">
          {submitted ? "Submitted!" : "Send Message"}
        </Button>
      </motion.form>
    </section>
  );
};

export default ContactSection;
