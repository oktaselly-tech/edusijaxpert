import "./styles/globals.css"; // Pastikan path-nya benar

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
              <a className="logo" href="/">EduSijaXpert</a>
              <ul className="menu">
                <li><a href="/" className="nav-link">Beranda</a></li>
                <li><a href="/quiz" className="nav-link">Kuis</a></li>
                <li><a href="#" className="nav-link">Leaderboard</a></li>
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
