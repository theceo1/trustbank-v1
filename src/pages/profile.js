import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="text-gray-700 dark:text-gray-300 mb-8">
        <Image
          src="/images/user/user-06.png"
          alt="profile"
          width={200}
          height={200}
          className="rounded-full"
        />
        <h2 className="text-2xl">Danish Heilium</h2>
        <p>UI/UX Designer</p>
      </div>
      <Link href="/dashboard" className="text-teal-500 hover:underline">
        Go To Dashboard
      </Link>
    </div>
  );
};

export default Profile;
