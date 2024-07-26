// components/Sidebar.js

import React from 'react';
import { IconHome, IconInfoCircle, IconMail, IconPencilPlus } from '@tabler/icons-react';

const Sidebar = () => {
  return (
    <aside className="w-1/6 p-4 bg-white h-screen flex flex-col shadow">
      <a href="/createpost" className="w-full bg-blue-500 text-white px-4 py-2 mb-4 rounded hover:bg-blue-600 flex items-center justify-center">
        <IconPencilPlus className="mr-2" />
        Create Post
      </a>
      <ul className="space-y-2">
        <li>
          <a href="/blogs" className="flex items-center px-4 py-2 rounded hover:bg-blue-100 text-gray-700 hover:text-blue-500">
            <IconHome className="mr-2" />
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="flex items-center px-4 py-2 rounded hover:bg-blue-100 text-gray-700 hover:text-blue-500">
            <IconInfoCircle className="mr-2" />
            About
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center px-4 py-2 rounded hover:bg-blue-100 text-gray-700 hover:text-blue-500">
            <IconMail className="mr-2" />
            Contact
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;