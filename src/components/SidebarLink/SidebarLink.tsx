import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  title: string;
};

const SidebarLink = ({ to, title }: Props) => (
  <Link to={to} className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
    <p className="text-base leading-4">{title}</p>
  </Link>
);

export default SidebarLink;