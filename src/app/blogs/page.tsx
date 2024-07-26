// pages/page.js

import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const Page = () => {
  return (
    <div className="blog-container flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default Page;
