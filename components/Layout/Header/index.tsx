import Link from 'next/link'

export const Header: React.FC = () => (
  <header className="flex justify-between bg-red-400">
    <div className="">React Starter</div>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
    <div>Placeholder</div>
  </header>
)
