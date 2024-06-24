import { Link } from '@inertiajs/react';
import React from 'react';

export default function Layout({ children }) {
  return (
    <main>
      <header>
        <Link href="/">Home</Link>&nbsp;
        <Link href="/about">About</Link>&nbsp;
        <Link href="/todos">Todos</Link>&nbsp;
      </header>
      <article>{children}</article>
    </main>
  );
}
