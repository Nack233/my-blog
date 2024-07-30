import React from 'react';
import { IconHome, IconInfoCircle, IconMail, IconPencilPlus, IconLogout } from '@tabler/icons-react';

const SidebarNormal = () => {
  const handleLogout = () => {
    // Clear the authentication token from localStorage or cookies
    localStorage.removeItem('authToken');

    // You can also call an API to handle logout on the server side if needed
    // fetch('/api/logout', { method: 'POST' });

    // Redirect to blogs page after logout
    window.location.href = '/blogs';
  };

  return (
    <aside style={{ backgroundColor: '#FDF7C3' }} className="w-1/6 p-4 bg-white h-screen flex flex-col shadow">
      <a href="/createpost" className="w-full bg-blue-500 text-white px-4 py-2 mb-4 rounded hover:bg-blue-600 flex items-center justify-center">
        <IconPencilPlus className="mr-2" />
        Create Post
      </a>
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
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 rounded text-gray-700 hover:text-yellow-500 w-full text-left"
          >
            <IconLogout className="mr-2" />
            Logout
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default SidebarNormal;
