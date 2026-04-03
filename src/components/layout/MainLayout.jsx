import Link from 'next/link';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/" className="text-xl font-bold">TikTok</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link className="hover:text-red-500" href="/">Home</Link></li>
              <li><Link className="hover:text-red-500" href="/profile">Profile</Link></li>
              <li><Link className="hover:text-red-500" href="/upload">Upload</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
    </div>
  );
}
