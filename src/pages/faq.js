// src/pages/faq.js

import Link from 'next/link';
import React from 'react';

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold">What is trustBank?</h2>
          <p className="text-gray-500 dark:text-gray-400">
            trustBank is a financial platform dedicated to providing secure and transparent banking solutions for everyone. We offer a range of services from cryptocurrency trading to fiat currency management.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">How can I create an account?</h2>
          <p className="text-gray-500 dark:text-gray-400">
            You can create an account by visiting our <Link href="/signup" legacyBehavior></Link><a  className="text-teal-500 hover:underline">Sign Up</a> page and following the instructions.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">What services do you offer?</h2>
          <p className="text-gray-500 dark:text-gray-400">
            We offer cryptocurrency trading, a secure wallet, and a debit card for easy transactions, among other financial services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
