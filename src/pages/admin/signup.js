import Image from 'next/image';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-4">
        <Image src="/images/logo.png" alt="Logo" width="50" height="50" />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up to Admin</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" placeholder="Your Email" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="w-full p-2 border rounded" placeholder="Your Password" required />
        </div>
        <button type="submit" className="bg-teal-500 text-white p-2 rounded hover:bg-teal-600">Sign Up</button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-gray-700">
          Already have an account? 
          <Link href="/admin/signin">
            <a className="text-blue-500"> Sign in</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
