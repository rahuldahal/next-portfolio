'use client';

import Link from 'next/link';
import classNames from 'classnames';
import { navLinks } from '../constants';
import { Roboto } from 'next/font/google';
import useBreakpoint from '../hooks/useBreakpoint';
import NavBar from './NavBar';
import TabBar from './TabBar';

const roboto = Roboto({ weight: '300', subsets: ['latin'] });

interface props {
  active: string;
}

export default function Nav({ active }: props) {
  const widerThan768 = useBreakpoint(768);
  return (
    <nav className={roboto.className}>
      {/* Tab bar on smaller screens
       Navigation bar on wider screens */}

      {widerThan768 ? <NavBar active={active} /> : <TabBar active={active} />}
    </nav>
  );
}
