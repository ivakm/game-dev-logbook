import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="max-w-4xl mx-auto px-4">
        <ul className="flex items-center justify-between py-4">
          <li>
            <Link href="/" className="text-lg font-semibold">
              Game Dev Logbook
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
