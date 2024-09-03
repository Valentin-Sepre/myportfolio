import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 text-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">
          <Link href="/">
            <p className="text-[rgb(57,255,20)] cursor-pointer">DeVall</p>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/" passHref
            className="text-[rgb(57,255,20)] hover:text-white"> Accueil
          </Link>
          <Link href="/contact" passHref
            className="text-[rgb(57,255,20)] hover:text-white">Contact
          </Link>
          <Link href="/github" passHref
            className="text-[rgb(57,255,20)] hover:text-white">
            <FontAwesomeIcon className='w-6' icon={faGithub} size="lg" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/valentin-sepr%C3%A9-01a4b4160/"
            target="_blank"
            rel="noopener noreferrer"
            passHref
            className="text-[rgb(57,255,20)] hover:text-white">
            <FontAwesomeIcon className='w-6' icon={faLinkedin} size="lg" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
