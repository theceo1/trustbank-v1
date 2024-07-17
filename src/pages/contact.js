import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Have questions or need assistance? Reach out to us, and we&apos;ll be happy to help.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" placeholder="Your Email" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-bold">Message</label>
          <textarea id="message" className="w-full p-2 border rounded" placeholder="Your Message" rows="5"></textarea>
        </div>
        <button type="submit" className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600">Send</button>
      </form>
    </div>
  );
};

export default Contact;
