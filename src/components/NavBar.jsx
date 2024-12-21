import React, { useState, useContext, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';

import logo from '../assets/MyIcon.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import { AppContext } from '../app-context/AppContext';


const navigationItems = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Skills', href: '#', current: false },
  { name: 'Experience', href: '#', current: false },
  { name: 'Education', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {


  const [navigation, setNavigation] = useState(navigationItems);

  const handleNavigationClick = (name) => {
    setNavigation(navigation.map(item => ({
      ...item,
      current: item.name === name,
    })));
  };

  const { state, setState } = useContext(AppContext);
  useEffect(() => {
    if (state===undefined){
      handleNavigationClick(navigationItems[0]);
    }
    else {
      handleNavigationClick(state);
    }
  }, [state]);

  return (
    <Disclosure as="nav" className="bg-slate-800 fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link
                to="Home"
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => handleNavigationClick("Home")}>
                <img className='mx-2 w-10' src={logo} alt='logo' />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.name}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={() => handleNavigationClick(item.name)}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className='flex justify-center gap-4 lg:text-2xl text-basic'>
              <a href='https://www.linkedin.com/in/lakusan' target="_blank" rel="noopener noreferrer">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href='https://github.com/Lakusan' target="_blank" rel="noopener noreferrer">
                <FaGithub></FaGithub>
              </a>
              <a href='https://discordapp.com/users/500697857209139250' target="_blank" rel="noopener noreferrer">
                <FaDiscord></FaDiscord >
              </a>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.name}
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => handleNavigationClick(item.name)}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}