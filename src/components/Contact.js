import React from 'react';

function Contact() {
  return (
    <section id="contact" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold text-amber-500 mb-6">Contact</h2>
      <div className="max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 bg-gray-800 text-white rounded" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 bg-gray-800 text-white rounded" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 bg-gray-800 text-white rounded" required></textarea>
          </div>
          <button type="submit" className="w-full bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600 transition-colors">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

