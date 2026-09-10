import React from 'react';
import { personalInfo } from '../data/resumeData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 bg-white dark:bg-[#0b1120]">
      <div className="max-w-6xl mx-auto px-6 font-poppins">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a href="#home" className="text-base font-bold text-slate-900 dark:text-white">
              Pavit<span className="text-[#e25822]">.</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Pavit Agrawal. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#e25822] dark:text-slate-400 dark:hover:text-[#e25822] transition-colors text-xs font-semibold"
            >
              Live site
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#e25822] dark:text-slate-400 dark:hover:text-[#e25822] transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#e25822] dark:text-slate-400 dark:hover:text-[#e25822] transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 11v5"></path>
                <path d="M8 8v.01"></path>
                <path d="M12 16v-5"></path>
                <path d="M16 16v-3a2 2 0 1 0 -4 0"></path>
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
