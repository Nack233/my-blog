// components/MainContent.tsx

import React from 'react';
import PostCard from './PostCard';

const MainContent = () => {
  return (
    <main className="w-5/6 p-4 bg-white shadow">
      <PostCard 
        title="My Life as an Internet Novel"
        date="โพสต์เมื่อ 22 วันที่แล้ว"
        genres={["Comedy", "Drama", "Fantasy", "Manhwa", "Romance", "School Life", "Shoujo", "Slice of Life"]}
        synopsis="Synopsis My Life as an Internet Novel สุ่มหัวใจนักอ่านประกอบ"
        latestChapter="Chapter 212 (su 555)"
      />
      <PostCard 
        title="I Won't Pick Up The Trash I Threw Away Again"
        date="โพสต์เมื่อ 31 พฤษภาคม 2023"
      />
      <PostCard 
        title="Can We Become a Family"
        date="โพสต์เมื่อ 22 พฤษภาคม 2023"
      />
    </main>
  );
}

export default MainContent;
