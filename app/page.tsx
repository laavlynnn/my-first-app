
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Hi, I'm Lovelyn
      </h1>

      <p className="mt-2">
        Welcome to my Next.js app.
      </p>

      <Link
        href="/projects"
        className="mt-4 inline-block text-blue-500 hover:underline"
      >
        View My Projects
      </Link>
    </main>
  );
}
