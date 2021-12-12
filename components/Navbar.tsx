import React from 'react';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';
import { Logo } from './Logo';

type NavbarProps = {
  user?: {
    photoURL: string;
  };
  username?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ user, username }) => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" passHref>
            <a className="flex items-center text-pink-500 font-secondary">
              <Logo className="w-8 fill-current mr-3" />
              <span className="font-secondary text-2xl font-semibold -mb-1 hidden md:block">
                fantastic quotes
              </span>
            </a>
          </Link>

          {username && (
            <div className="flex items-center space-x-3">
              <Link href="/admin" passHref>
                <a className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 transition-all hover:bg-gray-700 hover:text-white">
                  <FaPlus className="w-6" />
                  Add a quote
                </a>
              </Link>
              <Link href={`/${username}`} passHref>
                <a className="rounded-full transition hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-800 hover:ring-white">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user?.photoURL}
                    alt="User avatar"
                  />
                </a>
              </Link>
            </div>
          )}

          {!username && (
            <Link href="enter" passHref>
              <a className="rounded-md bg-white py-2 px-3 text-xs font-semibold uppercase text-grey-800 hover:bg-opacity-90 transition-opacity">
                Log in
              </a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
