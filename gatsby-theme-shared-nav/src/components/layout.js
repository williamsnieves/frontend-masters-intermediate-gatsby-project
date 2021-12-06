import * as React from 'react';
import { Nav } from './nav.js';

import '../styles/variables.css';
import '../styles/global.css';
import { content, footer } from '../styles/layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={content}>{children}</main>
      <footer className={footer}>Built with shared nav gatsby</footer>
    </>
  );
}
