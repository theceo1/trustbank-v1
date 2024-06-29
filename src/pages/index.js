import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>trustbank</title>
        <meta name="description" content="Cryptocurrency Exchange Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold text-center">
          Welcome to <span className="text-teal-500">trustbank!</span>
        </h1>
        <Link href="/dashboard">
          <span className="mt-6 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 cursor-pointer">Go to Dashboard</span>
        </Link>
      </main>
    </div>
  );
}
