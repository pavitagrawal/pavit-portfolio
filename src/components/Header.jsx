import React, { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
const pages = [['/','Home'],['/projects','Projects'],['/experience','Experience'],['/achievements','Achievements'],['/resume','Resume']];
export default function Header({ theme, toggleTheme, path, navigate }) {
  const [open, setOpen] = useState(false);
  const go = (to) => { navigate(to); setOpen(false); };
  return <header className="site-header"><div className="nav-shell">
    <button className="brand brand-mark" onClick={() => go('/')} aria-label="Pavit Agrawal home">
      <svg viewBox="0 0 42 42" role="img" aria-hidden="true">
        <path d="M12 31V11h11.5a7 7 0 0 1 0 14H12" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="31" r="3.2" fill="currentColor"/>
        <circle cx="29.5" cy="18" r="3.2" fill="currentColor"/>
      </svg>
    </button>
    <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'page-nav open' : 'page-nav'}>{pages.map(([to,label]) => <button key={to} className={path === to ? 'active' : ''} onClick={() => go(to)}>{label}</button>)}<button className="theme-button" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button></nav>
  </div></header>;
}
