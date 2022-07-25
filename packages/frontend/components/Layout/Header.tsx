import Image from 'next/image';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { RiShoppingCart2Line } from 'react-icons/ri';

import { HeaderAvatar } from './HeaderAvatar';
import { PrivateElements } from '../Private/PrivateElements';

import { INDEX_PATH, SIGN_IN_PATH, SIGN_UP_PATH } from 'lib/paths';

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0">
      <nav className="navbar bg-base-300 space-x-6">
        <Link href={INDEX_PATH}>
          <a>
            <Image src="/logo.png" width={140} height={50} alt="logo" />
          </a>
        </Link>
        <form className="h-11 border border-black rounded-full bg-white overflow-hidden flex items-stretch flex-1">
          <button className="w-11 flex items-center justify-center">
            <FiSearch size={19} />
          </button>
          <input
            placeholder="Search courses"
            className="outline-none bg-transparent flex-1"
          />
        </form>
        <Link href="#">
          <div className="indicator">
            <span className="indicator-item badge badge-xs"></span>
            <RiShoppingCart2Line size={26} />
          </div>
        </Link>
        <PrivateElements loggedIn>
          <HeaderAvatar />
        </PrivateElements>
        <PrivateElements loggedIn={false}>
          <Link href={SIGN_IN_PATH}>
            <a className="btn btn-outline">Sign In</a>
          </Link>
          <Link href={SIGN_UP_PATH}>
            <a className="btn btn-active">Sign Up</a>
          </Link>
        </PrivateElements>
      </nav>
    </header>
  );
};
