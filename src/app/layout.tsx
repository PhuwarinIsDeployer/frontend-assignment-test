"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4 font-bold">
          <Link className="pr-4" href="/">
            Home
          </Link>
          <Link className="pr-4" href="/todo-list">
            Todo-List
          </Link>
          <Link className="pr-4" href="/summary-department">
            Summary-User
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
