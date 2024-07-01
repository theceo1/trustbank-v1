// src/pages/blog.js

import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">TrustBank Blog</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Welcome to the TrustBank Blog. Here, we share the latest updates on the crypto market, insights into the financial industry, and news about our company&apos;s activities and initiatives.
      </p>
      <div className="space-y-4">
        <article>
          <h2 className="text-2xl font-semibold mb-2">The Future of Cryptocurrency</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Stay updated with the latest trends and predictions for the future of cryptocurrency. Our experts share their insights on how the market is evolving and what to expect in the coming years.
          </p>
        </article>
        <article>
          <h2 className="text-2xl font-semibold mb-2">TrustBank Initiatives</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Learn about the latest initiatives and projects we are working on to improve our services and support our users. From new features to community events, stay informed about what&apos;s happening at TrustBank.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Welcome to the TrustBank blog! Here, you&apos;ll find the latest updates on the crypto market, as well as news and insights from our company. Stay tuned for expert analysis, company announcements, and tips to help you make the most of your financial journey.
      </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;
