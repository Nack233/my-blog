// components/Sidebar.js

import React from 'react';
import { IconHome, IconInfoCircle, IconMail, IconPencilPlus } from '@tabler/icons-react';

const Sidebar = () => {
  return (
    <aside style={{ backgroundColor: '#FDF7C3' }} className="w-1/6 p-4 bg-white h-screen flex flex-col shadow">
      <ul className="space-y-2">
        <li>
          <a href="/blogs" className="flex items-center px-4 py-2 rounded hover:text-yellow-500 text-gray-700 hover:text-yellow-500">
            <IconHome className="mr-2" />
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="flex items-center px-4 py-2 rounded hover:text-yellow-500 text-gray-700 hover:text-yellow-500">
            <IconInfoCircle className="mr-2" />
            About 
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center px-4 py-2 rounded hover:text-yellow-500 text-gray-700 hover:text-yellow-500">
            <IconMail className="mr-2" />
            Contact
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;