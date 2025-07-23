import "./styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Kuis TKA Online",
  description: "Platform EduSijaXpert",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <div className="layout">
          <header className="header">
            <nav className="nav">
              <Link href="/" className="logo">EduSijaXpert</Link>
              <ul className="menu">
                <li><Link href="/" className="nav-link">Beranda</Link></li>
                <li><Link href="/quiz" className="nav-link">Kuis</Link></li>
                <li><Link href="#" className="nav-link">Leaderboard</Link></li>
              </ul>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="footer">
            <p>© 2025 EduSijaXpert. Semua Hak Dilindungi.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
