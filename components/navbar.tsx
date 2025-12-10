import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="max-w-4xl mx-auto px-4">
        <ul className="flex items-center justify-between py-4">
          <li>
            <Link href="/" className="text-lg font-semibold">
              GameDev Hub
            </Link>
          </li>
          <li className="flex items-center gap-4 text-sm">
            <Link href="/games" className="hover:underline">
              Games
            </Link>
            <Link href="/articles" className="hover:underline">
              Articles
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
